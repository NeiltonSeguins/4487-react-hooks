import styles from "./styles.module.css";

import BotoesModos from "./BotoesModos";
import Timer from "./Timer";
import SwitchMusica from "./SwitchMusica";
import BotaoCronometro from "./BotaoCronometro";
import useCronometroContext from "../../hooks/useCronometroContext";

export default function Cronometro() {
  const { musicaRef } = useCronometroContext();

  return (
    <div className={styles["cronometer"]}>
      <BotoesModos />
      <Timer />
      <SwitchMusica ref={musicaRef} />
      <BotaoCronometro />
    </div>
  );
}
