# 🚀 Sikad Website Deployment Guide - Render

## 📋 Prerequisites
- GitHub account
- Render account (free tier available)
- Your Sikad website files

## 🎯 Step-by-Step Deployment Process

### 1. Prepare Your Repository

Make sure you have these files in your project root:
- `index.html` ✅
- `styles.css` ✅
- `script.js` ✅
- `sikadlogo.jpg` ✅
- `server.js` ✅ (created)
- `package.json` ✅ (created)

### 2. Push to GitHub

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial Sikad website deployment"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/sikad-website.git

# Push to GitHub
git push -u origin main
```

### 3. Deploy to Render

#### A. Create Render Account
1. Go to [render.com](https://render.com)
2. Sign up with your GitHub account
3. Connect your GitHub account

#### B. Create New Web Service
1. Click "New +" → "Web Service"
2. Connect your GitHub repository
3. Select your `sikad-website` repository

#### C. Configure Service Settings
```
Name: sikad-inquiry-website
Environment: Node
Build Command: npm install
Start Command: npm start
```

#### D. Environment Variables (Optional)
No environment variables needed for basic deployment.

#### E. Deploy
1. Click "Create Web Service"
2. Render will automatically:
   - Install dependencies
   - Build your application
   - Deploy to a live URL

### 4. Custom Domain (Optional)
1. Go to your service dashboard
2. Click "Settings" → "Custom Domains"
3. Add your domain (e.g., `sikad.yourdomain.com`)
4. Update DNS records as instructed

## 🌐 Your Live Website

After deployment, your website will be available at:
`https://sikad-inquiry-website.onrender.com` (or your custom domain)

## 🔧 Troubleshooting

### Common Issues:
1. **Build Fails**: Check that all files are in the repository
2. **404 Errors**: Ensure `server.js` is properly configured
3. **Styling Issues**: Verify CSS file paths are correct

### Render Free Tier Limitations:
- Services sleep after 15 minutes of inactivity
- Cold start takes ~30 seconds
- 750 hours/month free

## 📱 Features Deployed
- ✅ Responsive design
- ✅ Professional UI/UX
- ✅ All sections (Home, About, How to Use, Safety, Features, Rates, Location, Download)
- ✅ Animations and interactions
- ✅ Mobile optimization
- ✅ SEO-friendly structure

## 🔄 Updates
To update your website:
1. Make changes locally
2. Commit and push to GitHub
3. Render automatically redeploys

## 📞 Support
- Render Documentation: https://render.com/docs
- Render Community: https://community.render.com
