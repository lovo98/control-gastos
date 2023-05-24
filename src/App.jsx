import { useState, useEffect } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import ListadoGastos from "./components/ListadoGastos";
import {generarId} from './helpers'
import iconoNuevo from './img/nuevo-gasto.svg'

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValid, setIsValid] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState([]);
  const [gastoEditar, setGastosEditar] = useState({});

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true);
      setTimeout(() => {
        setAnimarModal(true);
      }, 500);
    }
  }, [gastoEditar])
  

  const handleNuevoGasto = () => {
    setModal(true);
    setGastosEditar({});
    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  }

  const gastarGastos = gasto => {
    if (gasto.id) {
      const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState);
      setGastos(gastosActualizados);
      setGastosEditar({})
    } else {
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
    }

    setAnimarModal(false);
    setTimeout(() => {
        setModal(false);
    }, 500);
  }

  const eliminarGasto = id => {
    const gastosActualizados = gastos.filter(gasto => gasto.id !== id);
    setGastos(gastosActualizados);
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValid={isValid}
        setIsValid={setIsValid}
      />

      {isValid && (
        <>
          <main>
            <ListadoGastos 
              setGastosEditar={setGastosEditar}
              gastos={gastos}
              eliminarGasto={eliminarGasto}
            />
          </main>
          <div className="nuevo-gasto">
            <img src={iconoNuevo} alt="nuevo" onClick={handleNuevoGasto}/>
          </div>
        </>
      )}

      {modal && <Modal 
        setModal={setModal} 
        animarModal={animarModal} 
        setAnimarModal={setAnimarModal}
        gastarGastos={gastarGastos} 
        gastoEditar={gastoEditar} 
        setGastosEditar={setGastosEditar}
      />}
    </div>
  )
}

export default App
