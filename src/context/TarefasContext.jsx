import { createContext, useState } from "react";

export const TarefasContext = createContext();

const TarefasProvider = ({ children }) => {
  const [tarefas, setTarefas] = useState([]);
  const [exibirFormulario, setExibirFormulario] = useState(false);

  function adicionarTarefa(texto) {
    if (!texto.trim()) return;

    const novaTarefa = {
      id: Math.floor(Math.random() * 100000) + Date.now(),
      texto,
      concluida: false,
    };

    setTarefas([...tarefas, novaTarefa]);
    setExibirFormulario(false);
  }

  const aoExibirFormulario = (valor) => {
    setExibirFormulario(valor);
  };

  function deletarTarefa(id) {
    setTarefas((prev) => prev.filter((tarefa) => tarefa.id !== id));
  }

  function deletarTodasTarefas() {
    setTarefas([]);
  }

  function deletarTarefasConcluidas() {
    setTarefas((prev) => prev.filter((tarefa) => !tarefa.concluida));
  }

  function marcarComoConcluida(id) {
    setTarefas((prev) =>
      prev.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa,
      ),
    );
  }

  return (
    <TarefasContext.Provider
      value={{
        tarefas,
        adicionarTarefa,
        deletarTarefa,
        deletarTodasTarefas,
        deletarTarefasConcluidas,
        marcarComoConcluida,
        exibirFormulario,
        aoExibirFormulario,
      }}
    >
      {children}
    </TarefasContext.Provider>
  );
};

export default TarefasProvider;
