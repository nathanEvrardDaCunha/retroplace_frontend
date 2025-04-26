// TODO: When DB and authentication system are implemented, deny page requiring isLogin, isAdmin...

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/shared/HomePage';
import { LoginPage } from './pages/shared/LoginPage';
import { NotFoundPage } from './pages/shared/NotFoundPage';
import { ProductPage } from './pages/shared/ProductPage';
import { RegisterPage } from './pages/shared/RegisterPage';

// TODO: Add css cursor property for every thing that are interactive.
// TODO: Need to do a burger menu later

// TODO: 1. - Modernize the navbar
// TODO: 2. - DO the "Sort" and "Filter" UI for "Browse Product"
// TODO: 3. - Create "Browse Account"

const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '/login', element: <LoginPage /> },
    { path: '/register', element: <RegisterPage /> },
    { path: '/products', element: <ProductPage /> },
    { path: '/*', element: <NotFoundPage /> },
]);

// IDEA: Maybe add Vitest to do Unit and Integration Test for when the project will become more feature rich.

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
