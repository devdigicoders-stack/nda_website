# 📁 Shaurya NDA & SSB Academy - Static Assets Guide

Next.js me `public/` directory ke andar rakhi hui koi bhi file sidhe root URL (`/`) se serve hoti hai.

### 📂 Directory Structure:

```
website/public/
├── favicon.svg                  -> Root URL: /favicon.svg
└── assets/
    ├── README.md                -> This guide
    ├── logos/                   -> Academy logos, watermarks, emblems
    │   └── logo.svg             -> URL: /assets/logos/logo.svg
    ├── images/                  -> Academy photos, officers, campus, grounds
    ├── icons/                   -> Custom SVG defense icons, badges, medals
    └── banners/                 -> Hero banners, promotional banners
```

---

### 💡 Code Me Kaise Use Karein:

#### 1. Standard HTML `<img>` tag:
```jsx
<img 
  src="/assets/logos/logo.svg" 
  alt="Shaurya NDA Academy" 
  width="180" 
/>
```

#### 2. Next.js `<Image>` Component:
```jsx
import Image from 'next/image';

<Image
  src="/assets/logos/logo.svg"
  alt="Shaurya NDA Academy"
  width={180}
  height={45}
  priority
/>
```

#### 3. CSS Background Image:
```css
.hero-banner {
  background-image: url('/assets/banners/hero-bg.jpg');
}
```

> **Note:** Next.js me path me `public` likhne ki zaroorat nahi hoti. Bas `/assets/images/your-file.jpg` likhiye!
