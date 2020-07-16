import React, { useState } from "react";
import AddTodoItem from "../components/AddTodoItem";
import TodoList from "../components/TodoList";
import { TodoItemModel } from "../components/TodoItem";

const Todo = () => {
  const [items, addList] = useState<TodoItemModel[]>([]);
  const [runningNumber, updateRunningNumber] = useState<number>(1);

  const addNewItemIntoList = (todoText: string) => {
    const newItem: TodoItemModel = {
      key: runningNumber.toString(),
      text: todoText,
      isChecked: false,
    };

    updateRunningNumber(runningNumber + 1);

    addList(items.concat(newItem));
  };

  const applyCheckedAll = (isChecked: boolean) => {
    addList(
      items.map((item) => {
        return { ...item, isChecked: isChecked };
      })
    );
  };

  const applyCheckedByItem = (key: string, isChecked: boolean) => {
    addList(
      items.map((item) => {
        return item.key === key ? { ...item, isChecked: isChecked } : item;
      })
    );
  };

  return (
    <>
      <h2>Todos</h2>
      <TodoList
        displayList={items}
        onCheckedChange={(key, checked) => {
          applyCheckedByItem(key, checked);
        }}
      ></TodoList>
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
