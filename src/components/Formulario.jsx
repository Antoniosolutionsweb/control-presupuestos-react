import React, {useState} from 'react'
import Error from './Error';
import shortid from 'shortid';

const Formulario = ({guardarGasto,guardarCrearGasto }) => {
    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false)


    // cuando el usuario registra un gasto
    const agregarGasto = e => {
        e.preventDefault();

        // validar

        if(cantidad < 1 || isNaN(cantidad) ||nombre.trim()===''){
            guardarError(true)
            return
        }
        guardarError(false)

        //construir un gasto

        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()

        }
    
       

        //pasar el gasto al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);

        // resetear el form

        guardarNombre('');
        guardarCantidad('');


    }


  return (
    <form onSubmit={agregarGasto}>
        <h2> Agrega tus gastos Aqui</h2>
        {error ? <Error mensaje='Ambos campos son obligatorios o presupuesto incorrecto'/> : null}
        <div className="campo">
            <label>Nombre del gasto</label>
            <input 
                type="text"
                className='u-full-width'
                placeholder='Ej. Alimentos'
                value={nombre}
                onChange={e =>guardarNombre(e.target.value)}    
            />
        </div>
        <div className="campo">
            <label>Monto del gasto</label>
            <input 
                type="number"
                className='u-full-width'
                placeholder='Ej. 200'
                value={cantidad}
                onChange={e => guardarCantidad(parseInt(e.target.value))}    
            />
        </div>
        <input 
            type="submit"
            className='button-primary u-full-width'
            value='Agregar gasto'   
        />
    </form>
  )
}

export default Formulario
