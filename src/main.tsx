// TODO: When DB and authentication system are implemented, deny page requiring isLogin, isAdmin...

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AccountModificationPage } from './pages/loggers/AccountModificationPage';
import { AccountPage } from './pages/loggers/AccountPage';
import { HomePage } from './pages/visitors/HomePage';
import { LoginPage } from './pages/visitors/LoginPage';
import { NotFoundPage } from './pages/visitors/NotFoundPage';
import { ProductsPage } from './pages/visitors/ProductsPage';
import { RegisterPage } from './pages/visitors/RegisterPage';
import { ResetPasswordPage } from './pages/visitors/ResetPasswordPage';
import { AccountReportsPage } from './pages/loggers/(customer)/AccountReportsPage';
import { BrowseUserPage } from './pages/loggers/(admin)/BrowseUsersPage';
import { BrowseUserReportPage } from './pages/loggers/(admin)/BrowseUserReportPage';
import { BrowseUsersBanPage } from './pages/loggers/(admin)/BrowseUsersBanPage';

// TODO: Implement authentication for theses routes:
// - account/:id
// - account-modification/:id
// - account-reports/:id
// - browse-users

// - browse-users-reports/:id
// - /browse-users-bans

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
    { path: '/account-reports/:id', element: <AccountReportsPage /> },

    { path: '/browse-users', element: <BrowseUserPage /> },
    { path: '/browse-users-reports/:id', element: <BrowseUserReportPage /> },
    { path: '/browse-users-bans', element: <BrowseUsersBanPage /> },
    { path: '/*', element: <NotFoundPage /> },
]);

// IDEA: Maybe add Vitest to for Unit and Integration Test.

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
