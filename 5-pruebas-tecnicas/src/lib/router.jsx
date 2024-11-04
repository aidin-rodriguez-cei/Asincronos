import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Catalogo from '../pages/Catalogo';
import Layout from '../Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/catalogo/:id', element: <Catalogo /> },
    ],
  },
]);

export default router;

