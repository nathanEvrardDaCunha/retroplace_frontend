import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AccountModificationPage } from './pages/loggers/account-modification/AccountModificationPage';
import { HomePage } from './pages/visitors/home/HomePage';
import { LoginPage } from './pages/visitors/login/LoginPage';
import { NotFoundPage } from './pages/visitors/not-found/NotFoundPage';
import { ProductsPage } from './pages/visitors/products/ProductsPage';
import { RegisterPage } from './pages/visitors/register/RegisterPage';
import { ResetPasswordPage } from './pages/visitors/reset-password/ResetPasswordPage';
import { AccountPage } from './pages/loggers/account/AccountPage';

// TODO: Add css cursor property for every thing that are interactive.
// TODO: When DB and authentication system are implemented, deny page requiring isLogin, isAdmin...

// TODO: Implement authentication for theses routes:
// - account <PageSellerAccount />
// - account-modification <PageAccountModification />

// TODO: Add theses following routes/pages:
// - About us
// - Contacts us

// - Terms
// - Privacy
// - Policy & Safety

// - Price
// - Services

const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '/login', element: <LoginPage /> },
    { path: '/register', element: <RegisterPage /> },
    { path: '/products', element: <ProductsPage /> },
    { path: '/reset-password', element: <ResetPasswordPage /> },
    { path: '/account/:id', element: <AccountPage /> },
    { path: '/account-modification/:id', element: <AccountModificationPage /> },
    { path: '/*', element: <NotFoundPage /> },
]);

// IDEA: Maybe add Vitest to ;do Unit and Integration Test for when the project will become more feature rich.

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
