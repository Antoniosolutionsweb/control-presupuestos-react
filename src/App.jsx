import Preguntas from './components/Preguntas'
import { useState, useEffect } from 'react'
import Formulario from './components/Formulario';
import Listado from './components/listado';
import ControlPresupuesto from './components/ControlPresupuesto';



function App() {
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [creargasto, guardarCrearGasto] = useState(false)


  //useEffect  que actualiza el restante

  useEffect(()=>{
    if(creargasto){
      // agregar un nuevo gasto
      guardarGastos([
        ...gastos,
        gasto
      ]);
      //restando el presupuesto actual

      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);


      // resetear a false
      guardarCrearGasto(false)
    }
  },[gasto,creargasto,gastos,restante])

  // funcion cuando agregemos un nuevo gasto

  const agregarNuevoGasto = gasto =>{
    
  }

  return (
    <div className="container">
      <header>
        <h1>Gastos semanales</h1>
        <div className='contenido-principal contenido'>
          {mostrarpregunta ? 
            (  
              <Preguntas
                  guardarRestante={guardarRestante}
                  guardarPresupuesto={guardarPresupuesto}
                  actualizarPregunta={actualizarPregunta}
              />
            ) : (

                  <div className="row">
                    <div className="one-half column">
                        <Formulario
                          guardarGasto={guardarGasto}
                          guardarCrearGasto={guardarCrearGasto}
                        />
                    </div>
                  <div className="one-half column">
                      <Listado
                        gastos={gastos}
                      />
                      <ControlPresupuesto
                        presupuesto={presupuesto}
                        restante={restante}
                      
                      />
                  </div>
                </div>
                )}
           

            
        </div>

      </header>
    </div>
  )
}

export default App
