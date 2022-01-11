import React from "react";

import Todo from "./Todo";
import TodoApp from "./TodoApp";

/** Shows the top todo.
 *
 * Props:
 * - todos
 *
 * TodoApp -> TopTodo
 */

function TopTodo(props) {
  // lowest-priority # is the highest priority
  // let todo = props.todos.filter(todo => todo.priority < 1);

  // let top = todos.reduce(
  //     (acc, cur) => cur.priority < acc.priority ? cur : acc, todos[0]);
  let todos = props.todos.sort((a, b) => a.priority - b.priority)

  return (
  <>
    {todos.length > 0 ? 
    <>
      <div><b>{todos[0].title}</b> <small>(priority: {todos[0].priority})</small></div>
      <div><small>{todos[0].description}</small></div> 
    </> : ""}
  </>
  );
}



export default TopTodo;