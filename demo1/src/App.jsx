import { Fragment } from "react";
import { FooterP } from "./componentes/footerP";
import { HeaderP } from "./componentes/headerP";

function App() {
  return (
    <Fragment>
      <div className="container">
        <HeaderP/>
        <FooterP/>
      </div> 
    </Fragment>
  );
}

export default App;
