import React from "react";
import TodoItem, { TodoItemModel } from "./TodoItem";
interface TodoListProp {
  displayList: TodoItemModel[];
  completeTodoItem(key: string, isCompleted: boolean): void;
  deleteTodoItem(key: string): void;
}

const TodoList: React.FC<TodoListProp> = ({
  displayList,
  completeTodoItem,
  deleteTodoItem,
}) => {
  const todoItems = displayList.map((item) => {
    return (
      <ul key={item.key} className="list-group">
        {/* added key attribute for fixing Warning: Each child in a list should have a unique "key" prop. */}
        <TodoItem
          todoItem={item}
          onCheckedChange={(key, checked) => {
            completeTodoItem(key, checked);
          }}
          onClickDelete={(key) => {
            deleteTodoItem(key);
          }}
        />
      </ul>
    );
  });

  return <>{todoItems}</>;
};

export default TodoList;
