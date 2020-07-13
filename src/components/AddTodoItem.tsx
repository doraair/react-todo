import React, { useState } from "react";

interface AddTodoItemType {
  onAddItem: (newItem: string) => void;
  placeholderText: string;
}

const AddTodoItem: React.FC<AddTodoItemType> = ({
  onAddItem,
  placeholderText,
}) => {
  //   const [] = useState(); // default
  //   const [count, setCount] = useState<number | null>();
  //   const [text, settext] = useState<{text: string}}>({text: "air"});

  const [todoText, setTodoText] = useState<string>("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAddItem(todoText);
      }}
    >
      <input
        type="text"
        placeholder={placeholderText}
        onChange={(e) => {
          setTodoText(e.target.value);
        }}
      />
    </form>
  );
};

export default AddTodoItem;
