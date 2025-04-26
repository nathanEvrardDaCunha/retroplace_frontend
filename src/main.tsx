import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/shared/HomePage';
import { LoginPage } from './pages/shared/LoginPage';
import { RegisterPage } from './pages/shared/RegisterPage';
import { ProductPage } from './pages/shared/ProductPage';
import { NotFoundPage } from './pages/shared/NotFoundPage';

// TODO: When DB and authentication system are implemented, deny page requiring isLogin, isAdmin...

// TODO: Add css cursor property for every thing that are interactive.

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
