```markdown
<div align="center">

# 🚀 Tani CSS Framework

### The Most Advanced CSS Framework in History — God Mode Edition

[![Version](https://img.shields.io/badge/version-2.1.0-orange?style=for-the-badge&logo=semver)](https://github.com/TaniCSS/Tani/releases)
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](LICENSE)
[![Size](https://img.shields.io/badge/min-~80KB-green?style=for-the-badge)](https://github.com/TaniCSS/Tani)
[![Size](https://img.shields.io/badge/gzip-~14KB-green?style=for-the-badge)](https://github.com/TaniCSS/Tani)
[![CSS Modern](https://img.shields.io/badge/CSS-Modern%202026-purple?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Zero JS](https://img.shields.io/badge/Zero-JS%20Components-red?style=for-the-badge)](#-god-mode-features)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=for-the-badge)](http://makeapullrequest.com)

**A lightweight, utility-first CSS framework with God Mode features that no other framework offers.**

[📖 Documentation](#-documentation) • [🚀 Quick Start](#-quick-start) • [✨ Features](#-god-mode-features) • [📊 Comparison](#-comparison) • [🎯 Examples](#-examples) • [🆕 v2.1](#-whats-new-in-v21)

</div>

---

## 🆕 What's New in v2.1

A complete utility library + 10 new zero-JS components, with every bug from v2.0 fixed:

- ✅ **12-column Grid system** (`grid-cols-1..12`, `col-span-*`, `gap-*`)
- ✅ **Full Flexbox helpers** (`flex-1`, `flex-grow-*`, `align-self-*`, `order-*`)
- ✅ **Complete spacing scale** (0–5, 6, 8, 10, 12, auto, px — all logical properties)
- ✅ **Typography scale** (`text-xs..7xl`, `font-*`, `leading-*`, `tracking-*`)
- ✅ **Full OKLCH color utilities** (`bg-*`, `text-*`, `border-*` for the whole palette)
- ✅ **Shadows & Glows** (`shadow-xs..2xl`, `glow`, `glow-*`)
- ✅ **Transforms & Transitions** (`scale-*`, `rotate-*`, `translate-*`, `duration-*`, `ease-*`)
- ✅ **Z-index, overflow, opacity, position + inset utilities**
- ✅ **Zero-JS Tabs** (`:checked` + radio inputs)
- ✅ **Zero-JS Tooltips** (`data-tooltip` attributes)
- ✅ **Toggle switch** (accessible checkbox-based)
- ✅ **Skeletons, Avatars (+status), Stat cards, Timeline, Steps/Wizard**
- ✅ **Print styles & high-contrast mode**

---

## 🎯 Overview

Tani is a **next-generation CSS framework** that combines the best of modern CSS features with a utility-first approach. Built with **2026 standards**, it includes features that **no other framework offers**:

- ✅ **Scroll-Driven Animations** (Pure CSS, no JS)
- ✅ **Container Queries** (Component-aware responsiveness)
- ✅ **OKLCH Color System** (Perceptually uniform colors with auto-generated variants)
- ✅ **Zero-JS Components** (Modal, Accordion, Dropdown, Tabs, Tooltip using native HTML)
- ✅ **Native Dark Mode** (System-preference based, zero JS)
- ✅ **RTL/LTR Support** (Logical Properties, built-in)
- ✅ **Fluid Typography** (clamp-based scaling, no media queries)
- ✅ **Debug Mode** (Visual layout inspector)
- ✅ **GPU-Accelerated Utilities** (Hardware-accelerated animations)
- ✅ **Anchor Positioning** (Smart tooltips without JS)
- ✅ **Complete Grid System** (12-col, spans, placement)
- ✅ **Skeletons, Avatars, Stat Cards, Timeline, Steps**
- ✅ **Print & High-Contrast support**

---

## Quick Start

### Installation

**Option 1: CDN (Coming Soon)**
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/TaniCSS/Tani@v2.1.0/dist/css/tani.min.css">
```

```html
<link rel="stylesheet" href="./dist/css/tani.css">
```

### Basic Usage

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My App</title>
    <link rel="stylesheet" href="./dist/css/tani.css">
</head>
<body>
    <div class="container">
        <h1 class="text-center">Hello, Tani!</h1>
        <button class="btn btn-primary">Click Me</button>
    </div>
</body>
</html>
```

## Comparison

| Feature | Tani v2.1 | Tailwind v4 | Bootstrap 5 | Bulma |
|---------|-----------|-------------|-------------|-------|
| **Scroll-Driven Animations** | ✅ | ❌ | ❌ | ❌ |
| **Container Queries** | ✅ | ❌ | ❌ | ❌ |
| **OKLCH Colors** | ✅ | ❌ | ❌ | ❌ |
| **Zero-JS Modal** | ✅ | ❌ | ❌ | ❌ |
| **Zero-JS Accordion** | ✅ | ❌ | ❌ | ❌ |
| **Native RTL/LTR** | ✅ | ⚠️ Plugin | ⚠️ Partial | ✅ |
| **Native Dark Mode** | ✅ | ✅ | ❌ | ❌ |
| **Debug Mode** | ✅ | ❌ | ❌ | ❌ |
| **Anchor Positioning** | ✅ | ❌ | ❌ | ❌ |
| **Zero-JS Tabs** | ✅ | ❌ | ❌ | ❌ |
| **Zero-JS Tooltips** | ✅ | ❌ | ❌ | ❌ |
| **Grid System** | ✅ | ✅ | ✅ | ✅ |
| **Skeletons & Avatars** | ✅ | ✅ | ❌ | ❌ |
| **Timeline & Steps** | ✅ | ❌ | ❌ | ❌ |
| **Size (Gzip)** | ~14KB | ~10KB | ~25KB | ~20KB |
| **JS Dependency** | ❌ None | ⚠️ Purge | ✅ Bundle | ❌ None |

---

## 🎨 Components

Tani includes a comprehensive set of components:

### Buttons

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-outline-primary">Outline</button>
<button class="btn btn-primary btn-lg">Large</button>
<button class="btn btn-primary btn-rounded">Rounded</button>
```

