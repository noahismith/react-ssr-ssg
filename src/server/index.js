import express from 'express';
import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { App } from '../components/App';
import path from 'node:path';

const app = express();

// Middleware serve static js
app.use(/.*js$/, (req, res) => {
    res.sendFile(path.resolve(__dirname, `./${req.originalUrl}`));
});

app.use('/', (req, res, next) => {
    // Derive the file path from route
    let prerenderedPath = path.resolve(
        __dirname,
        req.originalUrl === '/'
            ? './html/index.html'
            : `./html${req.originalUrl}.html`
    );
    // Send prerendered html (SSG)
    res.sendFile(prerenderedPath, (err) => {
        // Ignore favicon request
        if (req.originalUrl === '/favicon.ico') {
            res.status(404).send('Not found');
        }
        // Static file not found, fallback to (SSR)
        if (err) {
            const { pipe } = renderToPipeableStream(
                <React.StrictMode>
                    <StaticRouter location={req.url}>
                        <App />
                    </StaticRouter>
                </React.StrictMode>,
                {
                    bootstrapScripts: ['client.bundle.js'],
                    onShellReady() {
                        res.statusCode = 200;
                        res.setHeader('content-type', 'text/html');
                        pipe(res);
                    },
                    onShellError(error) {
                        res.statusCode = 500;
                        res.setHeader('content-type', 'text/html');
                        res.send('<h1>Error</h1>');
                    },
                }
            );
            console.log('SSR');
        } else {
            console.log('SSG');
        }
    });
});

app.listen(3000, () => {
    console.log('App is running on ');
});
