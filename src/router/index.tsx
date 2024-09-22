import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import HomeView from '../views/HomeView';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      caseSensitive: true,
      children: [
        {
          index: true,
          element: <HomeView />,
        },
        {
          path: '/restaurants',
          element: <div>Halaman Utama restaurants</div>,
        },
      ],
    },
  ],
  {
    future: {
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
    },
    hydrationData: {
      loaderData: {
        root: 'ROOT DATA',

        // No index data provided
      },
    },
  }
);

export default router;
