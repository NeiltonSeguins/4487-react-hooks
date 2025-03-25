import { useContext } from "react";
import { TarefasContext } from "../context/TarefasContext";

const useTarefasContext = () => {
  const contexto = useContext(TarefasContext);
  if (!contexto) {
    throw new Error("useTarefasContext deve ser usado dentro de um TarefasProvider");
  }
  return contexto;
};

export default useTarefasContext;
