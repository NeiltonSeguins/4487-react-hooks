import styles from "./styles.module.css";
import play_arrowImg from "/src/assets/imgs/play_arrow.png";
import pauseImg from "/src/assets/imgs/pause.png";
import useCronometroContext from "../../../hooks/useCronometroContext";

const BotaoCronometro = () => {
  const { emExecucao, alternarCronometro } = useCronometroContext();
  return (
    <div className={styles["cronometer__primary-button-wrapper"]}>
      <button onClick={alternarCronometro} className={styles["cronometer__primary-button"]}>
        <img
          className={styles["cronometer__primary-button-icon"]}
          src={emExecucao ? pauseImg : play_arrowImg}
        />
        <span>{emExecucao ? "Pausar" : "Começar"}</span>
      </button>
    </div>
  );
};

export default BotaoCronometro;
