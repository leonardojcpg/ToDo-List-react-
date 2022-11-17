import { useState } from "react";

const Form = ({ addTodo }) => {
  
  // Componente que cria um formulário com um input onde se escreve a tarefa
  // cria um state de texto com uma string vazia para poder preencher 
  // Enviar a tarefa pra lista: Usa-se o botao do tipo submit no "onChange".

  const [text, setText] = useState("");

  return(
    <div>
    <input
      type={text}
      value={text}
      onChange={(event) => setText(event.target.value)}
      placeholder="Digite sua tarefa aqui !"
      className="input"
    ></input>
    <button
      className="button-addTodo"
      type="submit"
      onClick={() => addTodo(text)}>Enviar Tarefa</button>
  </div>
  )


};




export default Form;