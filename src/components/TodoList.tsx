import React from "react";
interface TodoListProp {
  displayList: string[];
}

const TodoList: React.FC<TodoListProp> = ({ displayList }) => {
  return (
    <div>
      {displayList.map((item) => {
        return <li>{item}</li>;
      })}
    </div>
  );
};

export default TodoList;
