import { Fragment } from "react";
import { FooterP } from "./componentes/footerP";
import { HeaderP } from "./componentes/headerP";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Practica1 } from "./componentes/practica1";
import { Saludar } from "./componentes/saludar";
import { NoFound } from "./paginas/noFound";
import { Home } from "./paginas/home";
import { NavBar } from "./componentes/navBar";

function App() {
  return (
    <Fragment>
      <div className="container-fluid mt-5">
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/practica1" element={<Practica1 />}/>
            <Route path="/saludar" element={<Saludar name="Arturo" gusto="Mole de Ajalpan"/>}/>
            <Route path="*" element={<NoFound />}/>
          </Routes>
        </BrowserRouter>
      </div> 
    </Fragment>
  );
}

export default App;
