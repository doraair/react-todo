import React from "react";

export enum TodoFilter {
  All,
  Active,
  Completed,
}

export interface TodoFilterProp {
  todoActiveCount: number;
  isShow: boolean;
  clearCompleted(): void;
  displayByTodoFilter(filter: TodoFilter): void;
}

const TodoFooter: React.FC<TodoFilterProp> = ({
  todoActiveCount,
  isShow,
  clearCompleted,
  displayByTodoFilter,
}) => {
  let footer = (
    <div className="container">
      <div className="row">
        <div className="col col-lg-4">
          <label>{todoActiveCount} items left</label>
        </div>
        <div className="col-md-auto">
          <div className="btn-group" role="group">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={(e) => {
                displayByTodoFilter(TodoFilter.All);
              }}
            >
              {"All"}
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={(e) => {
                displayByTodoFilter(TodoFilter.Active);
              }}
            >
              {"Active"}
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              value="Completed"
              onClick={(e) => {
                displayByTodoFilter(TodoFilter.Completed);
              }}
            >
              {"Completed"}
            </button>
          </div>
        </div>
        <div className="col col-lg-4 end">
          <div className="btn-group" role="group">
            <button
              name="deleteButton"
              className="btn btn-danger"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                clearCompleted();
              }}
            >
              {"Clear Completed"}
            </button>
          </div>
        </div>
      </div>{" "}
    </div>
  );

  return isShow ? footer : null;
};

export default TodoFooter;
