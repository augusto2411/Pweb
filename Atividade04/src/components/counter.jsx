"use client";

import { useState, useEffect } from "react";
import styles from "./styles/counter.module.css";

export default function Counter() {
  const [contador, setContador] = useState(0);
  const [contando, setRodando] = useState(true);

  useEffect(() => {
    let interval;
    if (contando) {
      interval = setInterval(() => {
        setContador((prevcontador) => prevcontador + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [contando]);

  const pararContador = () => {
    setContador(0);
    setRodando(false);
  };

  const voltarContador = () => {
    setRodando(true);
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1>Contador: {contador}</h1>
        <div className={styles.botoes}>
          <button className={styles.button} onClick={voltarContador}>
            Voltar Contador
          </button>
          <button className={styles.button} onClick={pararContador}>
            Parar Contador
          </button>
        </div>
      </div>
    </div>
  );
}
