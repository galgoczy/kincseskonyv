# Kincseskönyv - E-commerce Platform for Children's Artwork Albums

Kincseskönyv is a modern e-commerce web application for creating personalized children's artwork albums and calendars. The entire application is in Hungarian language.

## 🎨 Features

- **Modern Design System**: Beautiful, playful UI with custom color palette and fonts
- **Product Catalog**: Premium photo albums (20×20cm, 27×27cm) and wall calendars
- **User Dashboard**: Manage projects, orders, and uploaded images
- **Album Designer**: Drag-and-drop interface for creating custom photo layouts (Coming Soon)
- **E-commerce**: Shopping cart, checkout, and payment integration (Coming Soon)
- **Admin Panel**: Order management, coupons, and customer inquiries (Coming Soon)
- **Responsive**: Mobile-first design that works on all devices

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Backend**: Supabase (auth, database, storage)
- **Animations**: Framer Motion
- **Drag & Drop**: @dnd-kit
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Payments**: Stripe (test mode)

## 📦 Installation

1. **Clone the repository**:
```bash
git clone <repository-url>
cd kincseskonyv
```

2. **Install dependencies**:
```bash
npm install
```

3. **Set up environment variables**:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your configuration:
- Supabase URL and keys
- Stripe keys (test mode)
- Other API keys as needed

4. **Run the development server**:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 🏗️ Project Structure

```
kincseskonyv/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   ├── kapcsolat/         # Contact page
│   ├── termekek/          # Products page
│   ├── kezdjuk-el/        # Start page (Coming Soon)
│   ├── aszf/              # Terms & Conditions
│   └── adatvedelem/       # Privacy Policy
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   └── Footer.tsx         # Footer
├── lib/                   # Utility functions
│   └── utils.ts          # Helper functions
├── public/               # Static assets
└── tailwind.config.ts    # Tailwind configuration
```

## 🎨 Design System

### Colors
- **Primary**: Pink shades (#FFB5D8 - #E63E8F)
- **Secondary**: Mint green shades (#A8E6CF - #52C093)
- **Accent**: Yellow shades (#FFE66D - #FFC700)
- **Background**: #FFF8F0
- **Surface**: #FFFFFF

### Typography
- **Sans**: Inter (300, 400, 600, 700)
- **Handwriting**: Caveat (400, 700)

### Key Components
- Buttons: Primary, Secondary, Outline, Ghost
- Cards: Product cards, Project cards
- Forms: Inputs, Selects, Textareas
- Navigation: Header with mobile menu

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 Pages

### Public Pages
- `/` - Homepage with hero, features, products
- `/termekek` - Products catalog
- `/kapcsolat` - Contact form
- `/aszf` - Terms & Conditions
- `/adatvedelem` - Privacy Policy

### Coming Soon
- `/kezdjuk-el` - Project creation wizard
- `/szerkeszto/album/[id]` - Album designer
- `/szerkeszto/naptar/[id]` - Calendar designer
- `/fiok` - User dashboard
- `/kosar` - Shopping cart
- `/penztar` - Checkout
- `/admin` - Admin panel

## 🗄️ Database Schema

The application uses Supabase with the following main tables:
- `users` - User accounts
- `projects` - Album/calendar projects
- `project_pages` - Individual page layouts
- `images` - Uploaded images
- `orders` - Customer orders
- `coupons` - Discount coupons
- `inquiries` - Contact form submissions

## 🔐 Authentication

Authentication is handled by Supabase Auth (to be implemented):
- Email/password sign up
- Email/password sign in
- Password reset flow
- Protected routes for dashboard and admin

## 💳 Payment Integration

Stripe integration in test mode (to be implemented):
- Secure payment processing
- Order confirmation emails
- Invoice generation

## 🌐 Deployment

The application can be deployed to Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

## 📝 License

All rights reserved. © 2025 Kincseskönyv

## 📧 Contact

For questions or support, contact: info@kincseskonyv.hu
