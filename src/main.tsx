import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PageHome } from './pages/shared/PageHome';
import { PageLogin } from './pages/shared/PageLogin';
import { PageNotFound } from './pages/shared/PageNotFound';
import { PageBrowseProduct } from './pages/shared/PageBrowseProducts';
import { PageRegister } from './pages/shared/PageRegister';

// TODO: Add css cursor property for every thing that are interactive.
// TODO: When DB and authentication system are implemented, deny page requiring isLogin, isAdmin...

const router = createBrowserRouter([
    { path: '/', element: <PageHome /> },
    { path: '/login', element: <PageLogin /> },
    { path: '/register', element: <PageRegister /> },
    { path: '/products', element: <PageBrowseProduct /> },
    { path: '/*', element: <PageNotFound /> },
]);

// IDEA: Maybe add Vitest to do Unit and Integration Test for when the project will become more feature rich.

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
