import { useState, useEffect } from "react";

const useLocalStorage = (chave, valorInicial) => {
  const [valor, setValor] = useState(() => {
    const valorSalvo = localStorage.getItem(chave);
    return valorSalvo ? JSON.parse(valorSalvo) : valorInicial;
  });

  useEffect(() => {
    localStorage.setItem(chave, JSON.stringify(valor));
  }, [chave, valor]);

  return [valor, setValor];
};

export default useLocalStorage;
