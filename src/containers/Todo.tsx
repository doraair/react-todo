import React, { useState, useEffect } from "react";
import AddTodoItem from "../components/AddTodoItem";
import TodoList from "../components/TodoList";
import { TodoItemModel } from "../components/TodoItem";
import TodoFooter, { TodoFilter } from "../components/TodoFooter";
import { useLocalStorage } from "../shared/StorageUtils";
import CommonUtils from "../shared/CommonUtils";

const Todo = () => {
  const todoStorageKey: string = "todolist";
  const [todoList, setTodoList] = useLocalStorage<any[]>(todoStorageKey, []);
  const [displayList, setDisplayList] = useState<TodoItemModel[]>([]);
  const [displayFilter, setDisplayFilter] = useState<TodoFilter>(
    TodoFilter.All
  );
  const [runningNumber, updateRunningNumber] = useState<number>(1);
  const [activeTodoCount, setActiveTodoCount] = useState<number>(0);

  useEffect(()=>{
    let items = [...todoList];
    switch (displayFilter) {
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

    setActiveTodoCount(
      items.filter((items) => {
        return !items.isCompleted;
      }).length
    );

  },[todoList, displayFilter]);

  const addNewItemIntoList = (todoText: string) => {
    const newItem: TodoItemModel = {
      key: CommonUtils.newGuid(),
      text: todoText,
      isCompleted: false,
    };

    updateRunningNumber(runningNumber + 1);
    const data = [...todoList, newItem];
    setTodoList(data);
    console.log(data);
  };

  const applyCheckedAll = (isChecked: boolean) => {
    const data = todoList.map((item) => {
      return { ...item, isCompleted: isChecked };
    });

    setTodoList(data);
  };

  const setCompletedTodoItem = (key: string, isChecked: boolean) => {
    const data = todoList.map((item) => {
      return item.key === key ? { ...item, isCompleted: isChecked } : item;
    });

    setTodoList(data);
  };

  const deleteTodoItem = (key: string) => {
    const data = todoList.filter((item) => {
      return item.key !== key;
    });
    setTodoList(data);
  };

  const deleteAllCompleted = () => {
    const data = todoList.filter((item) => {
      return item.isCompleted === false;
    });

    setTodoList(data);
  };

  return (
    <div className="container">
      <h2>Todos</h2>
      <AddTodoItem
        onAddItem={(newItem) => addNewItemIntoList(newItem)}
        onCheckedChange={(checked) => {
          applyCheckedAll(checked);
        }}
        placeholderText="What needs to be done?"
      />
      <TodoList
        displayList={displayList}
        completeTodoItem={(key, isCompleted) => {
          setCompletedTodoItem(key, isCompleted);
        }}
        deleteTodoItem={(key) => {
          deleteTodoItem(key);
        }}
      ></TodoList>
      <br />
      <TodoFooter
        todoActiveCount={activeTodoCount}
        isShow={todoList.length > 0}
        clearCompleted={() => {
          deleteAllCompleted();
        }}
        displayByTodoFilter={(filter) => {
          setDisplayFilter(filter);
        }}
      ></TodoFooter>
    </div>
  );
};

export default Todo;
