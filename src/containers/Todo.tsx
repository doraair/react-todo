import React, { useState } from "react";
import AddTodoItem from "../components/AddTodoItem";
import TodoList from "../components/TodoList";

const Todo = () => {
  const [items, addList] = useState<string[]>(["air"]);
  //   const printOnConsoleLog = (text: string) => {
  //     console.log(text);
  //   };

  return (
    <>
      <h2>Todos</h2>
      <TodoList displayList={items}></TodoList>
      <AddTodoItem
        onAddItem={(newItem) => addList(items.concat(newItem))}
        placeholderText="What needs to be done?"
      />
    </>
  );
};

export default Todo;
