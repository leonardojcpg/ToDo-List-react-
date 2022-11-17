import { useState } from "react";

const Form = ({ addTodo }) => {
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