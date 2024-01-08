import express from 'express';
import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { App } from '../components/App';

const app = express();

app.use(express.static('dist'));

app.use('*', (request, response) => {
    const { pipe } = renderToPipeableStream(<App />, {
        bootstrapScripts: ['client.bundle.js'],
        onShellReady() {
            response.statusCode = 200;
            response.setHeader('content-type', 'text/html');
            pipe(response);
        },
        onShellError(error) {
            response.statusCode = 500;
            response.setHeader('content-type', 'text/html');
            response.send('<h1>Error</h1>');
        },
    });
});

app.listen(3000, '192.168.0.120', () => {
    console.log('App is running on http://192.168.0.120:3000');
});
