# Firebase Hosting Deployment Guide

## Prerequisites

1. Install Firebase CLI globally:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

## Initial Setup (First Time Only)

1. Initialize Firebase in your project:
```bash
firebase init hosting
```

When prompted:
- **Select a Firebase project**: Choose an existing project or create a new one
- **What do you want to use as your public directory?**: Enter `out`
- **Configure as a single-page app?**: Yes
- **Set up automatic builds and deploys with GitHub?**: No (optional)
- **Overwrite out/index.html?**: No (if asked)

## Build and Deploy

### Option 1: Using the npm script (Recommended)
```bash
npm run deploy
```

This will:
1. Build your Next.js app (`next build`)
2. Deploy to Firebase Hosting (`firebase deploy --only hosting`)

### Option 2: Manual steps
```bash
# Build the project
npm run build

# Deploy to Firebase
firebase deploy --only hosting
```

## Configuration Files

- **firebase.json**: Firebase hosting configuration
- **next.config.mjs**: Next.js configured for static export
- **.gitignore**: Updated to exclude Firebase cache files

## Important Notes

1. **Static Export**: This project is configured to export as static HTML (`output: 'export'`)
2. **Images**: Images are set to `unoptimized: true` for static hosting
3. **Build Output**: The build creates an `out/` directory which Firebase deploys
4. **WhatsApp Config**: Remember to update your WhatsApp number in `lib/config.js` before deploying

## Viewing Your Site

After deployment, Firebase will provide you with:
- **Hosting URL**: `https://your-project-id.web.app`
- **Custom Domain**: You can add a custom domain in Firebase Console

## Troubleshooting

If you encounter issues:

1. **Clear build cache**:
```bash
rm -rf .next out
npm run build
```

2. **Check Firebase project**:
```bash
firebase projects:list
```

3. **View deployment logs**:
```bash
firebase hosting:channel:list
```

## Custom Domain Setup

1. Go to Firebase Console → Hosting
2. Click "Add custom domain"
3. Follow the DNS configuration steps
4. Wait for SSL certificate provisioning (can take up to 24 hours)

## Environment Variables

If you need environment variables:
1. Create `.env.local` file (already in .gitignore)
2. Add your variables with `NEXT_PUBLIC_` prefix
3. Rebuild and redeploy

## Quick Commands Reference

```bash
# Build only
npm run build

# Deploy only (after building)
firebase deploy --only hosting

# Build and deploy
npm run deploy

# Preview before deploying
firebase hosting:channel:deploy preview

# View hosting info
firebase hosting:sites:list
```

