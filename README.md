# Tani CSS Framework

### The Most Advanced CSS Framework in History — God Mode Edition

[![Version](https://img.shields.io/badge/version-2.0.0-orange?style=for-the-badge&logo=semver)](https://github.com/TaniCSS/Tani/releases)
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](LICENSE)
[![Size](https://img.shields.io/badge/gzip-~15KB-green?style=for-the-badge)](https://github.com/TaniCSS/Tani)
[![CSS Modern](https://img.shields.io/badge/CSS-Modern%202026-purple?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Zero JS](https://img.shields.io/badge/Zero-JS%20Components-red?style=for-the-badge)](#-god-mode-features)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=for-the-badge)](http://makeapullrequest.com)

**A lightweight, utility-first CSS framework with God Mode features that no other framework offers.**

[Documentation](#-documentation) • [Quick Start](#-quick-start) • [Features](#-god-mode-features) • [Comparison](#-comparison) • [Examples](#-examples)

---

## Overview

Tani is a **next-generation CSS framework** that combines the best of modern CSS features with a utility-first approach. Built with **2026 standards**, it includes features that **no other framework offers**:

- **Scroll-Driven Animations** (Pure CSS, no JS)
- **Container Queries** (Component-aware responsiveness)
- **OKLCH Color System** (Perceptually uniform colors with auto-generated variants)
- **Zero-JS Components** (Modal, Accordion, Dropdown using native HTML)
- **Native Dark Mode** (System-preference based, zero JS)
- **RTL/LTR Support** (Logical Properties, built-in)
- **Fluid Typography** (clamp-based scaling, no media queries)
- **Debug Mode** (Visual layout inspector)
- **GPU-Accelerated Utilities** (Hardware-accelerated animations)
- **Anchor Positioning** (Smart tooltips without JS)

## Quick Start

### Installation

**Option 1: CDN (Coming Soon)**
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/TaniCSS/Tani@v2.0.0/dist/css/tani.min.css">
```

**Option 2: Download**

```html
<link rel="stylesheet" href="./dist/css/tani.css">
```

**Option 3: NPM (Coming Soon)**

```bash
npm install tanicss
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

---

## God Mode Features

### 1. Scroll-Driven Animations

Animate elements as they scroll into view — **no JavaScript required**!

```html
<div class="card tani-fade-in">
    This card fades in as you scroll down
</div>

<div class="card tani-scale-in">
    This card scales up as you scroll
</div>
```

```css
/* How it works (built into Tani) */
.tani-fade-in {
    animation: taniFadeIn linear both;
    animation-timeline: view();
    animation-range: entry 0% cover 40%;
}
```

**Browser Support:** Chrome 115+, Edge 115+

---

### 2. Container Queries

Components adapt based on their **container size**, not viewport:

```css
.card {
    container-type: inline-size;
    container-name: tani-card;
}

@container tani-card (min-width: 400px) {
    .card-horizontal-layout {
        display: grid;
        grid-template-columns: 1fr 2fr;
    }
}
```

**Use Case:** A card component that displays vertically in a sidebar and horizontally in main content — without writing separate media queries.

---

### 3. OKLCH Color System

Perceptually uniform colors with **automatic hover states**:

```css
:root {
    --primary: oklch(70% 0.18 70);
    --primary-hover: oklch(from var(--primary) calc(l - 8%) c h);
}

.btn-primary:hover {
    background-color: var(--primary-hover);
}
```

**Benefits:**

- Better color accuracy than HEX/RGB
- Automatic variant generation
- Zero extra code for hover states
- Perfect dark mode compatibility

---

### 4. Zero-JS Components

Modals, accordions, and dropdowns work **without JavaScript**:

```html
<!-- Native Modal (using <dialog>) -->
<button onclick="document.getElementById('myModal').showModal()">
    Open Modal
</button>

<dialog id="myModal" class="modal">
    <div class="modal-content">
        <h3>Modal Title</h3>
        <p>Modal content here...</p>
        <button onclick="document.getElementById('myModal').close()">Close</button>
    </div>
</dialog>
```

```html
<!-- Native Accordion (using <details>) -->
<details class="accordion-item">
    <summary>Click to expand</summary>
    <div>
        <p>Content here...</p>
    </div>
</details>
```

**Benefits:**
- Works even with JavaScript disabled
- Better accessibility (keyboard navigation built-in)
- Smaller bundle size
- Progressive enhancement

---

### 5. Native Dark Mode

Automatically adapts to system preferences — **no toggle needed**:

```css
@media (prefers-color-scheme: dark) {
    :root {
        --body-bg: oklch(15% 0.01 250);
        --body-color: oklch(95% 0.01 250);
    }
}
```

Just include Tani, and dark mode works automatically based on the user's OS settings.

---

### 6. RTL/LTR Support

Built-in support for right-to-left languages using **Logical Properties**:

```css
.container {
    margin-inline: auto; /* Works in both LTR and RTL */
    padding-inline: 1rem;
}

.text-start {
    text-align: start; /* left in LTR, right in RTL */
}
```

**Usage:**

```html
<!-- For RTL languages (Arabic, Hebrew, Persian, etc.) -->
<html lang="ar" dir="rtl">
    <!-- Your content -->
</html>
```

**No extra RTL stylesheet needed!**

---

### 7. Fluid Typography

Smooth scaling from mobile to 4K using `clamp()`:

```css
:root {
    --text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
    --text-2xl: clamp(1.5rem, 1.2rem + 1.5vw, 2.25rem);
}
```

**Benefits:**
- No media queries needed
- Perfect scaling on all devices
- Better readability
- Smaller CSS file

---

### 8. Debug Mode

Visual layout inspector for debugging:

```html
<body class="tani-debug">
    <!-- Your content -->
</body>
```

Adds colored outlines to all elements for easy debugging of spacing, alignment, and layout issues.

---

### 9. Anchor Positioning

Smart tooltips that automatically find the best position:

```css
.tooltip {
    position: absolute;
    position-anchor: --trigger;
    top: anchor(bottom);
    left: anchor(center);
    position-try-fallbacks: flip-block, flip-inline;
}
```

**Benefits:**
- Tooltips automatically flip if there's no space
- No JavaScript positioning calculations
- Works responsively

---

### 10. GPU-Accelerated Utilities

Hardware-accelerated animations for 60fps performance:

```html
<div class="tani-gpu">
    <!-- Smooth 60fps animations -->
</div>

<div class="tani-content-visibility">
    <!-- Optimized rendering for long lists -->
</div>
```

---

## Comparison

| Feature | Tani v2.0 | Tailwind v4 | Bootstrap 5 | Bulma |
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
| **Size (Gzip)** | ~15KB | ~10KB | ~25KB | ~20KB |
| **JS Dependency** | ❌ None | ⚠️ Purge | ✅ Bundle | ❌ None |

---

## Components

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

---

## Browser Support

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

---

## License

Tani is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

- Built with modern CSS standards (2026)
- Inspired by Tailwind CSS, Bootstrap, and Bulma
- Uses [Prism.js](https://prismjs.com/) for syntax highlighting in documentation
- Thanks to all contributors who help make Tani better

---

## Contact

- **GitHub Issues:** [Report a bug](https://github.com/TaniCSS/Tani/issues)
- **Discussions:** [Ask a question](https://github.com/TaniCSS/Tani/discussions)
- **Twitter:** [@TaniCSS](https://twitter.com/TaniCSS)

---

<div align="center">

**Made with ❤️ for the web community**

**If you find Tani useful, please consider giving it a ⭐ star!**

[⭐ Star this repo](https://github.com/TaniCSS/Tani) • [🍔 Fork this repo](https://github.com/TaniCSS/Tani/fork) • [📖 Read the docs](https://tanicss.github.io/docs)

</div>
