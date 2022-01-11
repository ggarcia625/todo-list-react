import React, {useState} from "react";
import { v4 as uuid } from "uuid";
import TodoForm from "./TodoApp";

/** Simple presentation component for a todo.
 *
 * Props:
 * - todo: like { id, title, description, priority }
 *
 * { EditableTodo, TodoApp } -> Todo
 **/

function Todo(props) {
  let styles = props.complete ? {textDecoration: 'line-through'} : undefined;
  return (
      <div className="Todo" style={styles}>
        <div><b>{props.title}</b> <small>(priority: {props.priority})</small></div>
        <div><small>{props.description}</small> </div>
      </div>
  );
}


export default Todo;
