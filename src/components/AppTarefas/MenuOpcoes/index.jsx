import styles from "../styles.module.css";
import moreImg from "/src/assets/imgs/more.svg";
import checkImg from "/src/assets/imgs/check.svg";
import trashImg from "/src/assets/imgs/trash.svg";
import Botao from "../Botao";
import useTarefasContext from "../../../hooks/useTarefasContext";

const MenuOpcoes = () => {
  const { dispatch } = useTarefasContext();
  return (
    <div className={styles["dropdown"]}>
      <Botao icone={moreImg} className={styles["dropdown__button-more"]} />

      <ul className={styles["dropdown__ul"]}>
        <li className={styles["dropdown__li"]}>
          <Botao
            icone={checkImg}
            className={styles["dropdown__button"]}
            onClick={() => dispatch({ tipo: "DELETAR_CONCLUIDAS" })}
            id="btn-remover-concluidas"
          >
            Limpar tarefas concluídas
          </Botao>
        </li>
        <li className={styles["dropdown__li"]}>
          <Botao
            icone={trashImg}
            className={styles["dropdown__button"]}
            onClick={() => dispatch({ tipo: "DELETAR_TODAS" })}
            id="btn-remover-concluidas"
          >
            Limpar todas as tarefas
          </Botao>
        </li>
      </ul>
    </div>
  );
};

export default MenuOpcoes;
