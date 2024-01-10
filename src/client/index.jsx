import { hydrateRoot } from 'react-dom/client';
import { App } from '../components/App';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

hydrateRoot(
    document,
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
