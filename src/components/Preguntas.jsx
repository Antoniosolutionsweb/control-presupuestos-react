import React, { useState } from 'react'
import Error from './Error';

const Preguntas = ({guardarPresupuesto,guardarRestante,actualizarPregunta}) => {

    // definir el state 
    const [cantidad , guardarcantidad] = useState(0);
    const [error, guardarError] = useState(false)

    // funcion que lee nuestro presupuesto
    const definirPresupuesto= (e) => {
        guardarcantidad(parseInt(e.target.value)) 
    }

    // submit para definir nuestro presupuesto

   const agregarPresupuesto = (e) =>{
    e.preventDefault();

    // validar

    if(cantidad < 1 || isNaN(cantidad)){
        guardarError(true)
        return
    }

 

    // que hacer despues de que se valide
    guardarError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    actualizarPregunta(false)

    


   }
  return (
    <>
      <h2>Coloca tu presupuesto mensual</h2>
      {error ?<Error mensaje='Hubo un error al ingresar el presupuesto'/> : null}
      <form action="" onSubmit={agregarPresupuesto}>
            <input 
                type="number" 
                name=""
                placeholder='Ingresa tu presupuesto'
                className='u-full-width'
                onChange={definirPresupuesto}
            
            />
            <input 
                type="submit"
                className='button-primary u-full-width'
                value='Definir tu presupuesto'
            
            />
      </form>
    </>
  )
}

export default Preguntas
