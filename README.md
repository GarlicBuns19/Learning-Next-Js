This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
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

***

## What I learned so far
Check out [Next.js routing documentation]([https://nextjs.org/docs/deployment](https://nextjs.org/docs/app/building-your-application/routing)) for more detailed explaining on routing.

To make a dashboard path you have to
#### Create a folder called app/dashboard
Create a layout.tsx with the following code example

```javascript
export default function DashboardLayout({children, // will be a page or nested layout
}: { children: React.ReactNode }) {
    return (
        <section>
            {/* Include shared UI here e.g. a header or sidebar */}
            <nav></nav>

            {children}
        </section>
    )
}
```

Next create a page.tsx with the following code example

```javascript
// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Dashboard() {
  return (
    <h2 className={"text-white font-bold text-2xl"}>App Dashboard</h2>
  )
}
```

Now hit up /dashboard on your browser and it should work!

***
