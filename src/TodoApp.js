import React, { useState, Component } from "react";
import { v4 as uuid } from "uuid";
import TodoForm from "./TodoForm";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";


/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */



function TodoApp(props) {


  const [todos, setTodoList] = useState(props.initialTodos);
 


  /** add a new todo to list */
  function create(newTodo) {
    let newTodoItem = {id: uuid(), title: newTodo.title, descirption: newTodo.description, priority: newTodo.priority, complete: false};
    setTodoList([...todos, newTodoItem]);
  }

  /** update a todo with updatedTodo */
  function updateTodo(updatedTodo) {
    setTodoList(todos.map((todo) => todo.id !== updatedTodo.id ? todo : updatedTodo));
  }

  /** delete a todo by id */
  function remove(id) {
    const newList = todos.filter((item) => item.id !== id);
    setTodoList(newList);
  }
  
  return (
      <main className="TodoApp">
        <div className="row">
  

          <div className="col-md-6">

            
            
            <EditableTodoList todos={todos} remove={remove} updateTodo={updateTodo} /> OR
            <span className="text-muted">You have no todos.</span>
          </div>

          <div className="col-md-6">
          {todos.length > 0 ?
            <section className="mb-4">
              <h3>Top Todo</h3>
              <TopTodo todos={todos}/>
            </section> : ""
          }

            <section>
              <h3 className="mb-3">Add Nü</h3>
              <TodoForm create={create}/>
            </section>
          </div>

        </div>
      </main>
  );
}



export default TodoApp;