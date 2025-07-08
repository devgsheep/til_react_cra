import styled from "@emotion/styled";
import React from "react";

function TodosList({ id, title, completed, userid }) {
  // js 자리
  const TodosCard = styled.div`
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
    border-left: 6px solid #f3a2c3;
    margin: 20px;
    padding: 20px;
    cursor: pointer;

    transition: all 0.2s;
    &:hover {
      transform: translateY(-10px);
    }
  `;
  const TodosTitle = styled.h1`
    font-size: 20px;
    color: #333;
    margin-bottom: 20px;
  `;
  const TodosCom = styled.div`
    font-size: 15px;
    margin-bottom: 10px;
  `;
  const TodosUser = styled.div`
    font-size: 13px;
    text-align: right;
    color: #999;
  `;

  return (
    <TodosCard>
      <TodosTitle>
        {id}:{title}
      </TodosTitle>
      <TodosCom>
        <li>할 일 : {completed}</li>
      </TodosCom>
      <TodosUser>User : {userid}</TodosUser>
    </TodosCard>
  );
}

export default TodosList;
