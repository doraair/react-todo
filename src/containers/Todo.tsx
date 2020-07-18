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
      isCompleted: false,
    };

    updateRunningNumber(runningNumber + 1);

    addList(items.concat(newItem));
  };

  const applyCheckedAll = (isChecked: boolean) => {
    addList(
      items.map((item) => {
        return { ...item, isCompleted: isChecked };
      })
    );
  };

  const setCompletedTodoItem = (key: string, isChecked: boolean) => {
    addList(
      items.map((item) => {
        return item.key === key ? { ...item, isCompleted: isChecked } : item;
      })
    );
  };

  const deleteTodoItem = (key: string) => {
    addList(
      items.filter((item) => {
        return item.key !== key;
      })
    );
  };
  return (
    <>
      <h2>Todos</h2>
      <TodoList
        displayList={items}
        completeTodoItem={(key, isCompleted) => {
          setCompletedTodoItem(key, isCompleted);
        }}
        deleteTodoItem={(key) => {
          deleteTodoItem(key);
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
