import { useState } from "react";
import CampoTexto from "../CampoTexto";
import RodapeTarefas from "../RodapeTarefas";
import styles from "../styles.module.css";

const FormularioTarefas = () => {
  const [texto, setTexto] = useState("");

  return (
    <form className={`${styles["form-add-task"]}`}>
      <CampoTexto
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        etiqueta="Adicionando tarefa"
        placeholder="No que você está trabalhando?"
      />
      <RodapeTarefas
        aoSalvar={() => {
          console.log("Ação de salvar");
        }}
        aoCancelar={() => console.log("Ação quando cancelar")}
      />
    </form>
  );
};

export default FormularioTarefas;
