import React from "react";

export enum TodoFilter {
  All,
  Active,
  Completed,
}

export interface TodoFilterProp {
  todoActiveCount: number;
  clearCompleted(): void;
  displayByTodoFilter(filter: TodoFilter): void;
}

const TodoFooter: React.FC<TodoFilterProp> = ({
  todoActiveCount,
  clearCompleted,
  displayByTodoFilter,
}) => {
  return (
    <>
      <span>{todoActiveCount} items left</span>
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
