import './Home.css';
import React from "react";
import { Link } from "react-router-dom";



const Home = () => {
    return(
        <div className='d'>
            <h1 className='h1'>Pagina Inicial</h1>
            <nav >
                 
                 <ul>
                    <li>
                        <Link to="/Atv01" ><h2 className='l1' > Atividade 01</h2></Link>
                    </li>
                    <li>
                        <Link to="/Atv02"><h2 className='l2' >Atividade 02</h2></Link>
                    </li>
                    <li>
                        <Link to="/Atv03"><h2 className='l3' >Atividade 03</h2></Link>
                    </li>
                    <li>
                     <Link to="/Atv04"><h2 className='l4' >Atividade 04</h2></Link>                    </li>
                    
                 </ul>
            </nav>
        </div>

    );
}
 export default Home;