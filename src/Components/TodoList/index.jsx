const TodoList = ({toDos, handleTodo}) => {
    //componente que manipula a minha lista de tarefas.
    //retorna uma lista nao ordenada, que passa um MAP nas tarefas e retorna uma lista.
    //Botao de concluir: deixo instanciado que ao clicar, executa a funçao de excluir a tarefa
    return (
        <ul>
            {toDos.map((item, index) => {
                return (
                    <li key={index} className="lista">
                        {item}
                        
                        <button className="btn-concluir" onClick={() => handleTodo(item)}>Concluir Tarefa</button>
                    </li>
                )
            })}
        </ul>
    )
}


export default TodoList;