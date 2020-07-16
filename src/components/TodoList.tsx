import React from "react";
import TodoItem, { TodoItemModel } from "./TodoItem";
interface TodoListProp {
  displayList: TodoItemModel[];
  onCheckedChange(key: string, checked: boolean): void;
}

const TodoList: React.FC<TodoListProp> = ({ displayList, onCheckedChange }) => {
  const todoItems = displayList.map((item) => {
    return (
      <li key={item.key}>
        {/* added key attribute for fixing Warning: Each child in a list should have a unique "key" prop. */}
        <TodoItem
          todoItem={item}
          onCheckedChange={(key, checked) => {
            onCheckedChange(key, checked);
          }}
        />
      </li>
    );
  });

  return <div>{todoItems}</div>;
};

export default TodoList;
