import "./Todo.css";

function test(str) {
  console.log(str);
}

test("Hello 1"); // Hello 1
test("Hello 2"); // Hello 2
test("Hello Aziz"); // Hello Aziz

function testCom(props) {
  console.log(props.name);
}

testCom({ name: "Aman" }); // "Aman"

// props = { text: "Aziz" }
const Todo = (props) => {
  const onDelete = () => {
    alert(props.text);
  };
  return (
    <div className="todoWrapper">
      <div className="d-flex align-items-center">
        <input checked={props.checked} type="checkbox" />
        <span className={ props.checked ? "checked" : "" }>{props.text}</span>
      </div>

      <div>
        <button className="btn btn-success">Edit</button>
        <button onClick={onDelete} className="btn btn-danger delete">Del</button>
      </div>
    </div>
  );
};

export default Todo;
