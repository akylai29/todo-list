import "./App.css";
import { Header } from "./components/header/Header";
import CreateTodo from "./components/create-todo/CreateTodo";
import Todo from "./components/todo/Todo";
import { useEffect, useState } from "react";

function App() {
  const todoArr = JSON.parse(localStorage.getItem("todo")) || []

  const [state, setState] = useState(todoArr)
  const [isPending, setPending] = useState(true)
  console.log(state);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(state))
  }, [state]);
  useEffect(()=>{
    setTimeout(()=>{setPending(false)},3000)
  },[])

  const addNewTodo = (str) => {
    setState([...state, { text: str, status: false, id: Date.now() }])
  }

  const deleteTodo = (id) => {
    const newArr = state.filter((item) => item.id !== id)
    setState(newArr)
  }


  const onCheck = (id) => {
    const newArr = state.map((item) => {
      if (item.id === id) {
        item.status = !item.status
      }
      return item
    })
    setState(newArr)
  }


  const onEditText = (newText,id)=>{
    const newArr = state.map((todo)=>{
      if (todo.id === id) {
        todo.text = newText
      }

      return todo
    })
    setState(newArr)
  }
  if(isPending){
    return <div className="preloader">
      <img src ="https://i.pinimg.com/originals/ce/28/70/ce2870ff3db61a2f7797e6e47d0eed4e.gif" alt="preloader"></img>   
    </div>
  }



  return (
    <div className="App">
      <Header state={state} />
      <CreateTodo addNew={addNewTodo} />
      <div className="todo_items">
        {
          state.length
          ?state.map((item) => <Todo text={item.text}
          key={item.id}
            checked={item.status}
            id={item.id}
            onDelete={deleteTodo}
            onCheck={onCheck}
            onEditText = {onEditText}
            />)
            : (<h3 className="add-todo">please add todo</h3>
        )}
      </div>
    </div>
  )
}

export default App;
