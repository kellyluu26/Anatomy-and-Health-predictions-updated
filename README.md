# Anatomy Explorer

A dark, interactive educational anatomy website for exploring the human body through three layers:

- 🦴 Skeletal system
- 💪 Muscular system
- 🫀 Major internal organs
- 🔎 Searchable health-condition library
- 🖱️ Clickable anatomy regions with descriptions and associated health topics
- 📱 Responsive layout for desktop and mobile

## Files

```text
anatomy-explorer/
├── index.html
├── styles.css
├── script.js
└── assets/
    └── skeleton-reference.jpeg
```

## Run locally

### Option 1 — Visual Studio Code + Live Server

1. Open the folder in Visual Studio Code.
2. Install the **Live Server** extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

### Option 2 — Open directly

You can also double-click `index.html`. The site is designed as a static HTML/CSS/JavaScript project.

## Publish on GitHub Pages

Upload the entire folder, including the `assets` folder, to your GitHub repository.

Then:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select `main`.
4. Select `/ (root)`.
5. Click **Save**.
6. Wait for GitHub Pages to publish the site.

### Important

Do not upload only the three code files. The `assets/skeleton-reference.jpeg` image must also be uploaded because the realistic skeleton displayed by the website is stored there.

## Anatomy image

The skeletal view uses the supplied realistic anterior skeleton reference image rather than the previous simplified SVG outline. Transparent clickable zones are positioned over the image so the skeleton remains visually realistic while still supporting interaction.

## Disclaimer

This website is intended for general educational use. It is not a diagnostic, treatment, or medical-advice tool. Health information should be reviewed against reliable medical and anatomy references before being used for educational or clinical purposes.