### Cards

```html
<div class="card">
    <div class="card-body">
        <h5 class="card-title">Card Title</h5>
        <p class="card-text">Card content...</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>
```

### Alerts

```html
<div class="alert alert-success" role="alert">
    <strong>Success!</strong> Operation completed.
</div>
```

### Forms

```html
<form>
    <div class="form-group">
        <label class="form-label">Email</label>
        <input type="email" class="form-control" placeholder="name@example.com">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

### Tables

```html
<table class="table table-striped table-hover">
    <thead>
        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>john@example.com</td>
        </tr>
    </tbody>
</table>
```

### Navigation

```html
<nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Tani</a>
        <button class="navbar-toggler" type="button">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
```

### Modals (Zero-JS)

```html
<dialog id="myModal" class="modal">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Modal Title</h5>
            <button onclick="document.getElementById('myModal').close()">&times;</button>
        </div>
        <div class="modal-body">
            <p>Modal content here...</p>
        </div>
    </div>
</dialog>
```

### Accordions (Zero-JS)

```html
<details class="accordion-item">
    <summary>Section 1</summary>
    <div>
        <p>Content for section 1...</p>
    </div>
</details>
```

---

## 🛠️ Utility Classes

### Spacing

```html
<div class="m-3">Margin 1rem</div>
<div class="p-4">Padding 1.5rem</div>
<div class="mt-2 mb-3">Margin top 0.5rem, bottom 1rem</div>
<div class="mx-auto">Centered horizontally</div>
```

### Display

```html
<div class="d-flex justify-content-center align-items-center">
    Centered content
</div>
```

### Text

```html
<p class="text-center text-primary">Centered primary text</p>
<p class="text-muted">Muted text</p>
<p class="text-start">Start-aligned (RTL-aware)</p>
```

### Colors

```html
<div class="bg-primary text-white p-3">Primary background</div>
<div class="bg-success text-white p-3">Success background</div>
```

## 📐 Grid & Flexbox

```html
<!-- 12-column grid -->
<div class="grid grid-cols-3 gap-4">
    <div class="card">One</div>
    <div class="card">Two</div>
    <div class="card">Three</div>
</div>

<!-- Spans -->
<div class="grid grid-cols-4 gap-3">
    <div class="col-span-2">Wide</div>
    <div class="col-span-1">Narrow</div>
    <div class="col-span-1">Narrow</div>
</div>

<!-- Flexbox helpers -->
<div class="d-flex justify-content-between align-items-center gap-3">
    <div class="flex-1">Grows</div>
    <div>Static</div>
</div>
```

## 🆕 Zero-JS Components

### Tabs (via `:checked`)

```html
<div class="tabs">
    <input id="t1" class="tab-input" type="radio" name="tabs" checked>
    <label for="t1" class="tab-label">Home</label>
    <input id="t2" class="tab-input" type="radio" name="tabs">
    <label for="t2" class="tab-label">Profile</label>
    <div class="tab-panels">
        <div class="tab-panel">Home content</div>
        <div class="tab-panel">Profile content</div>
    </div>
</div>
```

### Tooltips (via `data-tooltip`)

```html
<button class="btn btn-primary" data-tooltip="I'm a tooltip">Hover me</button>
<button data-tooltip="bottom">Bottom</button>
```

### Toggle Switch

```html
<div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" id="s1" checked>
    <label class="form-check-label" for="s1">Enable</label>
</div>
```

## 🧩 Data Components

### Skeletons

```html
<div class="skeleton skeleton-text"></div>
<div class="skeleton skeleton-circle" style="width: 3rem; height: 3rem"></div>
```

### Avatars

```html
<div class="avatar avatar-status">JB</div>
<div class="avatar avatar-status offline">SW</div>
<div class="avatar-group">
    <div class="avatar">JB</div>
    <div class="avatar">+9</div>
</div>
```

### Stat Cards / Timeline / Steps

```html
<div class="stat">
    <div class="stat-icon">📈</div>
    <div>
        <p class="stat-label">Revenue</p>
        <div class="stat-value">$24,500</div>
        <span class="stat-change stat-up">↑ 12.4%</span>
    </div>
</div>

<ul class="timeline">
    <li class="timeline-item">
        <div class="timeline-marker marker-done">✓</div>
        <div class="timeline-content"><h4>Shipped</h4></div>
    </li>
</ul>

<ol class="steps">
    <li class="step step-done"><span class="step-label">Account</span></li>
    <li class="step step-active"><span class="step-label">Profile</span></li>
</ol>
```

---

## 🌐 Browser Support

Tani supports all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

**Note:** Some advanced features (Scroll-Driven Animations, Container Queries, Anchor Positioning) require modern browsers. Graceful fallbacks are provided for older browsers.

---

## 📖 Documentation

Full documentation is available at: **[tanicss.github.io/docs](https://tanicss.github.io/docs)**

### Local Documentation

Open `index.html` in your browser to view the complete documentation with examples.

---

## Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting a pull request.

### Development Setup

```bash
# Clone the repository
git clone https://github.com/TaniCSS/Tani.git

# Navigate to the directory
cd Tani

# Open index.html in your browser
open index.html
```

### What to Contribute

- Bug fixes
- New components
- Documentation improvements
- Design enhancements
- Translations
- Performance optimizations
