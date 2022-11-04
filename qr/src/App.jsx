import React, {useState}  from "react";
import QRCode from 'qrcode';
import lqr from './assets/qr.png'
import logo from './assets/LOGO.png'

function App() {
  const [matricula, setMatricula] = useState('')
  const [qrcode, setQrcode] = useState('')

  const GenerateQRCode = () => {
    QRCode.toDataURL(matricula,{
      width:500,
      margin:1,
      color: {
        dark: '#FF0000'
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
          <img src={qrcode} alt={matricula} width={300} height={300}/>
          <p className="mt-4">
            <a className="btn btn-success" 
            href={qrcode} 
            download={matricula + ".png"}>Download</a>
          </p>
        </div>
        : 
          <img src={lqr} alt={matricula} width={300} height={300}/>
        }
    </div>
  );
}

export default App;
