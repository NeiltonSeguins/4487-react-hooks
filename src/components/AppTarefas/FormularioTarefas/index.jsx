import { useState } from "react";
import CampoTexto from "../CampoTexto";
import RodapeTarefas from "../RodapeTarefas";
import styles from "../styles.module.css";

const FormularioTarefas = ({ estaVisivel, aoSalvar, aoCancelar }) => {
  const [texto, setTexto] = useState("");

  return (
    <form
      className={`${styles["form-add-task"]} ${!estaVisivel ? styles["form-add-task--hidden"] : ""}`}
      aria-hidden={!estaVisivel}
    >
      <CampoTexto
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        etiqueta="Adicionando tarefa"
        placeholder="No que você está trabalhando?"
      />
      <RodapeTarefas aoSalvar={() => aoSalvar(texto)} aoCancelar={aoCancelar} />
    </form>
  );
};

export default FormularioTarefas;
