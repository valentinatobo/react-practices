import React from 'react';
import { useState, useEffect } from 'react';

function Countdown() {
  let [targetSeconds, setTargetSeconds] = useState(null);
  let [elapseSeconds, setElapsedSeconds] = useState(0);

  //cada que un valor del arreglo cambie ejecuta la función
  useEffect(() => {
    if (targetSeconds !== null) return;

    //siempre inicia en 0
    setElapsedSeconds(0);

    let interval = setInterval(function () {
      //recibe como parametro el mismo valor del estado para que si se actualice
      setElapsedSeconds((elapseSeconds) => elapseSeconds + 1);
    }, 1000);

    // return () => clearInterval(interval);
  }, [targetSeconds]);

  function parseForm(ev) {
    ev.preventDefault();
    let seconds = ev.target.seconds.value;
    setTargetSeconds(parseInt(seconds));
    console.log(seconds);
  }

  if (elapseSeconds >= targetSeconds && targetSeconds !== null) {
    return (
      <>
        <p>Termino</p>
        <button onClick={() => setTargetSeconds(null)}>Reiniciar</button>
      </>
    );
  }

  //como es una función cuando encuentre este return ya no ejecuta el de abajo
  if (targetSeconds !== null) {
    return (
      <p>
        Soy un contador y debo contar hasta {targetSeconds} y han transcurrido
        {elapseSeconds} segundos
      </p>
    );
  }

  return (
    <div>
      <p>Cantidad de segundos: </p>
      <form action="#" onSubmit={(ev) => parseForm(ev)}>
        <input type="number" name="seconds" />
        <button>Iniciar</button>
      </form>
    </div>
  );
}

export default Countdown;
