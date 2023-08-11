import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import NuevoCliente, { action as nuevoClienteAction } from '../pages/NuevoCliente';
import Index, { loader as clientesLoader } from '../pages/Index';
import EditarClientes, { loader as editarClienteLoader, action as editarCLienteAction} from '../pages/EditarClientes';
import { action as eliminarClienteAction} from '../components/Cliente';
import { HOME, NUEVOCLIENTE, EDITAR_CLIENTE, ELIMINAR_CLIENTE } from './routes';
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
                action: nuevoClienteAction,
                errorElement: <ErrorPage />
            },
            {
                path: EDITAR_CLIENTE,
                element: <EditarClientes />,
                loader: editarClienteLoader,
                action: editarCLienteAction,
                errorElement: <ErrorPage />
            },
            {
                path: ELIMINAR_CLIENTE,
                action: eliminarClienteAction,
            }
        ]
    },

])

export default router;