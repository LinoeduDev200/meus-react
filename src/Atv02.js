import React, { useState, useEffect } from 'react';
import './Relogio.css';
import { Link } from "react-router-dom";


function Atv02() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    < > 
    <h1> Atividade 02</h1>
    <Link to="/">Rertonar para a pagina Inicial</Link>

    <div className="container">
      <h1 className='relogio'>{time.toLocaleTimeString()}</h1>
    </div>
    </>
  );
}

export default Atv02;
