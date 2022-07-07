import { useState } from "react";
import "./CreateTodo.css"

function CreateTodo(props) {
  const [inputValue, setInputValue] = useState("")
  const submit = (event) => {
    event.preventDefault();
    // alert (inputValue);
    props.addNew(inputValue)
    setInputValue("")
  }
  const handleChange = (event) => {
    // alert(event.target.value)
    setInputValue(event.target.value)
  }
  return (
    <form onSubmit={submit} className="formWrapper">
      <input id="first" value={inputValue} type="text"
        placeholder="Enter todo here"
        onChange={handleChange}
      />
      <button id="second">Submit</button>
    </form>
  )
}

export default CreateTodo; 