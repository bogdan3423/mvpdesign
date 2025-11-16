# MVP DESIGN - Stationery Store Website

A modern, responsive website for MVP DESIGN stationery store, built with Next.js and Tailwind CSS. The design is inspired by Colorama.ro, featuring a clean layout and user-friendly navigation.

## 🎨 Features

- **Modern Design**: Clean, professional layout with orange accent colors
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Product Showcase**: Beautiful product cards with images, prices, and descriptions
- **Category Filtering**: Easy product filtering by category
- **Search Functionality**: Quickly find products with the search bar
- **Contact Options**: Order by phone or email (no online payment system)
- **Easy to Maintain**: Simple data structure for managing products

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed on your system
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd mvpdesign
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📝 Managing Products

### Adding or Editing Products

All product data is stored in `/data/products.js`. To add, edit, or remove products:

1. Open `/data/products.js`
2. Edit the `products` array following this structure:

```javascript
{
  id: 1,                    // Unique ID
  name: "Product Name",     // Product name
  description: "...",       // Short description
  price: 45.00,            // Price in lei
  category: "Office Supplies", // Must match a category name
  image: "https://...",    // Image URL
}
```

### Managing Categories

Edit the `categories` array in `/data/products.js`:

```javascript
{
  id: 1,
  name: "Category Name",
  description: "Category description",
  image: "https://...",    // Category image URL
}
```

### Using Custom Images

You can use:
- **Unsplash URLs** (like in the examples)
- **Local images**: Place images in `/public/images/` and reference as `/images/filename.jpg`
- **Other image URLs**: Any publicly accessible image URL

## 🎨 Customizing Colors

The website uses these primary colors:
- **Orange**: `#FF7A00` - Main accent color
- **White**: `#FFFFFF` - Background
- **Dark Gray**: `#333333` - Text

To change colors, edit `/tailwind.config.ts`.

## 📄 Pages

### Home Page (`/`)
- Hero banner with call-to-action
- Featured categories
- Featured products (first 6 products)
- About section
- Contact CTA

### Products Page (`/products`)
- All products in a grid layout
- Category filter buttons
- Search functionality
- Order buttons for each product

### About Us Page (`/about`)
- Company story and mission
- Core values
- What we offer
- Call-to-action section

### Contact Page (`/contact`)
- Contact information
- Contact form
- Business hours
- Google Maps location
- FAQ section

## 📞 Contact Information

Update contact details in these files:
- `/components/Header.tsx` - Phone number in header
- `/components/Footer.tsx` - Full contact info in footer
- `/app/contact/page.tsx` - Contact page details

Current defaults:
- **Phone**: +40 756 181 046
- **Email**: orders@mvpdesign.ro
- **Address**: 123 Main Street, Bucharest, Romania

## 🏗️ Project Structure

```
mvpdesign/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── products/          # Products page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── layout.tsx         # Root layout with header/footer
├── components/            # Reusable components
│   ├── Header.tsx        # Site header with navigation
│   ├── Footer.tsx        # Site footer
│   ├── ProductCard.tsx   # Product display card
│   └── ContactForm.tsx   # Contact form
├── data/                  # Data files
│   └── products.js       # Products and categories data
├── public/               # Static files
└── README.md            # This file
```

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Heroicons (SVG)
- **Images**: Next.js Image optimization

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components adapt automatically to screen size.

## 🎯 Order Flow

Since this is not an e-commerce site with online payments:

1. **Browse Products**: Users explore products on the website
2. **Select Products**: Users note down products they want
3. **Contact**: Users call or email with their order
4. **Manual Processing**: Your team processes orders manually
5. **Payment**: Cash or bank transfer (arranged via phone/email)

---

**MVP DESIGN** - Everything for Your Creative and Office Needs


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# mvpdesign
