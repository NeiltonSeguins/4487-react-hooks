import { useContext } from "react";
import Botao from "../Botao";
import styles from "../styles.module.css";
import checkImg from "/src/assets/imgs/check-task.png";
import trashImg from "/src/assets/imgs/trash.svg";
import { TarefasContext } from "../../../context/TarefasContext";

const ListaTarefas = () => {
  const { estado, dispatch } = useContext(TarefasContext);
  return (
    <ul className={styles["tasks__task-list"]}>
      {estado.lista.map((tarefa) => (
        <li
          key={tarefa.id}
          className={`${styles["tasks__task-list-item"]} ${tarefa.concluida ? styles["tasks__task-list-item-complete"] : ""}`}
        >
          <Botao
            icone={checkImg}
            id="marcar-tarefa-como-concluida"
            className={`${styles["check-task__button"]} ${tarefa.concluida ? styles["check-task__button--complete"] : ""}`}
            onClick={() => dispatch({ tipo: "MARCAR_CONCLUIDA", payload: tarefa.id })}
          />
          <p className={styles["tasks__task-list-item-description"]}>{tarefa.texto}</p>
          <Botao
            icone={trashImg}
            id="deletar-tarefa"
            className={`${styles["delete-task__button"]}`}
            onClick={() => dispatch({ tipo: "DELETAR_TAREFA", payload: tarefa.id })}
          />
        </li>
      ))}
    </ul>
  );
};

export default ListaTarefas;
