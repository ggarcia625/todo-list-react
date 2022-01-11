import React from "react";
import EditableTodo from "./EditableTodo";
import TodoApp from "./TodoApp";


/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

function EditableTodoList(props) {

  let todos = props.todos.map(todo => <EditableTodo todo={todo} remove={props.remove} key={todo.id} updateTodo={props.updateTodo}/>)
  return (
      <div>
        {todos}
      </div>
  );
}

export default EditableTodoList;
