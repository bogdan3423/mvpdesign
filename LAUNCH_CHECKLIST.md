# 📋 MVP DESIGN - Launch Checklist

Use this checklist to prepare your website for launch.

## ✅ Phase 1: Content Customization

### Contact Information
- [ ] Update phone number in `components/Header.tsx`
- [ ] Update email in `components/Header.tsx`
- [ ] Update phone number in `components/Footer.tsx`
- [ ] Update email in `components/Footer.tsx`
- [ ] Update address in `components/Footer.tsx`
- [ ] Update all contact info in `app/contact/page.tsx`
- [ ] Update business hours in `components/Footer.tsx`
- [ ] Update business hours in `app/contact/page.tsx`

### Products & Images
- [ ] Replace sample products in `data/products.js` with real products
- [ ] Upload real product images (or use proper URLs)
- [ ] Add more products if needed
- [ ] Verify all product prices are correct
- [ ] Check product categories match your needs
- [ ] Add/remove categories as needed

### Branding
- [ ] Replace MVP DESIGN text logo with your logo (optional)
- [ ] Update company description in `app/about/page.tsx`
- [ ] Update "About Us" story and values
- [ ] Add your company's mission statement
- [ ] Update social media links in `components/Footer.tsx`

### Location & Map
- [ ] Update Google Maps embed in `app/contact/page.tsx`
- [ ] Verify address is correct on all pages
- [ ] Update map location pin to your actual store

## ✅ Phase 2: Functionality Testing

### Navigation
- [ ] Test all menu links on desktop
- [ ] Test mobile menu (hamburger)
- [ ] Verify all pages load correctly
- [ ] Test "Back to Top" button

### Products Page
- [ ] Test search functionality
- [ ] Test category filters
- [ ] Click each "Order by Phone" button
- [ ] Click each "Order by Email" button
- [ ] Verify email pre-fills correctly

### Contact Page
- [ ] Submit test contact form
- [ ] Verify phone link works on mobile
- [ ] Verify email link works
- [ ] Check map loads correctly
- [ ] Read through FAQ answers

### Responsive Design
- [ ] View on mobile phone (real device)
- [ ] View on tablet
- [ ] View on desktop
- [ ] Test landscape and portrait modes
- [ ] Check all images load properly

## ✅ Phase 3: SEO & Performance

### Meta Information
- [ ] Update page titles in each page file
- [ ] Update meta descriptions
- [ ] Add keywords if needed
- [ ] Verify all images have alt text

### Performance
- [ ] Run build command: `npm run build`
- [ ] Check for any build errors
- [ ] Test production build locally
- [ ] Optimize large images

### SEO Basics
- [ ] Add favicon.ico to `/public/`
- [ ] Create robots.txt if needed
- [ ] Add sitemap.xml if needed
- [ ] Set up Google Analytics (optional)

## ✅ Phase 4: Pre-Launch

### Legal & Compliance
- [ ] Add Privacy Policy page (if collecting emails)
- [ ] Add Terms & Conditions (if needed)
- [ ] Add Cookie Notice (if using cookies)
- [ ] Review GDPR compliance (if applicable)

### Contact Form
- [ ] Set up email notifications for form submissions
- [ ] Test form spam protection
- [ ] Add success message email confirmation

### Final Checks
- [ ] Spell-check all pages
- [ ] Verify all prices are in lei (or your currency)
- [ ] Check all links work (internal and external)
- [ ] Test on multiple browsers (Chrome, Safari, Firefox)
- [ ] Ask someone else to review the site

## ✅ Phase 5: Deployment

### Choose Hosting
- [ ] Option A: Deploy to Vercel (easiest)
- [ ] Option B: Deploy to Netlify
- [ ] Option C: Self-host on your server

### Domain Setup
- [ ] Register domain name (if not done)
- [ ] Point domain to hosting
- [ ] Set up SSL certificate (HTTPS)
- [ ] Test www and non-www versions

### Post-Deploy
- [ ] Test live site on mobile
- [ ] Test live site on desktop
- [ ] Verify contact form works on live site
- [ ] Test all order buttons on live site
- [ ] Check Google Maps on live site

## ✅ Phase 6: Post-Launch

### Marketing
- [ ] Share website link on social media
- [ ] Update Google My Business with website
- [ ] Add to email signature
- [ ] Print website on business cards
- [ ] Tell customers about online ordering

### Monitoring
- [ ] Set up Google Analytics
- [ ] Monitor contact form submissions
- [ ] Track which products get most interest
- [ ] Collect customer feedback

### Maintenance
- [ ] Regularly update product inventory
- [ ] Add new products as available
- [ ] Update seasonal offerings
- [ ] Refresh product images
- [ ] Keep contact information current

## 📞 Quick Reference

### File Locations for Common Updates

| What to Update | File Location |
|----------------|---------------|
| Products | `/data/products.js` |
| Phone Number | `components/Header.tsx`, `components/Footer.tsx`, `app/contact/page.tsx` |
| Email | `components/Header.tsx`, `components/Footer.tsx`, `app/contact/page.tsx` |
| Address | `components/Footer.tsx`, `app/contact/page.tsx` |
| Business Hours | `components/Footer.tsx`, `app/contact/page.tsx` |
| About Content | `app/about/page.tsx` |
| Homepage Hero | `app/page.tsx` (lines 11-32) |
| Google Maps | `app/contact/page.tsx` (line ~135) |
| Social Links | `components/Footer.tsx` (lines 102-120) |

## 🎯 Priority Order

If short on time, prioritize in this order:

1. **Critical** ⚠️
   - [ ] Update phone and email
   - [ ] Update address
   - [ ] Add real products

2. **Important** ⭐
   - [ ] Update Google Maps
   - [ ] Test all functionality
   - [ ] Update About Us

3. **Nice to Have** ✨
   - [ ] Add company logo
   - [ ] Customize colors
   - [ ] Add more products

---

**Good luck with your launch! 🚀**

Check off items as you complete them. The website is already functional—these are just customizations to make it yours.
