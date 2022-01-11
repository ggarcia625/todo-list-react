import React, { useState, useEffect } from "react";
import EditableTodo from "./EditableTodo";


/** Form for adding.
 *
 * Props:
 * - initialFormData
 * - handleSave: function to call in parent.
 *
 * { TodoApp, EditableTodo } -> TodoForm
 */

function TodoForm(props) {

  const [valueTitle, setValueTitle] = useState(props.valueTitle);
  const [valueDescrip, setValueDescrip] = useState(props.valueDescrip);
  const [valuePriority, setValuePriority] = useState(props.valuePriority);
  const [titleError, setTitleError] = useState(false)

  /** Update form input. */
  function handleChange(evt) {
    if(evt.target.name === 'title') {
      setValueTitle(evt.target.value);
      setTitleError(false);
    } else if(evt.target.name === 'description') {
      setValueDescrip(evt.target.value);
    } else {
      setValuePriority(evt.target.value);
    }
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    if(props.isEditing){
      props.updateTodo({title: valueTitle, description: valueDescrip, priority: valuePriority, id: props.id});
    } else if (!valueTitle) {
      setTitleError(true);
    } else {
      props.create({title: valueTitle, description: valueDescrip, priority: valuePriority, id: props.id});
    }

  }

  return (
      <form className="NewTodoForm" onSubmit={handleSubmit}>

        <div className="form-group">
          <input
              id="newTodo-title"
              name="title"
              className="form-control"
              placeholder={titleError ? "Todo item requires title" : "Title"}
              onChange={handleChange}
              value={valueTitle}
              aria-label="Title"
          />
        </div>

        <div className="form-group">
          <textarea
              id="newTodo-description"
              name="description"
              className="form-control"
              placeholder="Description"
              onChange={handleChange}
              value={valueDescrip}
              aria-label="Description"
          />
        </div>

        <div className="form-group d-flex justify-content-between">
          <div className="w-75 d-flex justify-content-between">
            <label htmlFor="newTodo-priority"
                   className="d-inline-flex">Priority: {valuePriority}&nbsp;&nbsp;
            </label>
            <select id="newTodo-priority"
                    name="priority"
                    value={valuePriority}
                    onChange={handleChange}
                    className="form-control form-control-sm d-inline-flex"
            >
              <option value={1}>Ultra-Über</option>
              <option value={2}>Über</option>
              <option value={3}>Meh</option>
            </select>
          </div>
          <button className="btn-primary rig btn btn-sm NewTodoForm-addBtn" >
            Gø!
          </button>
        </div>

      </form>
  );
}

export default TodoForm;
