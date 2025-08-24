This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 🌐 国际化支持 (Internationalization)

This project supports both Chinese (中文) and English languages using `next-intl`.

### 支持的语言 (Supported Languages)
- 🇨🇳 中文 (Chinese) - Default
- 🇺🇸 English

### 访问不同语言版本 (Access Different Language Versions)
- 中文版本: [http://localhost:3000/zh](http://localhost:3000/zh)
- English Version: [http://localhost:3000/en](http://localhost:3000/en)
- 根路径会自动重定向到中文版本 (Root path redirects to Chinese version)

### 语言切换 (Language Switching)
页面右上角有语言切换按钮，可以在中英文之间切换。
(Language switcher is available in the top-right corner of the page)

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

The app will automatically redirect to the Chinese version ([http://localhost:3000/zh](http://localhost:3000/zh)).

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
