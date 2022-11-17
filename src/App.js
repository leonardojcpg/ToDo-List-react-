import './App.css';
import {useState} from "react"
import Form from "./Components/Form/index.jsx"
import TodoList from './Components/TodoList';



function App() {

  const [toDos, setToDos] = useState([])
  //instaciei o toDos como um array vazio.

  function addTodo(newTodo){
    //função que adiciona tarefa na minha toDo list
    if(newTodo === ""){
      return window.confirm("Preencha o campo vazio")
      //aqui eu coloquei uma condição para que se o input estiver vazio, um prompt me lembre de preencher.
    }
    setToDos([...toDos, newTodo]);
  }

  function handleTodo(removeItem){
    //função que remove o item que ja foi executado na lista
    const filterItems = toDos.filter((item) => item !== removeItem);
    //aplicamos um filter na lista de tarefas que filtra o item que for diferente do que escolhemos.
    setToDos(filterItems)
    //Então, ao chamar a função setToDos, passando o filterItems como parametro, cria-se um array com os itens que sobraram, saindo apenas o que foi filtrado.
  }
 

  return (
    <div className="App">
      <header className="App-header">

          <h3>LISTA DE TAREFAS</h3>
          <Form addTodo={addTodo}/>
          <TodoList toDos={toDos} handleTodo={handleTodo}/>

      </header>
    </div>
  );
}

export default App;
