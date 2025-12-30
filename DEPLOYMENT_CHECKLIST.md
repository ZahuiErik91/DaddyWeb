# 🚀 DaddyFreud Landing Page - Deployment Checklist

## ✅ Pre-Deployment Requirements

### 1. Add Your Font File
- [ ] Download **Slackey-Regular.ttf** from [Google Fonts](https://fonts.google.com/specimen/Slackey)
- [ ] Place the file in `/fonts/Slackey-Regular.ttf`
- [ ] Verify the font loads correctly by opening `index.html` locally

### 2. Review Legal Documents
All three legal documents have been customized with:

#### **Terms of Service** (`legal/terms.html`)
✅ AI hallucination disclaimer  
✅ Medical disclaimer (suicide/crisis hotline language)  
✅ Therapist Mode fraud prevention clause  
✅ €50 liability cap  
✅ Romanian jurisdiction (Bihor County)  

#### **Privacy Policy** (`legal/privacy.html`)
✅ GDPR compliance (Article 9 - Special Category Data)  
✅ Data Controller identification (Zahui Varga Erik)  
✅ Third-party AI processor disclosure (OpenRouter, Anthropic, OpenAI)  
✅ Data retention and deletion rights  
✅ International transfer safeguards (DPF/SCCs)  

#### **Professional User Agreement** (`legal/therapist-agreement.html`)
✅ Penalty of perjury attestation  
✅ HIPAA/GDPR patient data prohibition  
✅ Professional judgment disclaimer  
✅ Malpractice indemnification clause  
✅ Digital signature section (static representation)  

### 3. Contact & Branding
- [x] Contact email: `askdaddyfreud@gmail.com`
- [x] Developer: Zahui Varga Erik
- [x] Copyright: © 2025 DaddyFreud
- [x] Jurisdiction: Romania, Bihor County

---

## 📦 Deployment Steps

### Option A: Cloudflare Pages (Direct Upload)

1. **Prepare Files**
   ```
   Verify your folder structure:
   DaddyWeb/
   ├── index.html
   ├── styles.css
   ├── fonts/
   │   └── Slackey-Regular.ttf ← MUST BE PRESENT
   └── legal/
       ├── terms.html
       ├── privacy.html
       └── therapist-agreement.html
   ```

2. **Upload to Cloudflare**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to **Pages** → **Create a project** → **Upload assets**
   - Drag the entire `DaddyWeb` folder (or select all files/folders)
   - Project name: `daddyfreud` (or your preferred subdomain)
   - Click **Deploy site**

3. **Verify Deployment**
   - Visit `https://daddyfreud.pages.dev` (or your chosen URL)
   - Check that:
     - [ ] Logo displays in Slackey font
     - [ ] All three legal pages load correctly
     - [ ] "Back to Home" links work
     - [ ] Mobile responsive design works
     - [ ] No console errors

### Option B: Cloudflare Pages (Git Integration)

1. **Initialize Git Repository**
   ```bash
   cd "/Users/mac/Downloads/Important backups/DaddyWeb"
   git init
   git add .
   git commit -m "Initial DaddyFreud landing page"
   ```

2. **Push to GitHub**
   ```bash
   git remote add origin <your-github-repo-url>
   git branch -M main
   git push -u origin main
   ```

3. **Connect to Cloudflare**
   - Cloudflare Dashboard → **Pages** → **Create a project** → **Connect to Git**
   - Authorize GitHub and select your repository
   - **Build settings:** Leave empty (static site, no build needed)
   - Click **Save and Deploy**

---

## 🔒 Legal Protection Summary

### Key Protections in Place:

1. **AI Liability Shield**
   - "Hallucination" disclaimer absolves you from incorrect AI output
   - "No human oversight" clause clarifies automated nature
   - User must evaluate advice before acting

2. **Medical Disclaimer**
   - Bold, unavoidable language in Terms
   - Crisis hotline numbers (112 EU, 911 US)
   - No doctor-patient relationship

3. **Professional User Firewall**
   - Separate agreement for Therapist Mode users
   - Indemnification clause shifts malpractice risk to user
   - HIPAA/GDPR prohibition on real patient data

4. **GDPR Compliance**
   - Explicit consent for Special Category Data
   - Data Controller clearly identified
   - User rights (access, erasure, portability) documented

5. **Jurisdiction**
   - Romanian law applies
   - Venue: Bihor County courts
   - Avoids US class-action exposure

---

## ⚠️ Production Recommendations

Before going live with real users:

- [ ] **Legal Review:** Have a Romanian attorney review all documents
- [ ] **E-Signature Integration:** Replace static signature box with DocuSign/Adobe Sign
- [ ] **Identity Verification:** Integrate Stripe Identity for Therapist Mode
- [ ] **Analytics:** Add privacy-respecting analytics (Plausible, Fathom)
- [ ] **Custom Domain:** Set up `daddyfreud.com` (or preferred domain)
- [ ] **SSL Certificate:** Ensure HTTPS (automatic with Cloudflare)
- [ ] **Age Gate:** Consider adding 18+ verification on app signup
- [ ] **Crisis Resources:** Add dedicated crisis support page with international hotlines

---

## 📞 Support

**Developer:** Zahui Varga Erik  
**Email:** askdaddyfreud@gmail.com  
**License:** All rights reserved © 2025

---

## ✨ Design Credits

**Aesthetic:** Notion-style meets edgy minimalism  
**Fonts:** Slackey (logo), Inter (body), JetBrains Mono (headers)  
**Colors:** Stark black (#0a0a0a) & white (#ffffff)  
**Framework:** Pure HTML5 + CSS3 (no build tools)

**Built:** December 30, 2025

