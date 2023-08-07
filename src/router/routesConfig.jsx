import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout';
import NuevoCliente, { action as nuevoClienteAction } from '../pages/NuevoCliente';
import Index, { loader as clientesLoader } from '../pages/Index';
import { HOME, NUEVOCLIENTE } from './routes';

const router = createBrowserRouter([
    {
        path: HOME,
        element: <Layout />, 
        children: [
            {
                index: true,
                element: <Index />,
                loader: clientesLoader
            },
            {
                path: NUEVOCLIENTE,
                element: <NuevoCliente />,
                action: nuevoClienteAction
            }
        ]
    },

])

export default router;