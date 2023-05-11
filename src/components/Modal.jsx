import { useState } from 'react';
import Mensaje from './Mensaje';
import CerrarBtn from '../img/cerrar.svg';

const Modal = ({setModal, animarModal, setAnimarModal, gastarGastos}) => {
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [categoria, setCategoria ] = useState('');
    const [mensaje, setMensaje] = useState('')

    const ocultarModal = () => {
        setAnimarModal(false);
        setTimeout(() => {
            setModal(false);
        }, 500);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if ([nombre, cantidad, categoria].includes('')) {
            setMensaje('Todos los campos son oblighatorios');
            return;
        }

        setMensaje('');
        gastarGastos({nombre, cantidad, categoria})
    }

  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img src={CerrarBtn} alt="Cerrar" 
            onClick={ocultarModal} />
        </div>

        <form onSubmit={handleSubmit} 
            className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
            <legend>Nuevo Gasto</legend>
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            <div className='campo'>
                <label htmlFor="nombre">Nombre gasto</label>
                <input type="text" id="nombre" placeholder='Nombre gasto' value={nombre}
                    onChange={(e) => setNombre(e.target.value)}/>
            </div>

            <div className='campo'>
                <label htmlFor="nombre">Cantidad gasto</label>
                <input type="number" id="cantidad" placeholder='Cantidad gasto' value={cantidad}
                    onChange={(e) => setCantidad(Number(e.target.value))}/>
            </div>

            <div className='campo'>
                <label htmlFor="categoria">Categoria gasto</label>
                <select id="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                    <option value="">-- Seleccione</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="gastos">Gastos varios</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="suscribciones">Suscribciones</option>
                </select>
            </div>

            <input type="submit" value="añadir gasto" />
        </form>
    </div>
  )
}

export default Modal