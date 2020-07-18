import React, { useState } from "react";

interface AddTodoItemType {
  onAddItem: (newItem: string) => void;
  onCheckedChange: (checked: boolean) => void;
  placeholderText: string;
}

const AddTodoItem: React.FC<AddTodoItemType> = ({
  onAddItem,
  onCheckedChange,
  placeholderText,
}) => {
  //   const [] = useState(); // default
  //   const [count, setCount] = useState<number | null>();
  //   const [text, settext] = useState<{text: string}}>({text: "air"});

  const [todoText, setTodoText] = useState<string>("");

  const submitHandler = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (todoText.length > 0) {
      onAddItem(todoText);
      setTodoText("");
    }
  };

  return (
    <form
      onSubmit={(e) => {
        submitHandler(e);
      }}
    >
      <input
        onChange={(e) => onCheckedChange(e.target.checked)}
        type="checkbox"
      ></input>

      <input
        type="text"
        value={todoText}
        placeholder={placeholderText}
        onChange={(e) => {
          setTodoText(e.target.value.trim());
        }}
      />
    </form>
  );
};

export default AddTodoItem;
