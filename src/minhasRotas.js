import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Atv01 from "./Atv01";
import Atv02 from "./Atv02";

export default function MinhasRotas(){
    return(
        <BrowserRouter>
           <Routes>
               <Route path="/" element={<Home />}/>
               <Route path="/atv01" element={<Atv01/>}/>
               <Route path="/atv02" element={<Atv02 />}/>
           </Routes>
        </BrowserRouter>
    );

}