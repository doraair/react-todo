import React from "react";
interface TodoListProp {
  displayList: string[];
  checkedAll: boolean;
}

const TodoList: React.FC<TodoListProp> = ({ displayList, checkedAll }) => {
  return (
    <div>
      {displayList.map((item) => {
        return (
          <>
            <li>
              <input type="checkbox" checked={checkedAll}></input>
              {item}
            </li>
          </>
        );
      })}
    </div>
  );
};

export default TodoList;
