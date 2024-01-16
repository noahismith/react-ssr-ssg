import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { About } from './pages/About';
import { Home } from './pages/Home';

export const App = () => {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>SSG/SSR Example</title>
            </head>
            <body>
                <div id="root">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </div>
            </body>
        </html>
    );
};
