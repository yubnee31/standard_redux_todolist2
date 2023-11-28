import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DELETE_TODO, SWITCH_TODO } from "../redux/modules/todos";
import { useNavigate } from "react-router";

function List({ isDone }) {
  const todos = useSelector((state) => {
    return state.todos;
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      {isDone ? "DONELIST" : "TODOLIST"}
      {todos
        .filter(function (item) {
          return item.isDone === isDone;
        })
        .map(function (todo) {
          return (
            <div onClick={() => navigate("/detail")}>
              <p>{todo.title}</p>
              <p>{todo.body}</p>
              <p>{todo.isDone}</p>
              <button
                onClick={() => {
                  dispatch({
                    type: SWITCH_TODO,
                    payload: todo.id,
                  });
                }}
              >
                {isDone ? "취소" : "완료"}
              </button>
              <button
                onClick={() => {
                  dispatch({
                    type: DELETE_TODO,
                    payload: todo.id,
                  });
                }}
              >
                삭제
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default List;
