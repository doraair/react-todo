import React from "react";

export interface TodoItemModel {
  key: string;
  isCompleted: boolean;
  text: string;
}

export interface TodoItemType {
  todoItem: TodoItemModel;
  onCheckedChange(key: string, checked: boolean): void;
  onClickDelete(key: string): void;
}

const TodoItem: React.FC<TodoItemType> = ({
  todoItem,
  onCheckedChange,
  onClickDelete,
}: TodoItemType) => {
  return (
    <>
      <input
        id={todoItem.key}
        type="checkbox"
        checked={todoItem.isCompleted}
        onChange={(e) => {
          onCheckedChange(todoItem.key, e.target.checked);
        }}
      ></input>
      {todoItem.text}

      <button
        type="button"
        onClick={(e) => {
          onClickDelete(todoItem.key);
        }}
      >
        Delete
      </button>
    </>
  );
};
export default TodoItem;
