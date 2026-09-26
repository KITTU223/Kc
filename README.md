# Krutarth Chauhan — Portfolio

The personal portfolio of Krutarth Chauhan, a full-stack developer and founder of [Krutonic](https://krutonic.com). The site presents selected work, technical interests, career milestones, and interactive experiments through a motion-led, editorial interface.

## Highlights

- Interactive hero experience powered by React Three Fiber, Three.js, and a custom canvas shell
- Selected work and product showcases
- Journey, technology stack, philosophy, and contact sections
- Interactive F1, cricket, gaming, and playground experiences
- Smooth scrolling and motion effects with Lenis, GSAP, and Framer Motion
- Responsive layouts with reduced-motion support
- Custom themed 404 page for invalid routes

## Tech Stack

- [Next.js 16](https://nextjs.org/) with the App Router
- [React 19](https://react.dev/) and TypeScript
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Three.js](https://threejs.org/) and [React Three Fiber](https://r3f.docs.pmnd.rs/getting-started/introduction)
- [GSAP](https://gsap.com/), [Framer Motion](https://motion.dev/), and [Lenis](https://lenis.darkroom.engineering/)
- ESLint with the Next.js configuration

## Getting Started

### Requirements

- Node.js 20 or newer

```text
src/
├── app/
│   ├── layout.tsx              # Root layout, fonts, metadata, and global wrappers
│   ├── page.tsx                # Portfolio page composition
│   ├── not-found.tsx           # Custom 404 page
│   ├── globals.css             # Theme tokens and global styles
│   └── responsive.css          # Responsive layout corrections
├── components/
│   ├── about/                  # Personal telemetry and profile content
│   ├── hero/                   # Hero section and digital shell
│   ├── interests/              # F1, cricket, and gaming experiences
│   ├── journey/                # Career timeline
│   ├── layout/                 # Navigation, contact, loader, and scrolling
│   ├── tech/                   # Technology stack section
│   └── work/                   # Selected work and playground sections
└── lib/                        # Shared utilities
public/images/                  # Project and brand assets
```

## Customization

- Update page content in `src/components/`.
- Adjust colors and typography tokens in `src/app/globals.css`.
- Add or replace static media in `public/images/`.
- Update site metadata in `src/app/layout.tsx`.

## Deployment

The project can be deployed to any platform that supports Next.js. For Vercel:

1. Import the repository into [Vercel](https://vercel.com/).
2. Keep the default Next.js build settings.
3. Deploy.

The production build can also be tested locally:

```bash
npm run build
npm run start
```

## Contact

For freelance, product, or collaboration opportunities, visit [krutonic.com](https://krutonic.com).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
