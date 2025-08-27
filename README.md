# Notion-like Portfolio Template

A modern, responsive, and customizable portfolio template inspired by Notion's clean design. Built with Next.js, TypeScript, and Tailwind CSS.

![Portfolio Preview](/public/project_cms.webp)

## ✨ Features

- 🎨 Modern, clean, and responsive design
- 🌓 Dark/Light mode support
- ⚡ Blazing fast performance with Next.js
- 📱 Mobile-friendly interface
- 📝 Easy to customize content
- 🎨 Beautiful animations with Framer Motion
- 📱 Social media integration
- 📧 Contact form with form validation

## 🚀 Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm or yarn or bun

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/notion-portfolio.git
   cd notion-portfolio
   ```

2. Install dependencies

   ```bash
   # Using npm
   npm install

   # OR using yarn
   yarn

   # OR using bun
   bun install
   ```

3. Run the development server

   ```bash
   # Using npm
   npm run dev

   # OR using yarn
   yarn dev

   # OR using bun
   bun run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Project Structure

```
notion-portfolio/
├── app/                    # Next.js app directory
│   ├── about/              # About page
│   ├── api/                # API routes
│   ├── contact/            # Contact page
│   ├── projects/           # Projects pages
│   │   └── [slug]/         # Dynamic project pages
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # Reusable components
│   ├── ui/                 # Shadcn/ui components
│   ├── ArrowButton.tsx     # Animated button component
│   ├── ContactForm.tsx     # Contact form component
│   ├── Footer.tsx          # Footer component
│   ├── Header.tsx          # Header component
│   ├── ProjectCard.tsx     # Project card component
│   ├── SectionCard.tsx     # Section card component
│   ├── Skills.tsx          # Skills section component
│   ├── SocialLinks.tsx     # Social media links
│   └── ThemeToggle.tsx     # Dark/light mode toggle
├── constants/              # Static data
│   ├── about/              # About page content
│   ├── contact/            # Contact information
│   ├── projects/           # Projects data
│   └── testimonials/       # Testimonials data
├── hooks/                  # Custom React hooks
│   ├── use-mobile.tsx      # Mobile detection hook
│   └── use-toast.ts        # Toast notification hook
├── lib/                    # Utility functions
│   ├── constants.ts        # App constants
│   └── utils.ts            # Helper functions
├── public/                 # Static assets
│   ├── images/             # Image assets
│   └── project_*.{webp,png} # Project images
├── .eslintrc.json          # ESLint configuration
├── .prettierrc.json        # Prettier configuration
├── next.config.mjs         # Next.js configuration
├── package.json            # Project dependencies
├── postcss.config.mjs      # PostCSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🎨 Customization

### Update Content

1. **Personal Information**
   - Update your name, title, and bio in `constants/about/index.ts`
   - Update social media links in `components/SocialLinks.tsx`

2. **Projects**
   - Add/update projects in `constants/projects/index.ts`
   - Add project images to `public/` directory

3. **Skills**
   - Update skills in `constants/about/index.ts`

4. **Testimonials**
   - Update testimonials in `constants/testimonials/index.ts`

5. **Contact Information**
   - Update contact details in `constants/contact/index.ts`
   - Configure the contact form in `components/ContactForm.tsx`

### Styling

- Global styles are in `app/globals.css`
- Customize colors in `tailwind.config.js`
- Update theme colors in `app/layout.tsx`

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to a GitHub repository
2. Import the repository on [Vercel](https://vercel.com/import)
3. Deploy with default settings

### Netlify

1. Push your code to a GitHub repository
2. Import the repository on [Netlify](https://app.netlify.com/start)
3. Set the build command to `next build`
4. Set the publish directory to `.next`
5. Deploy!

## 🛠️ Built With

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type checking
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [React Icons](https://react-icons.github.io/react-icons/) - Icons
- [Shadcn/ui](https://ui.shadcn.com/) - UI Components

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by Notion's clean and minimal design
- Built with ❤️ using Next.js and TypeScript
- Icons from [Lucide](https://lucide.dev/)
