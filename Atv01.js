import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './Letreiro.css'

function Atv01() {
  const frase = "Venha Estudar na FATEC  ";
  const [letraIndex, setLetraIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLetraIndex((prevIndex) => (prevIndex + 1) % frase.length);
    }, 300);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
     
          <h1> Atividade 01</h1>
          <Link to="/">Rertonar para a pagina Inicial</Link>
      
    <div className='letreiro'>
      <h1>{frase.substring(0, letraIndex)}</h1>
    </div>
    
  );
}

export default Atv01;


