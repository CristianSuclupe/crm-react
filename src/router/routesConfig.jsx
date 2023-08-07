import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout';
import NuevoCliente from '../pages/NuevoCliente';
import Index, { loader as clientesLoader } from '../pages/Index';
import { NUEVOCLIENTE } from './routes';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />, 
        children: [
            {
                index: true,
                element: <Index />,
                loader: clientesLoader
            },
            {
                path: NUEVOCLIENTE,
                element: <NuevoCliente />
            }
        ]
    },

])

export default router;