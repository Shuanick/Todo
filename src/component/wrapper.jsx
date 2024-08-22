import { useState } from "react";
import Form from "./form.jsx";
import Todo from "./todo.jsx";
function Wrapper() {
  const [todos, setTodos] = useState([
    {
      content: "打掃廁所",
      id: Math.random(),
      isCompleted: true,
      isEdit: false,
    },
    { content: "寫作業", id: Math.random(), isCompleted: false, isEdit: false },
  ]);
  const addTodo = (content) => {
    setTodos([
      ...todos,
      {
        content: content,
        id: Math.random(),
        isCompleted: false,
        isEdit: false,
      },
    ]);
  };
  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };
  const complete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        } else {
          return { ...todo };
        }
      })
    );
  };
  const toggleIsEdit = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isEdit: !todo.isEdit };
        } else {
          return todo;
        }
      })
    );
  };
  const editTodo = (id, newContent) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, content: newContent, isEdit: false }
          : todo;
      })
    );
  };
  return (
    <div className="wrapper">
      <h1>代辦事項</h1>
      <Form addTodo={addTodo} />
      {todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            complete={complete}
            toggleIsEdit={toggleIsEdit}
            editTodo={editTodo}
          />
        );
      })}
    </div>
  );
}

export default Wrapper;
