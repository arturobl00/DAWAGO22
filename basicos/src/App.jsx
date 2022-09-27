import { Comparar } from "./componentes/comparar";
import { Crud } from "./componentes/crud";
import { Formulario } from "./componentes/formulario";
import { Listas } from "./componentes/listas";

function App() {
  return (
    <div className="container-fluid">
      <Crud/>
      <h1 className="display-1 text-center">Operaciones basicas de programación en React.</h1>
      <h2 className="display-4">1.- Operaciones con Operador Ternario nuevo IF.</h2>
      <Comparar />
      <h2 className="display-4">2.- Operaciones con Listas - Arrays.</h2>
      <Listas />
      <h2 className="display-4">3.- Operaciones con Formularios.</h2>
    </div>
  );
}

export default App;
