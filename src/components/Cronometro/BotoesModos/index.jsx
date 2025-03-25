import styles from "./styles.module.css";

import BotaoModo from "./BotaoModo";

const modos = [
  {
    id: "foco",
    nome: "Foco",
    duracao: 25 * 60, // em minutos
  },
  {
    id: "pausa_curta",
    nome: "Pausa curta",
    duracao: 5 * 60, // em minutos
  },
  {
    id: "pausa_longa",
    nome: "Pausa longa",
    duracao: 15 * 60, // em minutos
  },
];

const BotoesModos = () => {
  return (
    <ul className={styles["cronometer-modes"]}>
      {modos.map((m) => (
        <li key={m.id}>
          <BotaoModo ativo={false}>{m.nome}</BotaoModo>
        </li>
      ))}
    </ul>
  );
};

export default BotoesModos;
