# React SSR/SSG Example

A simplified example of static site generation (SSG) with conditional server side rendering (SSR) using React, Webpack, and Express.

## Getting Started

### Installation

Download this repo and install dependencies. You will also need Node on your machine.

```sh
git clone https://github.com/noahismith/react-ssr-ssg.git
cd react-ssr-ssg
npm install
```

To test SSR start the server without generating the html then open [http://localhost:3000](http://localhost:3000) in your browser.

```sh
npm run start
```

To test conditional SSR generate the html and start the server. Remeber to clear the `dist/` folder to test SSR only.

```sh
npm run generate
npm run start
```

## Resources

[renderToPipeableStream](https://react.dev/reference/react-dom/server/renderToPipeableStream) \
[hydrateRoot](https://react.dev/reference/react-dom/client/hydrateRoot)
