import { BaseDatos2 } from "./componentes/baseDatos2";
import { Contador } from "./componentes/contador";
import { Saludar } from "./componentes/saludar";

function App() {
  return (
    <div className="container-fluid text-light">
      <h1 className="text-center">Segunda Practica de Repaso</h1>
      <Contador/>
      <Saludar nombre = "Arturo" ciudad = "Tehuacán" estado = "Puebla"/>
      <BaseDatos2 />
    </div>
  );
}

export default App;
