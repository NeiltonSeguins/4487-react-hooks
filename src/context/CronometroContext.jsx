import { createContext, useState, useEffect, useRef } from "react";
import beepSound from "../assets/sons/beep.mp3";

export const CronometroContext = createContext();

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

const CronometroProvider = ({ children }) => {
  const musicaRef = useRef(null);
  const beepRef = useRef(new Audio(beepSound));

  const [modoAtual, setModoAtual] = useState(modos[0]);
  const [tempoRestante, setTempoRestante] = useState(modoAtual.duracao);
  const [emExecucao, setEmExecucao] = useState(false);
  const [musicaTocando, setMusicaTocando] = useState(false);

  useEffect(() => {
    let intervalo;

    if (emExecucao && tempoRestante > 0) {
      intervalo = setInterval(() => {
        setTempoRestante((prev) => prev - 1);
      }, 1000);
    } else if (tempoRestante === 0) {
      beepRef.current.play();
      setModoAtual((prev) => {
        const modoAtualIndex = modos.findIndex((modo) => modo.id === prev.id);
        const proximoModo = modos[(modoAtualIndex + 1) % modos.length];
        setTempoRestante(proximoModo.duracao);
        return proximoModo;
      });
      setEmExecucao(false);
    }

    return () => clearInterval(intervalo);
  }, [emExecucao, tempoRestante]);

  const alternarCronometro = () => {
    setEmExecucao((prev) => !prev);
    if (!emExecucao) {
      controlarMusica();
    } else {
      musicaRef.current.pause();
    }
  };

  const selecionarModo = (novoModo) => {
    setModoAtual(novoModo);
    setTempoRestante(novoModo.duracao);
    setEmExecucao(false);
    musicaRef.current.pause();
  };

  const controlarMusica = () => {
    if (musicaRef.current) {
      musicaRef.current.play();
      setMusicaTocando(true);
    }
  };

  const pausarMusica = () => {
    if (musicaRef.current) {
      musicaRef.current.pause();
      setMusicaTocando(false);
    }
  };

  return (
    <CronometroContext.Provider
      value={{
        modos,
        modoAtual,
        tempoRestante,
        emExecucao,
        musicaTocando,
        musicaRef,
        alternarCronometro,
        selecionarModo,
        controlarMusica,
        pausarMusica,
      }}
    >
      {children}
    </CronometroContext.Provider>
  );
};

export default CronometroProvider;
