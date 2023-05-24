import {useState, useEffect} from 'react'

const Filtro = ({filtro, setFiltro}) => {
  return (
    <div className='filtros sombra contenedor'>
        <form>
            <div className='campo'>
                <label htmlFor="">Filtrar gasto</label>
                <select value={filtro}
                    onChange={(e) => setFiltro(e.target.value)}
                >
                    <option value="">-- Todos</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="gastos">Gastos varios</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="suscribciones">Suscribciones</option>
                </select>
            </div>
        </form>
    </div>
  )
}

export default Filtro