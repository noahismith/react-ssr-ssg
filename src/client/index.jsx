import { hydrateRoot } from 'react-dom/client';
import { App } from '../components/App';
import React from 'react';

hydrateRoot(
    document,
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
