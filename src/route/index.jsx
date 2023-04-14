import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const Home = lazy(() => import('../component/Home/Home'));
const Login = lazy(() => import('../component/Login'));
const ProductList = lazy(() => import('../component/Product'));

function SuspenseWrapper({ children }) {
  // TODO: replace loading with page loader
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
}

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <SuspenseWrapper>
        <Home />
      </SuspenseWrapper>
    ),
  },
  {
    path: '/login',
    element: (
      <SuspenseWrapper>
        <Login />
      </SuspenseWrapper>
    ),
  },
  {
    path: '/product',
    element: (
      <SuspenseWrapper>
        <ProductList />
      </SuspenseWrapper>
    ),
  },
]);

SuspenseWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};
