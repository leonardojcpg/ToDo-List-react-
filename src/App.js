import './App.css';
import {useState} from "react"
import Form from "./Components/Form/index.jsx"
import TodoList from './Components/TodoList';



function App() {

  const [toDos, setToDos] = useState([])

  function addTodo(newTodo){
    if(newTodo === ""){
      return window.alert("Preencha o campo vazio")
    }
    setToDos([...toDos, newTodo]);
  }

  function handleTodo(removeItem){
    const filterItems = toDos.filter((item) => item !== removeItem);
    setToDos(filterItems)
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
