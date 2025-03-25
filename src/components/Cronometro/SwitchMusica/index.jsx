import styles from "./styles.module.css";

export default function SwitchMusica() {
  function alternarMusica() {
    return;
  }

  return (
    <label className={styles["toggle"]}>
      <input
        onChange={alternarMusica}
        className={styles["toggle__checkbox"]}
        type="checkbox"
        id="alternar-musica"
      />
      <div className={styles["toggle__switch"]}></div>
      <span className={styles["toggle__span"]} htmlFor="alternar-musica">
        Música
      </span>
    </label>
  );
}
