import { useContext } from "react";
import { CronometroContext } from "../context/CronometroContext";

const useCronometroContext = () => {
  const contexto = useContext(CronometroContext);
  if (!contexto) {
    throw new Error("useCronometroContext deve ser usado dentro de um CronometroProvider");
  }
  return contexto;
};

export default useCronometroContext;
