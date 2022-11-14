import React, {useState}  from "react";
import QRCode from 'qrcode';
import lqr from './assets/qr.png'
import logo from './assets/LOGO.png'

//https://script.google.com/a/~/macros/s/AKfycbypTNaX3ZTAYjI5VuchHaVVm26V8I0D_qXGFh-l2MFd0J_Kcuwq1Ei3glCZpyP82A6DEA/exec?action=register&userid=18120082
//https://script.google.com/a/~/macros/s/AKfycbypTNaX3ZTAYjI5VuchHaVVm26V8I0D_qXGFh-l2MFd0J_Kcuwq1Ei3glCZpyP82A6DEA/exec?action=register&userid=19120102

function App() {
  const [matricula, setMatricula] = useState('')
  const [qrcode, setQrcode] = useState('')
  const [foto, setFoto] = useState('');

  const GenerateQRCode = () => {
    setFoto("/Fotos/" + matricula + ".JPG")

    QRCode.toDataURL(matricula,{
      width:500,
      margin:1,
      color: {
        dark: '#008000'
      }
    },
      (err, matricula) =>{
      if(err) return console.error(err)
      console.log(matricula)
      setQrcode(matricula)
    })
  }

  return (
    <div className="text-center">
      <img src={logo} alt="" width={380} height={200}/>
      <h1>Generador de Codigos QR Asistencia</h1>
      <br/>
      <div className="row-1">
        <input
        className="col-4" 
        type="text" 
        placeholder="E.G. 19120090" 
        value={matricula} 
        onChange={(e) => setMatricula(e.target.value)} 
        />
        <span className="col-1">  </span>
        <button className="col-3 btn btn-success" 
        onClick={GenerateQRCode}>Generate</button>
      </div>
      <br/>
      {
        qrcode ? 
        <div>
          <p><img className="rounded-circle shadow-4-strong" src={foto} alt="Usuario no Registrado en la Data" width={200} height={200}/></p>
          <p><img src={qrcode} alt={matricula} width={300} height={300}/></p>
          <p><a className="btn btn-success" href={"https://script.google.com/a/~/macros/s/AKfycbypTNaX3ZTAYjI5VuchHaVVm26V8I0D_qXGFh-l2MFd0J_Kcuwq1Ei3glCZpyP82A6DEA/exec?action=register&userid="+matricula}>Log User</a></p>
        </div>
        : 
          <img src={lqr} alt={matricula} width={300} height={300}/>
        }
    </div>
  );
}

export default App;
