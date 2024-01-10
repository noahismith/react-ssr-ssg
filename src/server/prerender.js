import fs from 'node:fs';
import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { App } from '../components/App';

// Iterate over pages directory and derive the list of routes
const routes = fs.readdirSync('./src/components/pages').map((file) => {
    const name = file.replace(/\.jsx$/, '').toLowerCase();
    return name === 'home' ? '/' : `/${name}`;
});

// TODO: create html directory if not existing

// Prerender each route, and save to dist folder
for (const route of routes) {
    let destinationPath = `./dist/html${route === '/' ? '/index' : route}.html`;
    const writableStream = fs.createWriteStream(destinationPath);
    const { pipe } = renderToPipeableStream(
        <React.StrictMode>
            <StaticRouter location={route}>
                <App />
            </StaticRouter>
        </React.StrictMode>,
        {
            bootstrapScripts: ['client.bundle.js'],
            onAllReady() {
                // Save the generated HTML to our writable file
                pipe(writableStream);
            },
        }
    );
}
