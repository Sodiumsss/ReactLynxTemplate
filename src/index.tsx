import { root } from '@lynx-js/react';
import "./tailwind.css";
import { App } from './App.jsx';
import { Home } from './Home.jsx';
import { createMemoryRouter, RouterProvider } from 'react-router';

const router = createMemoryRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
], {
  initialEntries: ['/'],
});

root.render(
  <RouterProvider router={router} />
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}