import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import EditableTodoList from "./EditableTodoList";
import TodoApp from "./TodoApp";
import TopTodo from "./TopTodo";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo(props) {
  const [isEditing, setEditing] = useState(false);
  

  function toggleComplete(evt) {
    console.log("complete ran");
    let todoCopy = {...props.todo};
    todoCopy.complete = !todoCopy.complete;
    props.updateTodo(todoCopy);
  }

  /** Toggle if this is being edited */
  function toggleEdit(evt) {
    isEditing ? setEditing(false) : setEditing(true);
  }

  /** Call remove fn passed to this. */
  function handleDelete() {
    props.remove(props.todo.id);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {
    isEditing ? props.updateTodo(formData) : props.create(formData);
    setEditing(false);
  }

  let todo = props.todo;
  return (
    <div className="EditableTodo">
      EITHER OR
      <div className="mb-3" onClick={toggleComplete}>
        <div className="float-right text-sm-right">
          {isEditing ? (
            ""
          ) : (
            <button
              className="EditableTodo-toggle btn-link btn btn-sm"
              onClick={toggleEdit}
            >
              Edit
            </button>
          )}
          <button
            className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
            onClick={handleDelete}
          >
            Del
          </button>
        </div>
        {isEditing ? (
          <TodoForm
            valueTitle={props.todo.title}
            valueDescrip={props.todo.description}
            valuePriority={props.todo.priority}
            id={props.todo.id}
            updateTodo={handleSave}
            isEditing={props.isEditing}
          />
        ) : (
          <Todo
            title={todo.title}
            description={todo.description}
            priority={todo.priority}
            id={todo.id}
            complete={todo.complete}
          />
        )}
      </div>
    </div>
  );
}

export default EditableTodo;
