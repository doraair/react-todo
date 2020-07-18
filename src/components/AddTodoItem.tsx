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
  const [todoText, setTodoText] = useState<string>("");

  const submitHandler = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (todoText.length > 0) {
      onAddItem(todoText);
      setTodoText("");
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              <input
                type="checkbox"
                onChange={(e) => {
                  onCheckedChange(e.target.checked);
                }}
              ></input>
            </span>
          </div>

          <input
            type="text"
            value={todoText}
            className="form-control"
            placeholder={placeholderText}
            onChange={(e) => {
              setTodoText(e.target.value.trim());
            }}
          />
        </div>
      </form>
    </>
  );
};

export default AddTodoItem;
