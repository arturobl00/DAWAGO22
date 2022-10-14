import React, { useCallback, useState } from "react";
import './sing.css';
import logo from './imagenes/logo.png';
import {firebase} from './firebase';


function App() {

  const [bandera, setBandera] = useState(true)
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [errores, setErrores] = useState("")

  const registrar = e => {
    //Validacion
    e.preventDefault()
    if(!email.trim() || !pass.trim()){
      setErrores("Faltan elementos por Capturar")
      return
    }

    if(pass.length<6){
      setErrores("Se requieren min 6 Caracteres")
      return
    }

    setErrores(null)
    bandera ? console.log("Login") : signin()

  }

  const signin = useCallback(
    async() => {
      try {
        const auth = firebase.auth()
        const res = await auth.createUserWithEmailAndPassword(email, pass)
        console.log(res.user)
        setPass("")
        setEmail("")
      } catch (error) {
        setErrores(error)
      }
    }, [email, pass])


  //console.log("De email",email, "de el pass", pass)

  const cambiaBandera = () =>{
    bandera ? setBandera(false) : setBandera(true)
  }

  return (
    <div className="container mt-4">
      <div className="mibody">
      <div>
        <form onSubmit={registrar}>
        {
          errores ? (
            <div className="alert alert-danger">
                {errores}
            </div>
        ) : null
        }
        <img className="mb-4" src={logo} alt="" width="72" height="72"/>
        <h1 className="h3 mb-3 fw-normal">{
          bandera ? 'Please Login' : 'Please Sing in'
        }</h1>

        <div className="form-floating">
          <input 
            type="email" 
            className="form-control" 
            id="floatingInput" 
            onChange={e => {setEmail(e.target.value)}}
            value={email}/>
          <label for="floatingInput">Email address</label>
        </div>
        
        <div className="form-floating">
          <input 
            type="password" 
            className="form-control mt-2" 
            id="floatingPassword" 
            onChange={e => {setPass(e.target.value)}}
            value={pass}/>
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
          </div> : <div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sing in</button>
          </div>
        }
        </form>
        {
          bandera ? <div>
          <button className="w-100 btn btn-lg btn-secondary mt-2" onClick={() => cambiaBandera()}>Sing in</button>
          </div> : <div>
          <button className="w-100 btn btn-lg btn-secondary mt-2" onClick={() => cambiaBandera()}>Login</button>
          </div>
        }
        <p className="mt-3 mb-3 text-muted"><b>&copy; 2017–2022</b></p>
      </div>
      </div>
    </div>
  );
}

export default App;
