# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


### To build, sync, and run your app:

Create a web build witnh ```npx nuxi generate``` or ```npx nuxi build```.
Run ```npx cap sync``` to update your Capacitor project directories with your latest app build.
Run ```npx cap run android``` or ```npx cap run ios``` to run the app from the command line using an installed device OR
(Optional) Run ```npx cap open android``` or ```npx cap open ios``` to open the project in Android Studio or XCode, respectively.
Remember to ````run npx cap sync``` after every new build to ensure your Android and/or iOS project is up-to-date.


### Nuxt tailwind css

```https://tailwindcss.com/docs/installation/framework-guides/nuxt```