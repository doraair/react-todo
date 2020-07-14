import React from "react";
import TodoItem, { TodoItemType } from "./TodoItem";
interface TodoListProp {
  displayList: TodoItemType[];
}

const TodoList: React.FC<TodoListProp> = ({ displayList }) => {
  return (
    <div>
      {displayList.map((item) => {
        console.log(item.key);
        return (
          <>
            <li>
              <input
                id={item.key}
                type="checkbox"
                checked={item.isChecked}
                onChange={(e) => {
                  console.log(e.target.checked);
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
