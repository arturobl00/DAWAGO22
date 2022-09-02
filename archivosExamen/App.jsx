import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./footer";
import { Header } from "./header";
import { Home } from "./paginas/home";
import { Auto1 } from "./wallpaper/auto1";
import { Auto2 } from "./wallpaper/auto2";
import { Auto3 } from "./wallpaper/auto3";
import { Auto4 } from "./wallpaper/auto4";
import { Auto5 } from "./wallpaper/auto5";
import { Auto6 } from "./wallpaper/auto6";
import { Auto7 } from "./wallpaper/auto7";
import { Auto8 } from "./wallpaper/auto8";
import { Auto9 } from "./wallpaper/auto9";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/wallpaper/auto1" element={<Auto1/>}/>
          <Route path="/wallpaper/auto2" element={<Auto2/>}/>
          <Route path="/wallpaper/auto3" element={<Auto3/>}/>
          <Route path="/wallpaper/auto4" element={<Auto4/>}/>
          <Route path="/wallpaper/auto5" element={<Auto5/>}/>
          <Route path="/wallpaper/auto6" element={<Auto6/>}/>
          <Route path="/wallpaper/auto7" element={<Auto7/>}/>
          <Route path="/wallpaper/auto8" element={<Auto8/>}/>
          <Route path="/wallpaper/auto9" element={<Auto9/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
