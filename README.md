# DaddyFreud Landing Page

A minimalist, Notion-style landing page for DaddyFreud, an AI-assisted self-reflection and addiction recovery tracking app by Zahui Varga Erik.

## 🎨 Design Aesthetic

- **Style:** Notion-inspired meets edgy minimalism
- **Colors:** Stark black and white, dark mode by default
- **Fonts:** Slackey (logo), Inter (body), JetBrains Mono (document headers)
- **UI:** Card-style buttons, distinct borders, ample whitespace

## 📁 File Structure

```
DaddyWeb/
├── index.html              # Main landing page
├── styles.css              # Shared styling for all pages
├── fonts/
│   ├── Slackey-Regular.ttf # Custom logo font (place your file here)
│   └── README.md           # Font installation instructions
├── legal/
│   ├── terms.html         # Terms of Service
│   ├── privacy.html       # Privacy Policy
│   └── therapist-agreement.html  # Therapist Agreement with signature section
└── README.md              # This file
```

## 🚀 Deployment to Cloudflare Pages

### ⚠️ Before Deploying

**Important:** Place your `Slackey-Regular.ttf` font file in the `fonts/` directory before deploying.

If you don't have it yet, download from [Google Fonts](https://fonts.google.com/specimen/Slackey).

### Method 1: Direct Upload (Easiest)

1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Pages** in the left sidebar
3. Click **Create a project** → **Upload assets**
4. Upload all files maintaining the folder structure:
   - `index.html`
   - `styles.css`
   - `fonts/` folder with Slackey-Regular.ttf inside
   - `legal/` folder with all HTML files inside
5. Enter a project name (e.g., `daddyfreud`)
6. Click **Deploy site**

### Method 2: Git Integration

1. Initialize a Git repository in this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Push to GitHub (or GitLab/Bitbucket):
   ```bash
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

3. In Cloudflare Pages:
   - Click **Create a project** → **Connect to Git**
   - Authorize and select your repository
   - Build settings: Leave empty (no build process needed)
   - Click **Save and Deploy**

## ✅ Features

### Landing Page (`index.html`)
- Centered hero section with brand name and tagline
- Three card-style navigation buttons
- Fully responsive design
- Hover effects on interactive elements

### Legal Pages
- Clean document-style layout
- Maximum width 800px for readability
- "Back to Home" navigation link
- Consistent styling across all pages

### Therapist Agreement Special Features
- Digital signature box (visual placeholder)
- Form inputs for professional credentials
- Attestation checkbox with legal language
- Note about production implementation

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `styles.css`:

```css
:root {
    --color-bg: #0a0a0a;           /* Background */
    --color-surface: #1a1a1a;      /* Card backgrounds */
    --color-border: #333333;       /* Borders */
    --color-text-primary: #ffffff; /* Main text */
    --color-text-secondary: #a0a0a0; /* Secondary text */
}
```

### Updating Content
All content is in plain HTML. Simply edit the text within the `<p>`, `<h2>`, `<li>` tags in each file.

### Adding Pages
1. Create a new HTML file in the appropriate directory
2. Copy the structure from an existing page
3. Update the `<title>` and content
4. Link to it from `index.html` if needed

## 📱 Responsive Design

The site is fully responsive and tested on:
- Desktop (1920px+)
- Laptop (1024px - 1920px)
- Tablet (768px - 1024px)
- Mobile (320px - 768px)

## 🔒 Security & Privacy

- No external dependencies except Google Fonts
- No JavaScript (static HTML/CSS only)
- No analytics or tracking scripts
- HTTPS automatically enforced by Cloudflare Pages

## 📝 Notes

- The signature section in `therapist-agreement.html` is a **static visual representation only**
- For production, integrate a real e-signature provider (DocuSign, Adobe Sign, etc.)
- Legal documents include specific provisions for:
  - **AI hallucination disclaimers** (Terms)
  - **GDPR Special Category Data** handling (Privacy)
  - **Professional liability firewall** (Therapist Agreement)
- All documents reflect Romanian jurisdiction (Bihor County)
- Contact: askdaddyfreud@gmail.com

## 🌐 Live Site

After deployment, your site will be available at:
`https://[your-project-name].pages.dev`

You can also add a custom domain in Cloudflare Pages settings.

---

**Built for DaddyFreud – December 2025**

