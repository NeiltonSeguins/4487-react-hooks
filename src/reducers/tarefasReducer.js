export const estadoInicial = {
  lista: [],
};

export const tarefasReducer = (estado, acao) => {
  switch (acao.tipo) {
    case "ADICIONAR_TAREFA":
      return {
        ...estado,
        lista: [
          ...estado.lista,
          {
            id: Math.floor(Math.random() * 100000) + Date.now(),
            texto: acao.payload,
            concluida: false,
          },
        ],
      };
    case "DELETAR_TAREFA":
      return {
        ...estado,
        lista: estado.lista.filter((tarefa) => tarefa.id !== acao.payload),
      };
    case "DELETAR_TODAS":
      return { ...estado, lista: [] };
    case "DELETAR_CONCLUIDAS":
      return { ...estado, lista: estado.lista.filter((t) => !t.concluida) };
    case "MARCAR_CONCLUIDA":
      return {
        ...estado,
        lista: estado.lista.map((tarefa) =>
          tarefa.id === acao.payload ? { ...tarefa, concluida: !tarefa.concluida } : tarefa,
        ),
      };
    default:
      return estado;
  }
};
