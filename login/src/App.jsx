import React, { useState } from "react";
import './sing.css';
import logo from './imagenes/logo.png';

function App() {

  const [bandera, setBandera] = useState(true);

  const activaBandera = () =>{
    setBandera(false)
  }

  return (
    <div className="container mt-4">
      <div className="mibody">
      <form>
        <img className="mb-4" src={logo} alt="" width="72" height="72"/>
        <h1 className="h3 mb-3 fw-normal">{
          bandera ? 'Please Login' : 'Please Sing in'
        }</h1>

        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
          <label for="floatingInput">Email address</label>
        </div>
        
        <div className="form-floating">
          <input type="password" className="form-control mt-2" id="floatingPassword" placeholder="Password"/>
          <label for="floatingPassword">Password</label>
        </div>

        <div className="checkbox mt-2 mb-3">
          <label>
            <input type="checkbox" value="remember-me"/> Remember me
          </label>
        </div>
        {
          bandera ? <div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
          <button className="w-100 btn btn-lg btn-secondary mt-2" type="submit">Sing in</button>
          </div> : <div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sing in</button>
          <button className="w-100 btn btn-lg btn-secondary mt-2" type="submit">Login</button>
          </div>
        }
        <p class="mt-3 mb-3 text-muted"><b>&copy; 2017–2022</b></p>
      </form>
      </div>
    </div>
  );
}

export default App;
