# -*- coding: utf-8 -*-
"""Selenium smoke test for Tani v2.3.0 — verifies rendered computed styles,
responsive breakpoints, dark-mode toggle, RTL logical spacing, and screenshots key pages."""
import os, sys
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By

ROOT = "/home/kali/Desktop/Tani"
URL = "file://" + os.path.join(ROOT, "tests/visual/all-components.html")
DOCS = "file://" + os.path.join(ROOT, "index.html")
SHOTS = os.path.join(ROOT, "tests/visual/shots")
os.makedirs(SHOTS, exist_ok=True)

o = Options()
o.binary_location = "/usr/bin/chromium"
o.add_argument("--headless=new")
o.add_argument("--no-sandbox")
o.add_argument("--disable-dev-shm-usage")
o.set_capability("goog:loggingPrefs", {"browser": "ALL"})
d = webdriver.Chrome(service=Service("/usr/bin/chromedriver"), options=o)

results = []
def check(name, cond, detail=""):
    results.append((bool(cond), name, detail))
    print(("PASS " if cond else "FAIL ") + name + (("  -> " + detail) if detail and not cond else ""))

def cs(el, prop):
    return d.execute_script("return getComputedStyle(arguments[0]).getPropertyValue(%r)" % prop, el)

def el(id_):
    return d.find_element(By.ID, id_)

d.get(URL)
d.set_window_size(1200, 1000)

# ---- FILTERS ----
b = el("t-blur"); check("filter blur-sm", "blur(4px)" in cs(b, "filter"), cs(b, "filter"))
g = el("t-gray"); check("filter grayscale", "grayscale" in cs(g, "filter"), cs(g, "filter"))
c = el("t-combo"); f = cs(c, "filter")
check("filter combo (blur+bright+saturate)", "blur(12px)" in f and "brightness(1.5)" in f and "saturate(2)" in f, f)
bd = el("t-bd"); bf = cs(bd, "backdrop-filter")
check("backdrop-blur", "blur(8px)" in bf, bf)

# ---- TRANSFORMS ----
r = el("t-rot"); check("transform rotate-45", "45deg" in cs(r, "rotate"), cs(r, "rotate"))
s = el("t-scl"); check("transform scale-125", "1.25" in cs(s, "scale"), cs(s, "scale"))
tx = el("t-trx"); t = cs(tx, "translate")
check("transform translate-x-4 (16px)", "16px" in t, t)
sk = el("t-skew"); check("transform skew-y-6 (matrix)", "matrix" in cs(sk, "transform") and "none" not in cs(sk, "transform"), cs(sk, "transform"))
c2 = el("t-combo2"); check("transform combo2 rotate-12", "12deg" in cs(c2, "rotate"), cs(c2, "rotate"))

# ---- ANIMATIONS ----
for eid, expect in [("t-ping","ping"),("t-heart","heartBeat"),("t-float","floatY"),("t-spin","spinSlow"),("t-fade","fadeInUp"),("t-shake","shakeX")]:
    an = cs(el(eid), "animation-name")
    check("animation %s" % eid, expect in an, an)

# ---- FIGURE ----
fg = el("t-figure"); check("figure margin 0", cs(fg, "margin-top") == "0px", cs(fg, "margin"))

# ---- FORM validation ----
vf = el("t-vf"); check("valid-feedback visible (is-valid)", cs(vf, "display") == "block", cs(vf, "display"))

# ---- PROGRESS (target the inner .progress-bar, not the .progress container) ----
p1 = d.find_element(By.CSS_SELECTOR, "#t-prog1 .progress-bar"); check("progress striped gradient", "gradient" in cs(p1, "background-image"), cs(p1, "background-image")[:40])
p2 = d.find_element(By.CSS_SELECTOR, "#t-prog2 .progress-bar"); check("progress animated name", "progressStripes" in cs(p2, "animation-name"), cs(p2, "animation-name"))

