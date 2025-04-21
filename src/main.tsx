import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './Home';
import { Login } from './Login';
import { Register } from './Register';

// TODO: When DB and authentication system are implemented, deny page requiring isLogin, isAdmin...

const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        {/* <h1>Hello World</h1> */}
        <RouterProvider router={router} />
    </StrictMode>
);
