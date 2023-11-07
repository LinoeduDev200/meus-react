import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './Letreiro.css'

function Atv01() {
  const frase = "Conheça a FATEC  ";
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
    <div className='letreiro' > 
          <h1 className="h1"> Atividade 01</h1>
          <Link to="/">Rertonar para a pagina Inicial</Link>
      
    <div>
      <h2 className="h2">{frase.substring(0, letraIndex)}</h2>
    </div>
    </div>
  );
}

export default Atv01;


