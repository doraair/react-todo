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
    <li className="list-group-item">
      <div className="custom-control custom-checkbox">
        <input
          id={todoItem.key}
          type="checkbox"
          className="custom-control-input"
          checked={todoItem.isCompleted}
          onChange={(e) => {
            onCheckedChange(todoItem.key, e.target.checked);
          }}
        ></input>
        <label
          className="custom-control-label"
          htmlFor={todoItem.key}
          style={
            todoItem.isCompleted
              ? {
                  textDecorationLine: "line-through",
                  textDecorationStyle: "solid",
                }
              : {}
          }
        >
          {todoItem.text}
        </label>

        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={(e) => {
            onClickDelete(todoItem.key);
          }}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </li>
  );
};
export default TodoItem;
