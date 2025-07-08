import styled from "@emotion/styled";
import React from "react";

function CommentList({ postid, id, name, email, body }) {
  // js 자리

  const CommentCard = styled.div`
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
  const CommentTitle = styled.h1`
    font-size: 20px;
    color: #333;
    margin-bottom: 20px;
  `;
  const CommentEmail = styled.div`
    font-size: 13px;
    margin-bottom: 10px;
  `;
  const CommentBody = styled.div`
    font-size: 13px;
    margin-bottom: 10px;
  `;
  const CommentPostid = styled.div`
    font-size: 13px;
    text-align: right;
    color: #999;
  `;

  return (
    <CommentCard>
      <CommentTitle>
        {id}:{name}
      </CommentTitle>
      <CommentEmail>{email}</CommentEmail>
      <CommentBody>{body}</CommentBody>
      <CommentPostid>{postid}</CommentPostid>
    </CommentCard>
  );
}

export default CommentList;
