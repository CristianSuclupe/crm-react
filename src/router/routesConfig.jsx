import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import NuevoCliente, { action as nuevoClienteAction } from '../pages/NuevoCliente';
import Index, { loader as clientesLoader } from '../pages/Index';
import EditarClientes, { loader as editarClienteLoader} from '../pages/EditarClientes';
import { HOME, NUEVOCLIENTE, EDITAR_CLIENTE } from './routes';
import ErrorPage from '../components/ErrorPage';


const router = createBrowserRouter([
    {
        path: HOME,
        element: <Layout />, 
        children: [
            {
                index: true,
                element: <Index />,
                loader: clientesLoader,
                errorElement: <ErrorPage />
            },
            {
                path: NUEVOCLIENTE,
                element: <NuevoCliente />,
                action: nuevoClienteAction
            },
            {
                path: EDITAR_CLIENTE,
                element: <EditarClientes />,
                loader: editarClienteLoader
            }
        ]
    },

])

export default router;