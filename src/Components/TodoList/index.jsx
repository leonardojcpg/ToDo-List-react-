const TodoList = ({toDos, handleTodo}) => {
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