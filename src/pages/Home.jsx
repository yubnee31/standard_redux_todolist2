import React from "react";
import Form from "../components/Form";
import List from "../components/List";
import { useSelector } from "react-redux";

function Home() {
  const todos = useSelector((state) => {
    return state.todos;
  });
  console.log(todos);
  return (
    <div>
      <header>My Todo List</header>
      <main>
        <Form />

        <List isDone={false} />

        <List isDone={true} />
      </main>
      <footer>copyright</footer>
    </div>
  );
}

export default Home;
