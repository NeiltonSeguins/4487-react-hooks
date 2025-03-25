import { createContext, useEffect, useReducer, useState } from "react";
import { estadoInicial, tarefasReducer } from "../reducers/tarefasReducer";
import useLocalStorage from "../hooks/useLocalStorage";

export const TarefasContext = createContext();

const TarefasProvider = ({ children }) => {
  const [tarefasSalvas, setTarefasSalvas] = useLocalStorage("tarefas", estadoInicial);
  const [estadoTarefas, dispatch] = useReducer(tarefasReducer, tarefasSalvas);
  const [exibirFormulario, setExibirFormulario] = useState(false);

  useEffect(() => {
    setTarefasSalvas(estadoTarefas);
  }, [estadoTarefas, setTarefasSalvas]);

  const aoExibirFormulario = (valor) => {
    setExibirFormulario(valor);
  };

  return (
    <TarefasContext.Provider
      value={{ estado: estadoTarefas, dispatch, exibirFormulario, aoExibirFormulario }}
    >
      {children}
    </TarefasContext.Provider>
  );
};

export default TarefasProvider;
