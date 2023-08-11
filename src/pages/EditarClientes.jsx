import { Form, useNavigate, useLoaderData, redirect, useActionData } from 'react-router-dom'
import { obtenerCliente, actualizarCliente } from '../data/clientes'
import Formulario from '../components/Formulario'
import Errores from '../components/Errores'
import { HOME } from '../router/routes'

export const loader = async ({params}) => {
    const cliente =  await obtenerCliente(params.clienteId)
    if(Object.values(cliente).length === 0){
        throw new Response('', {
            status: 404,
            statusText: 'Not found'
        })
    }
    return cliente
}

export const action = async ({request, params}) => {
    const formData = await request.formData()
    const datos = Object.fromEntries(formData)
    const email = formData.get('email')
    //validación
    const errores = []
    if(Object.values(datos).includes('')){
        errores.push('Todos los campos son obligatorios')
    }
    
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    if(!regex.test(email)){
        errores.push('El email no es válido')
    }
    if(Object.keys(errores).length){
        return errores;
    }
    //actualizar cliente
    await actualizarCliente(params.clienteId, datos)
    return redirect(HOME)
}
const EditarClientes = () => {

    const navigate = useNavigate()
    const cliente = useLoaderData()
    const errores = useActionData()
    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
            <p className="mt-3">Edita los datos del cliente</p>
            <div className="flex justify-end">
                <button
                    className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
                    onClick={() => navigate(HOME)}
                >
                    Volver
                </button>
            </div>
            <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
                {errores?.length && errores.map( (error, index) => <Errores key={index}>{error}</Errores>)}
                <Form
                    method="post"  
                    noValidate         
                >
                    <Formulario
                        cliente={cliente} 
                    />
                    <input 
                        type="submit" 
                        className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
                        value='guardar cambios'
                    />
                </Form>
                
            </div>
        </>
    )
}

export default EditarClientes