import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import Edit from "./edit.jsx";
function Todo({ todo, deleteTodo, complete, toggleIsEdit, editTodo }) { 
  return todo.isEdit ? (
    <Edit todo={todo} editTodo={editTodo}/>
  ) : (
    <div className={`todo ${todo.isCompleted ? "completed" : ""}`}>
      <p
        className="pp"
        onClick={() => {
          complete(todo.id);
        }}
      >
        {todo.content}
      </p>
      <div>
        <MdEdit style={{ cursor: "pointer" }} onClick={()=>toggleIsEdit(todo.id)}/>
        <MdDelete
          style={{ cursor: "pointer", marginLeft: "5px" }}
          onClick={() => {
            deleteTodo(todo.id);
          }}
        />
      </div>
    </div>
  );
}
export default Todo;
