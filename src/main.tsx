import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { ProductPage } from './pages/ProductPage';
import { NotFoundPage } from './pages/NotFoundPage';

// TODO: When DB and authentication system are implemented, deny page requiring isLogin, isAdmin...

// TODO: Should add a custom 404 page.
const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '/login', element: <LoginPage /> },
    { path: '/register', element: <RegisterPage /> },
    { path: '/products', element: <ProductPage /> },
    { path: '/*', element: <NotFoundPage /> },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