# ---- OFFCANVAS ----
oc = el("t-oc")
check("offcanvas position fixed", cs(oc, "position") == "fixed", cs(oc, "position"))
t0 = cs(oc, "transform")
check("offcanvas hidden by default (transformed)", t0 not in ("none", "matrix(1, 0, 0, 1, 0, 0)", "matrix(1,0,0,1,0,0)"), t0)
# toggle open (checkbox is d-none, so click via JS); wait for 0.3s transition
d.execute_script("document.getElementById('t-ocToggle').click()")
import time; time.sleep(0.5)
t1 = cs(oc, "transform")
check("offcanvas opens on toggle (transform none/identity)", t1 in ("none", "matrix(1, 0, 0, 1, 0, 0)", "matrix(1,0,0,1,0,0)"), t1)
check("offcanvas backdrop shown", cs(el("t-ocb"), "display") == "block", cs(el("t-ocb"), "display"))

# ---- RESPONSIVE (CDP viewport override — reliable for media queries in headless) ----
resp = el("t-resp")
def set_vp(w, h):
    d.execute_cdp_cmd("Emulation.setDeviceMetricsOverride",
                      {"width": w, "height": h, "deviceScaleFactor": 1, "mobile": False})
    time.sleep(0.2)
set_vp(600, 800); check("responsive d-none below md (600px)", cs(resp, "display") == "none", cs(resp, "display"))
set_vp(820, 900); check("responsive d-md-block at md+ (820px)", cs(resp, "display") == "block", cs(resp, "display"))
set_vp(1200, 1000)

# ---- DARK MODE (force light scheme first so the manual toggle is observable) ----
d.execute_cdp_cmd("Emulation.setEmulatedMedia", {"media": "screen",
    "features": [{"name": "prefers-color-scheme", "value": "light"}]})
time.sleep(0.1)
card = el("t-card")
before = cs(card, "background-color")
d.execute_script("arguments[0].click()", el("t-darkbtn"))
after = cs(card, "background-color")
check("dark-mode toggles card surface", before != after, "%s -> %s" % (before, after))
# restore light for screenshot consistency
d.execute_script("arguments[0].click()", el("t-darkbtn"))
d.execute_cdp_cmd("Emulation.setEmulatedMedia", {"media": "screen",
    "features": [{"name": "prefers-color-scheme", "value": "dark"}]})

# ---- RTL ----
rtl = el("t-rtl")
mr = cs(rtl, "margin-right"); ml = cs(rtl, "margin-left")
check("RTL ms-4 maps to right (16px)", mr == "16px", "mr=%s ml=%s" % (mr, ml))

# ---- SCREENSHOTS ----
d.get(URL); d.set_window_size(1200, 1400); d.execute_script("window.scrollTo(0,0)")
d.save_screenshot(os.path.join(SHOTS, "all-components-light.png"))
d.execute_script("arguments[0].click()", d.find_element(By.ID, "t-darkbtn"))
d.save_screenshot(os.path.join(SHOTS, "all-components-dark.png"))
d.execute_script("arguments[0].click()", d.find_element(By.ID, "t-darkbtn"))
d.set_window_size(390, 800)
d.save_screenshot(os.path.join(SHOTS, "all-components-mobile.png"))

# ---- real docs page: console errors + screenshot ----
d.set_window_size(1280, 1600)
d.get(DOCS)
logs = d.get_log("browser")
errs = [l for l in logs if l.get("level") == "SEVERE"]
check("docs index.html has no SEVERE console errors", not errs, str(errs[:3]))
d.save_screenshot(os.path.join(SHOTS, "docs-index.png"))
d.set_window_size(390, 800); d.get(DOCS); d.save_screenshot(os.path.join(SHOTS, "docs-index-mobile.png"))

d.quit()

passed = sum(1 for r in results if r[0])
print("\n==== SUMMARY: %d/%d passed ====" % (passed, len(results)))
for ok, name, det in results:
    if not ok:
        print("  FAIL:", name, det)
sys.exit(0 if passed == len(results) else 1)
