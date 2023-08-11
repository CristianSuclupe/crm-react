import { useNavigate, Form, redirect } from 'react-router-dom'
import { HOME, EDITAR_CLIENTE, ELIMINAR_CLIENTE } from '../router/routes'
import { eliminarCliente } from '../data/clientes'

export const action = async ({params}) => {
    console.log(params.clienteId)
    await eliminarCliente(params.clienteId)
    
    return redirect(HOME)
}

const Cliente = ({cliente}) => {

    const navigate = useNavigate()
    const { nombre, empresa, email, telefono, id } = cliente

    return (
        <tr className="border-b">
            <td className="p-6 space-y-2">
                <p className="text-2xl text-gray-800">{nombre}</p>
                <p>{empresa}</p>             
            </td>
            <td className="p-6">
                <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">Email: </ span>{email}</p>
                <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">Telefono: </ span>{telefono}</p>
            </td>
            <td className="p-6 flex gap-3">
                <button
                    type="button"
                    className="text-blue-600 hover:text-blue-700 font-bold uppercase text-xs"
                    onClick={() => navigate(EDITAR_CLIENTE.replace(':clienteId', id))}
                >
                    Editar
                </button>
                <Form
                    method='post'
                    action={ELIMINAR_CLIENTE.replace(':clienteId', id)}
                    onSubmit={(e) => {
                        !confirm('Deseas eliminar el registro?') && e.preventDefault()
                    } }
                >
                    <button
                        type="submit"
                        className="text-red-600 hover:text-red-700 font-bold uppercase text-xs"
                    >
                        Eliminar
                    </button>
                </Form>
                
            </td>
            
        </tr>
    )
}

export default Cliente