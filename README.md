This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## React: criando um Design System com TailwindCSS Alura curso

### [Figma](https://www.figma.com/file/h86gUvqUXTKwgr6tVYinLT/React%3A-Design-System-com-Tailwind?type=design&node-id=143-3228&mode=design)

### Iniciar Projeto

```
npx create-next-app
```

globals.css

css personalizado

```
:root {
    --example: #f58912;
    --example: #f555555;
}

```

tailwind.config.js

```
theme: {
  extend: {
        colors: {
          example: 'var(--example)',
          example-2: 'var(--example-2)',
        }
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
  },
},
```

### [StoryBook](https://storybook.js.org/)

[Artigo de Next.js com storybook](https://storybook.js.org/blog/get-started-with-storybook-and-next-js/)

```
npx sb init --builder webpack5
```

```
npm run storybook
```

na pasta .storybook abra o arquivo main.ts

```
  stories: [
    "../components/**/*.mdx",
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
```

.storybook/preview.ts

```
import '../app/globals.css'
```

```
npm i classnames
```

```
npm install @heroicons/react
```

```
npm i class-variance-authority
```

### artigos sobre storybook e next.js

https://storybook.js.org/blog/get-started-with-storybook-and-next-js/

https://storybook.js.org/blog/integrate-nextjs-and-storybook-automatically/

https://storybook.js.org/blog/page/5
