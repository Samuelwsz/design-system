## Iniciar servidor de desenvolvimento

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
npm install @headlessui/react
```

```
npm i class-variance-authority
```

### [Cromatic](https://www.chromatic.com/)

```
npm install --dev chromatic
```

```
npm run build-storybook -s public
```

### crie um arquivo vercel.json na raiz do projeto

```
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "buildCommand": "npm run build-storybook",
  "devCommand": "npm run storybook",
  "installCommand": "npm install",
  "framework": null,
  "outputDirectory": "./storybook-static"
}
```

### artigos sobre storybook e next.js

https://storybook.js.org/blog/get-started-with-storybook-and-next-js/

https://storybook.js.org/blog/integrate-nextjs-and-storybook-automatically/

https://storybook.js.org/blog/page/5
