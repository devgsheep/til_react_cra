import React, { useState } from "react";
import TodosList from "../components/todos/TodosList";
import styled from "@emotion/styled";

function Todos() {
  const [TodosData, setTodosData] = useState([]);
  async function getTodos() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const result = await res.json();
      setTodosData(result);
    } catch (error) {
      console.log(error);
    }
  }

  const Button = styled.button`
    background-color: #ffa3e8;
    color: white;
    padding: ${props => (props.size === "lg" ? "12px 24px" : "8px 16px")};
    border: none;
    border-radius: 8px;
    font-size: ${props => (props.size === "lg" ? "18px" : "14px")};
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
    margin: 6px;
    opacity: ${props => (props.disabled ? 0.6 : 1.0)};

    &:hover {
      opacity: ${props => (props.disabled ? 0.6 : 0.8)};
    }
  `;

  // getTodos();
  function resetData() {
    setTodosData([]);
  }
  return (
    <div>
      <h1>
        Todos 목록
        <Button onClick={getTodos}>목록가져오기</Button>
        <Button onClick={resetData}>목록초기화</Button>
      </h1>
      <div>
        {TodosData.map(function (item, index) {
          return (
            <TodosList
              userid={item.userId}
              id={item.id}
              title={item.title}
              completed={item.completed}
              key={index}
            ></TodosList>
          );
        })}
      </div>
    </div>
  );
}

export default Todos;
