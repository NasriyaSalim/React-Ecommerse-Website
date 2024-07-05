// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'swiper/css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/icofont.min.css';
import './assets/css/animate.css';
import './assets/css/style.min.css';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import App from './App';
import Blog from './blog/Blog';
import Home from './home/Home';
import Shop from './shop/Shop';
import SingleProduct from './shop/SingleProduct';
import CartPage from './shop/CartPage';
import SingleBlog from './blog/SingleBlog';
import About from './about/About';
import Contact from './contact/Contact';
import Login from './components/Login';
import Signup from './components/Signup';

// Define Routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'blog', element: <Blog /> },
      { path: 'blog/:id', element: <SingleBlog /> },
      { path: 'shop', element: <Shop /> },
      { path: 'shop/:id', element: <SingleProduct /> },
      {
        path: 'cart-page',
        element: (
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        ),
      },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
  { path: 'login', element: <Login /> },
  { path: 'sign-up', element: <Signup /> },
]);

const container = document.getElementById('root');
const root = createRoot(container);

// Render Application
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
