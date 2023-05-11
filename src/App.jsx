import { useState } from "react";
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

  const handleNuevoGasto = () => {
    setModal(true);
    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  }

  const gastarGastos = gasto => {
    gasto.id = generarId();
    gasto.fecha = Date.now();
    setGastos([...gastos, gasto]);

    setAnimarModal(false);
    setTimeout(() => {
        setModal(false);
    }, 500);
  }

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValid={isValid}
        setIsValid={setIsValid}
      />

      {isValid && (
        <>
          <main>
            <ListadoGastos 
              gastos={gastos}
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
      />}
    </div>
  )
}

export default App
