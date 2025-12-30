# Game Dev Portfolio

This is a GitHub Pages-ready game development portfolio showcasing projects with a stylish dark theme design. Built using only HTML, HTMX, JavaScript, and CSS for a static, fast-loading experience.

## 🎮 Features

- **Dark-themed Design**: Modern, eye-catching dark theme with gradient accents
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile devices
- **HTMX Integration**: Partial content loading with graceful fallback to standard navigation
- **Static Site**: Pure HTML/CSS/JS - no build process required, perfect for GitHub Pages
- **Project Showcase**: Detailed project pages featuring:
  - **Pixel Surgeon**: Medical-themed puzzle game
  - **Signal Paradox**: Action game with advanced mechanics
  - **Space Invaders**: Classic arcade game recreation in C++
  - **The Quill Sisters**: Narrative-driven game project
  - **Unreal Environment**: 3D environment design showcase
- **CV Section**: Professional CV page matching the portfolio theme
- **Rich Media**: Videos, GIFs, and images showcasing gameplay and development process
- **Relative Paths**: All links use relative paths for GitHub Pages compatibility

## 📁 Structure

```
Portfolio/
├── index.html          # Landing page with hero section
├── projects.html       # Projects listing page
├── cv.html            # CV/Resume page
├── README.md          # Project documentation
├── css/
│   └── style.css      # Main stylesheet with dark theme
├── js/
│   └── main.js        # JavaScript for interactivity and HTMX handlers
├── projects/          # Individual project detail pages
│   ├── pixel_surgeon.html
│   ├── signalparadox.html
│   ├── space_invaders.html
│   ├── the_quill_sisters.html
│   └── unreal_environment.html
└── assets/            # Images and media files
    ├── IMG_1161.jpg
    ├── pixel_surgeon/
    │   ├── pixel_surgeon_demo_video.mp4
    │   └── pixel_surgeon_demo.gif
    ├── signalparadox/
    │   ├── charger_charging.gif
    │   ├── grenade_throw.gif
    │   ├── signalparadox_demo.mp4
    │   └── ... (various game assets)
    ├── space_invaders/
    │   ├── space_invader_c++.gif
    │   └── space_invader_demo.mp4
    ├── the_quill_sisters/
    │   ├── the_quill_sisters_demo.gif
    │   ├── TQS_shader.gif
    │   └── ... (various game assets)
    └── unreal_environment/
        ├── animated_scene_unreal_engine.mp4
        ├── environment_unrealEngine.PNG
        └── ... (various environment assets)
```

## 🚀 Getting Started

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/AndreasBz/Portfolio.git
   cd Portfolio
   ```

2. Open in a local server (required for HTMX to work properly):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Or using Node.js
   npx http-server
   ```

3. Visit `http://localhost:8000` in your browser

### GitHub Pages Deployment

1. Push your changes to the main branch
2. Go to repository Settings → Pages
3. Select "Deploy from a branch"
4. Choose "main" branch and "/" (root) folder
5. Click Save
6. Your site will be available at `https://andreasbz.github.io/Portfolio/`

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
    --bg-primary: #0a0e27;
    --bg-secondary: #151a30;
    --accent-primary: #00d9ff;
    --accent-secondary: #7b2cbf;
    /* ... */
}
```

### Adding New Projects

1. Add a new project card in `projects.html` following the existing pattern
2. Create a new detail page in `projects/` directory (e.g., `your_project.html`)
3. Add project images and videos to `assets/your_project/` directory
4. Use relative paths: `../css/style.css`, `../assets/your_project/image.png`
5. Include sections for:
   - Project overview and description
   - Key features and mechanics
   - Development process and challenges
   - Media (videos, GIFs, screenshots)
   - Technologies used

### Updating CV

Edit `cv.html` to update your:
- Skills and technologies
- Work experience
- Education
- Contact information

## 🔧 Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with flexbox, grid, and animations
- **JavaScript**: Vanilla JS for interactivity
- **HTMX**: Progressive enhancement for partial content loading

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 HTMX Integration

HTMX is included via CDN for partial content loading. The site works perfectly without it (graceful degradation):
- **With HTMX**: Smooth partial page updates
- **Without HTMX**: Standard navigation works as expected

## 📝 License

This portfolio template is free to use and modify for your own projects.

## 🤝 Contributing

Feel free to fork this repository and customize it for your own game development portfolio!
