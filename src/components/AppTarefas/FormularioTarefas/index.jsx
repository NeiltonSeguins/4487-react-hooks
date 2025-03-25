import { useContext, useState } from "react";
import CampoTexto from "../CampoTexto";
import RodapeTarefas from "../RodapeTarefas";
import { TarefasContext } from "../../../context/TarefasContext";
import styles from "../styles.module.css";

const FormularioTarefas = () => {
  const { exibirFormulario, adicionarTarefa, aoExibirFormulario } = useContext(TarefasContext);
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
      <RodapeTarefas aoSalvar={() => adicionarTarefa(texto)} aoCancelar={aoExibirFormulario} />
    </form>
  );
};

export default FormularioTarefas;
