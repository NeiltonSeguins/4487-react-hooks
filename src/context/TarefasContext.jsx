import { createContext, useReducer, useState } from "react";
import { estadoInicial, tarefasReducer } from "../reducers/tarefasReducer";

export const TarefasContext = createContext();

const TarefasProvider = ({ children }) => {
  const [estado, dispatch] = useReducer(tarefasReducer, estadoInicial);
  const [exibirFormulario, setExibirFormulario] = useState(false);

  const aoExibirFormulario = (valor) => {
    setExibirFormulario(valor);
  };

  return (
    <TarefasContext.Provider value={{ estado, dispatch, exibirFormulario, aoExibirFormulario }}>
      {children}
    </TarefasContext.Provider>
  );
};

export default TarefasProvider;
