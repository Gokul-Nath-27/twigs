---
sidebar_label: Installation
sidebar_position: 1
---

# Installation
To get started with Twigs, run the following commands in your project repository terminal. 

```bash
npm i @sparrowengg/twigs-react
```

:::caution
Twigs is still in alpha. Please expect breaking changes. We'll try our best to make the updates smooth. 
:::

Now, you can wrap your application root in Twigs `ThemeProvider`. 

```jsx
import { ThemeProvider } from '@sparrowengg/twigs-react';

function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  )
}
```

The `theme` object in `ThemeProvider` will help you customize the theme settings of your application. 

For usage with NextJS, check [NextJS setup](./frameworks-usage/nextjs.mdx)