import express from 'express';
import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { App } from '../common/App.jsx';

const app = express();

app.use('/*', (request, response) => {
    const { pipe } = renderToPipeableStream(<App />, {
        bootstrapScripts: ['/client.js'],
        onShellReady() {
            response.statusCode = 200;
            response.setHeader('content-type', 'text/html');
            pipe(response);
        },
        onShellError(error) {
            response.statusCode = 500;
            response.setHeader('content-type', 'text/html');
            response.send('<h1>Something went wrong</h1>');
        },
    });
});

app.listen(3000, '192.168.0.120', () => {
    console.log('App is running on http://localhost:3000');
});
