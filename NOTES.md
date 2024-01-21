## Notes

Remove de `favicon.ico` asset from the `/app` folder

The `metadata` object on the `layout.tsx` file should contain, at least, the following properties:

```javascript
export const metadata = {
  title: "Next.js App",
  description: "Next.js App with Mantine",
  manifest: "manifest.json",
  icons: {
    apple: "/apple-touch-icon.png",
  },
};
```

It is also necesary to add the following a `postcss.config.cjs` file at the top level of the project:

```javascript
module.exports = {
  plugins: {
    "postcss-preset-mantine": {},
    "postcss-simple-vars": {
      variables: {
        "mantine-breakpoint-xs": "36em",
        "mantine-breakpoint-sm": "48em",
        "mantine-breakpoint-md": "62em",
        "mantine-breakpoint-lg": "75em",
        "mantine-breakpoint-xl": "88em",
      },
    },
  },
};
```
