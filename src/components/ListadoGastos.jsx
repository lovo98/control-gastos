import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({setGastosEditar, gastos, eliminarGasto}) => {
  return (
    <div className='listado-gastos contenedor'>
        <h2>{gastos.lengh ? 'Gastos' : 'No hay gastos'}</h2>
        {gastos.map(gasto => (
            <Gasto 
                key={gasto.id}
                gasto={gasto}
                setGastosEditar={setGastosEditar}
                eliminarGasto={eliminarGasto}
            />
        ))}
    </div>
  )
}

export default ListadoGastos