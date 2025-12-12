# 🌐 Muhammad Haikal Ramadhika - Portfolio Website

<div align="center">

![Cyberpunk Theme](https://img.shields.io/badge/Theme-Cyberpunk-ff00ff?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI2ZmMDBmZiIgZD0iTTEyIDJMMiA3bDEwIDUgMTAtNS0xMC01eiIvPjwvc3ZnPg==)
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?style=for-the-badge&logo=vite)
![CSS3](https://img.shields.io/badge/CSS3-Custom-1572B6?style=for-the-badge&logo=css3)

**A stunning cyberpunk-themed personal portfolio website for a Network Engineer**

[Live Demo](#) • [Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started)

</div>

---

## 📸 Preview

A futuristic portfolio website inspired by **Cyberpunk 2077** with neon colors, glitch effects, and stunning animations.

## ✨ Features

### 🎨 Design
- **Cyberpunk Aesthetic** - Dark theme with neon cyan, magenta, and yellow accents
- **Glitch Effects** - Animated text glitch on the hero section
- **Floating Particles** - Dynamic background particles
- **Scanline Effect** - Retro CRT monitor effect
- **Smooth Animations** - Fade-in, typing effect, and hover animations

### 📱 Responsive Design
Fully optimized for all screen sizes:

| Breakpoint | Device Type | Width |
|------------|-------------|-------|
| XL | Large Desktop | ≥1440px |
| LG | Desktop | 1200px - 1439px |
| MD | Tablet / Small Desktop | 992px - 1199px |
| SM | Large Mobile / Tablet | 768px - 991px |
| XS | Mobile | 576px - 767px |
| XXS | Small Mobile | 320px - 575px |

### 📄 Sections
1. **Hero** - Introduction with typing effect and stats
2. **About** - Profile with terminal-style bio
3. **Experience** - Timeline of professional experience
4. **Skills** - Animated skill bars and tools
5. **Projects** - Book publications showcase
6. **Certifications** - Professional certifications with descriptions
7. **Contact** - Contact form and social links
8. **Footer** - Quick links and copyright

### ♿ Accessibility
- Reduced motion support for users who prefer less animation
- Semantic HTML structure
- Proper heading hierarchy
- Keyboard navigation support

## 🛠️ Tech Stack

- **Framework**: React 18.x
- **Build Tool**: Vite 7.x
- **Styling**: Custom CSS with CSS Variables
- **Fonts**: Google Fonts (Orbitron, Rajdhani, Share Tech Mono)
- **Animations**: Pure CSS animations

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/haikal-portfolio.git
   cd haikal-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The production files will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx      # Navigation bar
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Experience.jsx  # Experience timeline
│   ├── Skills.jsx      # Skills section
│   ├── Projects.jsx    # Projects/Books
│   ├── Certifications.jsx
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx      # Footer
├── data/
│   └── profileData.js  # All portfolio data
├── App.jsx             # Main app component
├── App.css             # App-level styles
├── index.css           # Global styles & theme
└── main.jsx            # Entry point
```

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --neon-cyan: #00f5ff;
  --neon-magenta: #ff00ff;
  --neon-yellow: #fcee0a;
  --neon-pink: #ff2a6d;
  --neon-purple: #b967ff;
  --neon-green: #05ffa1;
}
```

### Updating Profile Data

Edit `src/data/profileData.js` to update:
- Personal information
- Experience
- Skills
- Projects
- Certifications
- Achievements

## 📜 Certifications Included

| Certification | Issuer | Year |
|--------------|--------|------|
| NSE 6 - FortiProxy | Fortinet | 2024 |
| Fortinet Certified Associate (FCA) | Fortinet | 2025 |
| Fortinet Certified Fundamentals (FCF) | Fortinet | 2025 |
| DCAIE | Cisco | 2025 |
| CCNA | Cisco | 2025 |
| MTCRE | MikroTik | 2023 |
| MTCNA | MikroTik | 2023 |

## 📖 Books Published

1. My Big Dream in AWS
2. Master Can Be Better CCNP (Ongoing)
3. Your Skill in CCNA
4. In Another World with MTCRE
5. Beginner-to-Master MTCNA

## 🤝 Contact

- **Email**: mhaikramadhika7@gmail.com
- **LinkedIn**: [Muhammad Haikal Ramadhika](https://linkedin.com/in/muhammad-haikal-ramadhika-5749b22a6)
- **Location**: Bogor, Indonesia

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built with 💜 using React + Vite**

⚡ Network Engineer | 📚 Book Author | 🎓 Trainer

</div>
