import { useState } from "react";
import CampoTexto from "../CampoTexto";
import RodapeTarefas from "../RodapeTarefas";
import useTarefasContext from "../../../hooks/useTarefasContext";
import styles from "../styles.module.css";

const FormularioTarefas = () => {
  const { exibirFormulario, aoExibirFormulario, dispatch } = useTarefasContext();
  const [texto, setTexto] = useState("");

  return (
    <form
      className={`${styles["form-add-task"]} ${!exibirFormulario ? styles["form-add-task--hidden"] : ""}`}
      aria-hidden={!exibirFormulario}
    >
      <CampoTexto
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        etiqueta="Adicionando tarefa"
        placeholder="No que você está trabalhando?"
      />
      <RodapeTarefas
        aoSalvar={() => {
          dispatch({ tipo: "ADICIONAR_TAREFA", payload: texto });
          setTexto("");
          aoExibirFormulario(false);
        }}
        aoCancelar={aoExibirFormulario}
      />
    </form>
  );
};

export default FormularioTarefas;
