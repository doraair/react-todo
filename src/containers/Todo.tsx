import React, { useState } from "react";
import AddTodoItem from "../components/AddTodoItem";
import TodoList from "../components/TodoList";

const Todo = () => {
  const [items, addList] = useState<string[]>([]);
  const [checkedAll, setCheckedAll] = useState<boolean>(false);

  return (
    <>
      <h2>Todos</h2>
      <TodoList displayList={items} checkedAll={checkedAll}></TodoList>
      <AddTodoItem
        onAddItem={(newItem) => addList(items.concat(newItem))}
        onCheckedChange={(checked) => {
          setCheckedAll(checked);
          console.log(checked);
        }}
        placeholderText="What needs to be done?"
      />
    </>
  );
};

export default Todo;
