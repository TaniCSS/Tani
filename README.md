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

**Option 1: Download**

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

<div align="center">

**Made with ❤️ for the web community**

**If you find Tani useful, please consider giving it a ⭐ star!**

[⭐ Star this repo](https://github.com/TaniCSS/Tani) • [🍔 Fork this repo](https://github.com/TaniCSS/Tani/fork) • [📖 Read the docs](https://tanicss.github.io/docs)

</div>
