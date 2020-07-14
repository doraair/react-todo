import React, { useState } from "react";
import AddTodoItem from "../components/AddTodoItem";
import TodoList from "../components/TodoList";
import { TodoItemType } from "../components/TodoItem";

const Todo = () => {
  const [items, addList] = useState<TodoItemType[]>([]);
  const [runningNumber, updateRunningNumber] = useState<number>(0);

  const addNewItemIntoList = (todoText: string) => {
    const newItem: TodoItemType = {
      key: runningNumber.toString(),
      text: todoText,
      isChecked: false,
    };

    updateRunningNumber(runningNumber + 1);

    addList(items.concat(newItem));
  };

  const applyCheckedAll = (isChecked: boolean) => {
    items.map((item) => {
      item.isChecked = isChecked;
    });
    addList(items);
  };

  return (
    <>
      <h2>Todos</h2>
      <TodoList displayList={items}></TodoList>
      <AddTodoItem
        onAddItem={(newItem) => addNewItemIntoList(newItem)}
        onCheckedChange={(checked) => {
          applyCheckedAll(checked);
        }}
        placeholderText="What needs to be done?"
      />
    </>
  );
};

export default Todo;
