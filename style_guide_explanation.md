# Paleta de Colores y Estilo de Z&C Group

## Colores Principales

| Color | Código | Uso |
|-------|--------|-----|
| Azul Primario | `#008CCF` | Gradientes, fondos hero, acentos |
| Azul Oscuro | `#006699` | Títulos principales, headings |
| Azul Marino | `#1a365d` | Texto del logo |
| Amarillo Dorado | `var(--color-brand-yellow)` ~ `#FFD200` | Botones CTA, destacados, iconos solar |
| Verde | `var(--color-brand-green)` | Iconos de check, elementos ecológicos |

## Colores Neutros

| Color | Código | Uso |
|-------|--------|-----|
| Texto Principal | `#333` | Navegación, texto cuerpo |
| Texto Secundario | `var(--color-text-secondary)` | Descripciones |
| Fondo Claro | `#F8FAFC` | Secciones alternadas |
| Blanco | `#FFFFFF` | Cards, fondos |
| Bordes | `var(--color-border)` | Separadores |

## Estilo Visual

### Glassmorphism (Header)

- Background: `rgba(255, 255, 255, 0.5)`
- Backdrop-filter: `blur(20px)`
- Border: `1px solid rgba(255, 255, 255, 0.3)`
- Border-radius: `60px` (pill shape)

### Gradientes

- Hero: `linear-gradient(135deg, var(--color-brand-blue) 0%, var(--color-primary) 100%)`
- Decorativos: Radial gradients amarillos y azules con opacidad

### Botones CTA

- Fondo: Amarillo dorado
- Sombra 3D: `box-shadow: 0 4px 0 rgba(184, 152, 0, 1)`
- Hover: Elevación con sombra expandida
- Border-radius: Pill `(var(--radius-full))`

### Tipografía

- Títulos: `font-weight: 800`, tamaño `3.5rem` (desktop)
- Subtítulos: `font-weight: 700`
- Navegación: Uppercase, `letter-spacing: 0.05em`

### Efectos

- Hover en cards: `translateY(-5px)` + sombra expandida
- Transiciones suaves: `0.3s ease`
- Carrusel: Fade con opacity transition
