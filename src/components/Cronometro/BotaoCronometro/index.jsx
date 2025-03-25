import styles from "./styles.module.css";
import play_arrowImg from "/src/assets/imgs/play_arrow.png";

const BotaoCronometro = () => {
  return (
    <div className={styles["cronometer__primary-button-wrapper"]}>
      <button className={styles["cronometer__primary-button"]}>
        <img className={styles["cronometer__primary-button-icon"]} src={play_arrowImg} />
        <span>{"Começar"}</span>
      </button>
    </div>
  );
};

export default BotaoCronometro;
