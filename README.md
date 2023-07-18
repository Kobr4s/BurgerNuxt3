# Nuxt 3 Tailwind Tempalte

Start your Nuxt 3 project with Tailwind CSS and a few other useful plugins. Check the list of the plugins below.

## Todo 📒

- Config en fonction de l'environement
- i18n fonctionnel

- Amélioration

  - Validation de form
    - Créer des composables pour utilisation + agréable.
    - exemple : const mail = useValidation({ required, email })
  - Stylelint // https://github.com/nuxt-community/stylelint-module/issues/63
  - Pwa // https://github.com/nuxt/framework/discussions/1823

## Features

- Main features 🤌
  - [Nuxt 3](https://v3.nuxtjs.org/)
  - [Antelope](https://antelopejs.com/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Pinia](https://pinia.esm.dev/)
  - [Vue Use](https://vueuse.org/)
- Sub features 👍
  - [I18n](https://v8.i18n.nuxtjs.org/)
  - [Vite SVG Loader](https://github.com/jpkleemans/vite-svg-loader)
  - [Google Font loader](https://google-fonts.nuxtjs.org/)
  - [Vuelidate](https://vuelidate-next.netlify.app/)
  - [Nuxt Robots](https://github.com/nuxt-community/robots-module#readme)
  - [Pug](https://pugjs.org/api/getting-started.html)
  - [Color mode](https://color-mode.nuxtjs.org/)
  - [Unlighthouse](https://unlighthouse.dev/)
  - [Daisy UI](https://daisyui.com/)
  - [Html validator](https://html-validator.nuxtjs.org/)
  - [Nuxt-icons](https://github.com/nuxt-modules/icon)

## Commands

List of commands available

## Setup

1. Install all the packages 📦

```bash
yarn # or yarn install
```

2. Start the template as dev 🚀

```bash
yarn dev # or yarn run dev
```

3. Enjoy 🎇

## Production

1. Easy way 🏎️

Simple way tu start your app for production using [PM2 Process manager](https://pm2.keymetrics.io/).
Edit the config in `ecosystem.json`.

```bash
yarn start-pm2 # or yarn run start-pm2
```

2. Manual way 🤟

Start by building the Nuxt App and start it

```bash
yarn build-prod && yarn start-prod
```

## More commands

1. Analyze your App with nuxi cli 🔬

```bash
yarn analyze
```

2. Lint with eslint ⚗️

This command will start eslint & stylelint analyse and check after any errors in your code

```bash
yarn lint
```

## Contributors ✨

Powered by [Altab](https://altab.be/) & [Antelope](https://antelopejs.com/)
