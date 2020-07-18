import React, { useState } from "react";
import AddTodoItem from "../components/AddTodoItem";
import TodoList from "../components/TodoList";
import { TodoItemModel } from "../components/TodoItem";
import TodoFooter, { TodoFilter } from "../components/TodoFooter";
const Todo = () => {
  const [todoList, setTodoList] = useState<TodoItemModel[]>([]);
  const [displayList, setDisplayList] = useState<TodoItemModel[]>([]);
  const [displayFilter, setDisplayFilter] = useState<TodoFilter>(
    TodoFilter.All
  );
  const [runningNumber, updateRunningNumber] = useState<number>(1);

  const applyFilterToDisplayList = (
    items: TodoItemModel[],
    filter: TodoFilter
  ) => {
    switch (filter) {
      case TodoFilter.All:
        setDisplayList(items);
        break;

      case TodoFilter.Active:
        setDisplayList(
          items.filter((item) => {
            return !item.isCompleted;
          })
        );
        break;

      case TodoFilter.Completed:
        setDisplayList(
          items.filter((item) => {
            return item.isCompleted;
          })
        );
        break;

      default:
        setDisplayList(items);
        break;
    }
  };

  const addNewItemIntoList = (todoText: string) => {
    const newItem: TodoItemModel = {
      key: runningNumber.toString(),
      text: todoText,
      isCompleted: false,
    };

    updateRunningNumber(runningNumber + 1);
    const data = todoList.concat(newItem);
    setTodoList(data);
    applyFilterToDisplayList(data, displayFilter);
  };

  const applyCheckedAll = (isChecked: boolean) => {
    const data = todoList.map((item) => {
      return { ...item, isCompleted: isChecked };
    });

    setTodoList(data);
    applyFilterToDisplayList(data, displayFilter);
  };

  const setCompletedTodoItem = (key: string, isChecked: boolean) => {
    const data = todoList.map((item) => {
      return item.key === key ? { ...item, isCompleted: isChecked } : item;
    });

    setTodoList(data);
    applyFilterToDisplayList(data, displayFilter);
  };

  const deleteTodoItem = (key: string) => {
    const data = todoList.filter((item) => {
      return item.key !== key;
    });
    setTodoList(data);
    applyFilterToDisplayList(data, displayFilter);
  };

  const deleteAllCompleted = () => {
    const data = todoList.filter((item) => {
      return item.isCompleted === false;
    });

    setTodoList(data);
    applyFilterToDisplayList(data, displayFilter);
  };

  return (
    <>
      <h2>Todos</h2>
      <TodoList
        displayList={displayList}
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
      <TodoFooter
        todoList={todoList}
        clearCompleted={() => {
          deleteAllCompleted();
        }}
        displayByTodoFilter={(filter) => {
          setDisplayFilter(filter);
          applyFilterToDisplayList(todoList, filter);
        }}
      ></TodoFooter>
    </>
  );
};

export default Todo;
