import NuevoPresupuesto from "./NuevoPresupuesto"
import ControlPresupuesto from "./ControlPresupuesto"

// eslint-disable-next-line react/prop-types
const Header = ({presupuesto, setPresupuesto, isValid, setIsValid}) => {
  return (
    <header>
        <h1>Planificador de gastos</h1>
        {isValid ? (
          <ControlPresupuesto 
            presupuesto={presupuesto}
          />
        ) : (
          <NuevoPresupuesto 
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValid={setIsValid}
          />
        )}
    </header>
  )
}

export default Header