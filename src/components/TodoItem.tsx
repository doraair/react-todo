import React, { useState } from "react";

export interface TodoItemType {
  key: string;
  isChecked: boolean;
  text: string;
}

const TodoItem: React.FC<TodoItemType> = ({
  isChecked,
  text,
}: TodoItemType) => {
  const [itemChecked, setItemChecked] = useState<boolean>(false);
  return (
    <>
      <li>
        <input
          type="checkbox"
          checked={isChecked || itemChecked}
          onChange={(e) => {
            console.log(e.target.checked);
            setItemChecked(e.target.checked);
          }}
        ></input>
        {text}
      </li>
    </>
  );
};
export default TodoItem;
