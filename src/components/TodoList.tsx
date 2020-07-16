import React from "react";
import TodoItem, { TodoItemType } from "./TodoItem";
interface TodoListProp {
  displayList: TodoItemType[];
  onCheckedChange(key: string, checked: boolean): void;
}

const TodoList: React.FC<TodoListProp> = ({ displayList, onCheckedChange }) => {
  return (
    <div>
      {displayList.map((item) => {
        return (
          <>
            <li>
              <input
                id={item.key}
                type="checkbox"
                checked={item.isChecked}
                onChange={(e) => {
                  onCheckedChange(item.key, e.target.checked);
                }}
              ></input>
              {item.text}
            </li>
          </>
        );
      })}
    </div>
  );
};

export default TodoList;
