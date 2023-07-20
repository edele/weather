# Changelog

## Version 0.0.3

- **Rewrite in Typescript.** Created typescript interfaces via [VS Code extension "JSON to TS"](https://marketplace.visualstudio.com/items?itemName=MariusAlchimavicius.json-to-ts) from fake data in [data.ts](src/data.ts) and put them in [weatherTypes.ts](src/weatherTypes.ts). Then converted all \*.js files to typescript.
- **Display user's IP address for debugging.** This is the only change visible in the UI in this update. I want to detect user's approximate location and display weather before user agrees to share his precise location via GPS. IP geolocation should be precise enough to determine user's city most of the times. And some users will appreciate that this app is useful before requiring additional permissions. I used [request-ip](https://github.com/pbojinov/request-ip/blob/master/src/index.js#L55) library from NPM. The library tries to get IP address from HTTP request headers, for example `x-client-ip`, `x-forwarded-for`, `cf-connecting-ip`, `x-real-ip`, etc. Let's hope that Vercel is covered, we'll see after deploying the app.
- **Add ESLint config**. Next.js framework provides [ESLint config](https://nextjs.org/docs/pages/building-your-application/configuring/eslint). Notable rules among [base config](https://github.com/vercel/next.js/blob/canary/packages/eslint-config-next/index.js): checking imports, [rules of React Hooks](https://react.dev/warnings/invalid-hook-call-warning) and [checking a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#readme)

## Version 0.0.2

- **Fixed app's background and text color styles.** Next.js automatic conversion have broken app's background. `<div id="root">` element disappeared from html because it was defined in public/index.html. It was used in `CRA` version of this app. Fixed it by adding an `id="root"` attribute to the root div node.
- **Deleted `public/index.html` file.** Should have deleted it in the previous PR, but later is better than never.

## Version 0.0.1

- **Intitialized as a Next.js app.** Weather App is something that users will open several times a day for short sessions: a minute or less. It is expected that the App loads instantly. This is why I consider making this app load server side and push prerendered html to it's users.
