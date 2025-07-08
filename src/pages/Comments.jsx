import React, { useState } from "react";
import CommentList from "../components/comments/CommentList";
import styled from "@emotion/styled";

function Comments() {
  const [CommentsData, setCommentsData] = useState([]);
  async function getComments() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      const result = await res.json();
      setCommentsData(result);
    } catch (error) {
      console.log(error);
    }
  }

  const Button = styled.button`
    background-color: #c590b8;
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

  // getComments();
  function resetData() {
    setCommentsData([]);
  }
  return (
    <div>
      <h1>
        Comments 목록<Button onClick={getComments}>목록가져오기</Button>
        <Button onClick={resetData}>목록초기화</Button>
      </h1>
      <div>
        {CommentsData.map(function (item, index) {
          return (
            <CommentList
              postid={item.postId}
              id={item.id}
              name={item.name}
              email={item.email}
              body={item.body}
              key={index}
            ></CommentList>
          );
        })}
      </div>
    </div>
  );
}

export default Comments;
