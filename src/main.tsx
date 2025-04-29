import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PageBrowseProduct } from './pages/PageBrowseProducts';
import { PageHome } from './pages/PageHome';
import { PageLogin } from './pages/PageLogin';
import { PageNotFound } from './pages/PageNotFound';
import { PageRegister } from './pages/PageRegister';
import { PageResetPassword } from './pages/PageResetPassword';

// TODO: Add css cursor property for every thing that are interactive.
// TODO: When DB and authentication system are implemented, deny page requiring isLogin, isAdmin...

const router = createBrowserRouter([
    { path: '/', element: <PageHome /> },
    { path: '/login', element: <PageLogin /> },
    { path: '/register', element: <PageRegister /> },
    { path: '/products', element: <PageBrowseProduct /> },
    { path: '/reset-password', element: <PageResetPassword /> },
    { path: '/*', element: <PageNotFound /> },
]);

// IDEA: Maybe add Vitest to do Unit and Integration Test for when the project will become more feature rich.

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
