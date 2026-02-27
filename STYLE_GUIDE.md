# Z&C Group - Style Guide

## Brand Identity

**Company:** Z&C Group
**Industry:** Professional Cleaning & Solar Panel Installation
**Languages:** Swedish (primary), English, Spanish

---

## Color Palette

### Primary Colors

| Name | Variable | Hex | Usage |
|------|----------|-----|-------|
| Primary Blue | `--color-primary` | `#008CCF` | Main brand color, gradients, links |
| Brand Blue | `--color-brand-blue` | `#0066A0` | Gradient backgrounds, hero sections |
| Dark Blue | - | `#006699` | Headings, titles |
| Navy | - | `#1a365d` | Logo text, dark accents |

### Accent Colors

| Name | Variable | Hex | Usage |
|------|----------|-----|-------|
| Brand Yellow | `--color-brand-yellow` | `#FFD200` | CTA buttons, highlights, solar theme |
| Yellow Shadow | - | `rgba(184, 152, 0, 1)` | Button 3D shadow effect |
| Brand Green | `--color-brand-green` | `#28A745` | Success icons, eco indicators |

### Neutral Colors

| Name | Variable | Hex | Usage |
|------|----------|-----|-------|
| Text Main | `--color-text-main` | `#1F2937` | Body text, headings |
| Text Secondary | `--color-text-secondary` | `#6B7280` | Descriptions, captions |
| Background | `--color-bg-white` | `#FFFFFF` | Page background |
| Light Gray | - | `#F8FAFC` | Alternate sections |
| Border | `--color-border` | `#E5E7EB` | Dividers, card borders |

---

## Typography

### Font Family
```css
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Font Weights
- **Regular:** 400
- **Medium:** 500
- **Semi-bold:** 600
- **Bold:** 700
- **Extra-bold:** 800

### Font Sizes

| Element | Desktop | Mobile | Weight |
|---------|---------|--------|--------|
| H1 (Hero) | 3.5rem | 2.2rem | 800 |
| H2 (Section) | 2rem | 1.5rem | 700 |
| H3 (Card) | 1.25rem | 1.1rem | 700 |
| Body | 1rem | 1rem | 400 |
| Small | 0.9rem | 0.85rem | 400 |
| Caption | 0.85rem | 0.8rem | 600 |
| Nav Links | 0.85rem | 0.85rem | 700 |

---

## Spacing & Layout

### Border Radius
```css
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-full: 9999px; /* Pill shape */
```

### Container
```css
max-width: 1200px;
padding: 0 2rem; /* Desktop */
padding: 0 1rem; /* Mobile */
```

### Section Spacing
```css
padding: 5rem 0; /* Desktop */
padding: 3rem 0; /* Mobile */
```

---

## Shadows

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);

/* Glassmorphism */
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
```

---

## Effects

### Glassmorphism (Header)
```css
background: rgba(255, 255, 255, 0.5);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.3);
border-radius: 60px;
```

### Hero Gradient
```css
background: linear-gradient(135deg, var(--color-brand-blue) 0%, var(--color-primary) 100%);
```

### Decorative Glows
```css
/* Yellow glow */
background: radial-gradient(circle, rgba(255, 210, 0, 0.15) 0%, transparent 70%);

/* Blue glow */
background: radial-gradient(circle, rgba(0, 140, 207, 0.3) 0%, transparent 70%);
```

---

## Components

### Primary Button (CTA)
```css
.btn-cta {
    background-color: var(--color-brand-yellow);
    color: var(--color-text-main);
    font-weight: 700;
    padding: 0.75rem 2rem;
    border-radius: var(--radius-full);
    box-shadow: 0 4px 0 rgba(184, 152, 0, 1);
    transition: all 0.3s ease;
}

.btn-cta:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 15px rgba(255, 210, 0, 0.4), 0 2px 0 rgba(184, 152, 0, 1);
}

.btn-cta:active {
    transform: translateY(2px);
    box-shadow: 0 0 0 rgba(184, 152, 0, 1);
}
```

### Card
```css
.card {
    background: white;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: 2rem;
    transition: all 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
    border-color: var(--color-primary);
}
```

### Icon Wrapper
```css
.icon-wrapper {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-md);
    background-color: var(--color-primary-light);
    color: var(--color-primary);
}
```

### Home Link (Breadcrumb)
```css
.home-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: white;
    font-weight: 600;
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.15);
    border-radius: var(--radius-full);
    transition: all 0.3s ease;
}

.home-link:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateX(-5px);
}
```

---

## Responsive Breakpoints

```css
/* Mobile first approach */
@media (max-width: 480px) { /* Small mobile */ }
@media (max-width: 768px) { /* Tablet */ }
@media (max-width: 991px) { /* Mobile/Tablet */ }
@media (min-width: 992px) { /* Desktop */ }
```

---

## Animation & Transitions

### Standard Transition
```css
transition: all 0.3s ease;
```

### Hover Effects
- Cards: `translateY(-5px)` + shadow expansion
- Buttons: `translateY(-2px)` + glow
- Links: Color change to `--color-primary`
- Home link: `translateX(-5px)`

### Pulse Animation (Hero Glow)
```css
@keyframes pulse {
    0% { opacity: 0.5; transform: scale(1); }
    100% { opacity: 0.8; transform: scale(1.1); }
}
animation: pulse 8s infinite alternate;
```

---

## Icons

**Library:** Lucide React

### Common Icons
- `Sun` - Solar services
- `Truck` - Moving cleaning
- `Sparkles` - Deep cleaning
- `Home` - Home cleaning / Home button
- `Eye` - Showing cleaning
- `Wind` - Window cleaning
- `Briefcase` - Office cleaning
- `HardHat` - Construction cleaning
- `Building2` - Staircase cleaning
- `CheckCircle` - List items, features
- `Star` - Ratings, testimonials
- `Menu` / `X` - Mobile navigation
- `ChevronDown` - Dropdown indicators
- `ArrowLeft` / `ArrowRight` - Carousel navigation

---

## File Structure

```
src/
├── assets/
│   ├── logo-removebg-preview.png
│   ├── hero.png
│   └── hero_solar.jpg
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Hero_CalidoModerno.jsx
│   ├── Services.jsx
│   └── ...
├── pages/
│   ├── SolarProjects.jsx
│   └── ServiceDetail.jsx
├── context/
│   └── LanguageContext.jsx
└── styles/
    └── index.css (CSS variables)
```

---

## Best Practices

1. **Use CSS variables** for colors and spacing
2. **Mobile-first** responsive design
3. **Consistent border-radius** using variables
4. **3D button effects** with box-shadow
5. **Glassmorphism** for floating elements
6. **Smooth transitions** (0.3s ease)
7. **Accessible contrast** ratios
8. **Semantic HTML** structure
