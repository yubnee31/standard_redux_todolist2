import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function Detail() {
  const navigate = useNavigate();

  return (
    <div>
      <p>제목</p>
      <p>내용</p>
      <p>완료여부</p>
      <button onClick={() => navigate("/")}>이전으로</button>
      <button
        onClick={() => {
          dispatch({
            type: DELETE_TODO,
            payload: todo.id,
          });
          navigate("/");
        }}
      >
        삭제
      </button>
    </div>
  );
}

export default Detail;
