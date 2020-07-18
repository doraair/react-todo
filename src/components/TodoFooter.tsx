import React from "react";
import { TodoItemModel } from "./TodoItem";

export enum TodoFilter {
  All,
  Active,
  Completed,
}

export interface TodoFilterProp {
  todoList: TodoItemModel[];
  clearCompleted(): void;
  displayByTodoFilter(filter: TodoFilter): void;
}

const TodoFooter: React.FC<TodoFilterProp> = ({
  todoList,
  clearCompleted,
  displayByTodoFilter,
}) => {
  return (
    <>
      <span>{todoList.length} items left</span>
      <input
        type="button"
        value="All"
        onClick={(e) => {
          displayByTodoFilter(TodoFilter.All);
        }}
      ></input>
      <input
        type="button"
        value="Active"
        onClick={(e) => {
          displayByTodoFilter(TodoFilter.Active);
        }}
      ></input>
      <input
        type="button"
        value="Completed"
        onClick={(e) => {
          displayByTodoFilter(TodoFilter.Completed);
        }}
      ></input>
      <input
        name="deleteButton"
        type="button"
        value="Clear Completed"
        onClick={(e) => {
          e.preventDefault();
          clearCompleted();
        }}
      ></input>
    </>
  );
};

export default TodoFooter;
