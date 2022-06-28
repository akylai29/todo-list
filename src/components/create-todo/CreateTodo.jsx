import "./CreateTodo.css"

function CreateTodo() {
  return (
    <form className="formWrapper">
        <input type="text" placeholder="Enter todo here" />
        <button>+Submit</button>
    </form>
  )
}

export default CreateTodo;