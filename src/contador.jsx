import React from 'react';
import { useState } from 'react';

function Counter() {
  const [counterbtn, setCouenterbtn] = useState(0);
  const [counter, setCouenter] = useState(0);
  return (
    <div>
      <h2>{counter}</h2>
      <p>Haz echo click {counterbtn} veces a los botones</p>
      <button style={{backgroundColor:"#0ca33a"}}
        onClick={() => {
          setCouenterbtn(counterbtn + 1);
          setCouenter(counterbtn + 1);
        }}
      >
        Incrementar
      </button>
      <button style={{backgroundColor:"#a30c0c"}}
        onClick={() => {
          setCouenterbtn(counterbtn + 1);
          setCouenter(counterbtn - 1);
        }}
      >
        Decrementar
      </button>
    </div>
  );
}

export default Counter;
