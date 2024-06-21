# Essential Stuff

Google Fonts

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
  rel="stylesheet"
/>
```

## CSS Variables

### Colors

Light colors

```css
--light-background-color: rgb(255, 255, 255);
--light-on-background: rgb(0, 0, 0);
--light-text-color: rgba(0, 0, 0, 0.8);
--light-text-color-gray: rgb(171, 171, 171);
--light-surface-color: rgb(245, 245, 245);
--light-on-surface-color: rgb(125, 125, 125);
--light-main-color: #131415;
```

Dark colors

```css
--dark-background-color: #131415;
--dark-on-background: rgb(222, 235, 225);
--dark-text-color: #deebeb;
--dark-text-color-gray: rgb(158, 174, 174);
--dark-main-color: #ffffff;
```

Primary color

```css
--primary-color: rgb(218, 74, 54);
```

### Typography

```css
--ff-primary:"Inter, sans-serif;
```

Font size

```css
--fs-base: 62.5%;
```

Font weight

```css
--weight-light: 200;
--weight-light: 300;
--weight-regular: 400;
--weight-medium: 500;
--weight-semibold: 600;
--weight-bold: 800;
--weight-: 900;
```

### Border Radius

```css
--radius-extra-small: 4px;
--radius-small: 8px;
--radius-medium: 12px;
--radius-large: 16px;
--radius-x-large: 24px;
--radius-large-end: 0 16px 16px 0;
--radius-extra-large: 28px;
--radius-circle: 50%;
--radius-full: 500px;
```

### Others

```css
--header-height: 64px;
```

Duration

```css
--motion-duration-short-1: 100ms;
--motion-duration-short-2: 200ms;
--motion-duration-medium-1: 250ms;
--motion-duration-medium-2: 400ms;
--motion-duration-long: 500ms;
```

Easing

```css
--motion-easing-linear: cubic-bezier(0, 0, 1, 1);
--motion-easing-standard: cubic-bezier(0.2, 0, 0, 1);
--motion-easing-emphasized: cubic-bezier(0.2, 0, 0, 1);
--motion-easing-emphasized-decelerate: cubic-bezier(0.05, 0.7, 0.1, 1);
--motion-easing-emphasized-accelerate: cubic-bezier(0.3, 0, 0.8, 0.15);
--motion-easing-legacy: cubic-bezier(0.4, 0, 0.2, 1);
```
