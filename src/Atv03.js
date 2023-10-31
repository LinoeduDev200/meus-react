import React, { useState } from 'react';
import './Contador.css';
import { Link } from "react-router-dom";
import mulherImagem from './mulher.jpg';
import homemImagem from './homem.jpeg';

function Atv03() {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);

  const incrementarHomens = () => {
    setHomens(homens + 1);
  };

  const decrementarHomens = () => {
    if (homens > 0) {
      setHomens(homens - 1);
    }
  };

  const incrementarMulheres = () => {
    setMulheres(mulheres + 1);
  };

  const decrementarMulheres = () => {
    if (mulheres > 0) {
      setMulheres(mulheres - 1);
    }
  };

  const reset = () => {
    setHomens(0);
    setMulheres(0);
  };

  const totalPessoas = homens + mulheres;

  return (
    <div className='img'>
    <h1 className='h1'> Atividade 03</h1>
    <Link to="/">Rertonar para a pagina Inicial</Link>
    
    <div className="App">
      <h1 >Contador de Pessoas</h1>
      <div className="total">
        <h2>Total Geral</h2>
        <span>{totalPessoas}</span> &nbsp;
        <button onClick={reset} className='reset' >Reset</button>
      </div>
      <p></p>
      <div className="pessoas" >
        <div className="contador" >
         
          <div >
          <img src={homemImagem} alt="Homem" width="100" height="100"  />
          &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
          <img src={mulherImagem} alt="Mulher" width="100" height="100" right="20px"  />


          </div >
          <p></p>
          <div>
          <span>{homens}</span> 
          &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <span>{mulheres}</span>
          </div>
         <p> </p>
          <div>

          <button onClick={incrementarHomens} className='button1'>+</button> &nbsp;
          <button onClick={decrementarHomens} className='button2'>-</button>
                                                                                                   
             &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
          <button onClick={incrementarMulheres} className='button1' >+</button> &nbsp;
          <button onClick={decrementarMulheres} className='button2' >-</button>
        </div>
          
          
        
        
       </div>
      </div>
      
    </div>
    </div>
  );
}

export default Atv03;
