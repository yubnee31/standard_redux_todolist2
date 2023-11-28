import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";
import { ADD_TODO } from "../redux/modules/todos";

function Form() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch({
      type: ADD_TODO,
      payload: {
        id: shortid.generate(),
        title,
        body,
        isDone: false,
      },
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="title">제목</label>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <label>내용</label>
      <input
        type="text"
        name="body"
        id="body"
        value={body}
        onChange={(e) => {
          setBody(e.target.value);
        }}
      />
      <button>작성</button>
    </form>
  );
}

export default Form;
