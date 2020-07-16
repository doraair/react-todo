import React from "react";

export interface TodoItemModel {
  key: string;
  isChecked: boolean;
  text: string;
}

export interface TodoItemType {
  todoItem: TodoItemModel;
  onCheckedChange(key: string, checked: boolean): void;
}

const TodoItem: React.FC<TodoItemType> = ({
  todoItem,
  onCheckedChange,
}: TodoItemType) => {
  return (
    <>
      <input
        id={todoItem.key}
        type="checkbox"
        checked={todoItem.isChecked}
        onChange={(e) => {
          onCheckedChange(todoItem.key, e.target.checked);
        }}
      ></input>
      {todoItem.text}
    </>
  );
};
export default TodoItem;
