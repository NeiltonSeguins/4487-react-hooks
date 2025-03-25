import styles from "./styles.module.css";
import add_circleImg from "/src/assets/imgs/add_circle.png";
import Botao from "./Botao";
import CabecalhoTarefas from "./CabecalhoTarefas";
import FormularioTarefas from "./FormularioTarefas";
import ListaTarefas from "./ListaTarefas";
import useTarefasContext from "../../hooks/useTarefasContext";

const AppTarefas = () => {
  const { exibirFormulario, aoExibirFormulario } = useTarefasContext();

  return (
    <section className={styles["tasks"]}>
      <div className={styles["tasks__task-content"]}>
        <CabecalhoTarefas />
        <ListaTarefas />
        {exibirFormulario && <FormularioTarefas />}
        <Botao
          onClick={() => aoExibirFormulario(true)}
          icone={add_circleImg}
          className={styles["tasks__button--add-task"]}
        >
          Adicionar nova tarefa
        </Botao>
      </div>
    </section>
  );
};

export default AppTarefas;
