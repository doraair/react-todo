import React, { useState } from 'react';
import AddTodoItem from '../components/AddTodoItem';
import TodoList from '../components/TodoList';
import { TodoItemModel } from '../components/TodoItem';
import TodoFooter, { TodoFilter } from '../components/TodoFooter';
import { useLocalStorage, useLocalStorageArray } from '../shared/StorageUtils';

const Todo = () => {
  const todoStorageKey: string = 'todolist';
  const [todoList, setTodoList] = useLocalStorage<any[]>(todoStorageKey, []);
  // const [todoList, setTodoList] = useState<TodoItemModel[]>([]);
  const [displayList, setDisplayList] = useState<TodoItemModel[]>([]);
  const [displayFilter, setDisplayFilter] = useState<TodoFilter>(
    TodoFilter.All
  );
  const [runningNumber, updateRunningNumber] = useState<number>(1);
  const [activeTodoCount, setActiveTodoCount] = useState<number>(0);

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

    setActiveTodoCount(
      items.filter((items) => {
        return !items.isCompleted;
      }).length
    );
  };

  const addNewItemIntoList = (todoText: string) => {
    const newItem: TodoItemModel = {
      key: runningNumber.toString(),
      text: todoText,
      isCompleted: false,
    };

    updateRunningNumber(runningNumber + 1);
    const data = [...todoList, newItem];
    setTodoList(data);
    console.log(data);
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
    <div className='container'>
      <h2>Todos</h2>
      <AddTodoItem
        onAddItem={(newItem) => addNewItemIntoList(newItem)}
        onCheckedChange={(checked) => {
          applyCheckedAll(checked);
        }}
        placeholderText='What needs to be done?'
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
          applyFilterToDisplayList(todoList, filter);
        }}
      ></TodoFooter>
    </div>
  );
};

export default Todo;
