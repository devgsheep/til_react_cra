import React, { useState } from "react";
import PostList from "../components/posts/PostList";
import styled from "@emotion/styled";

function Posts() {
  // js 자리
  // let postsArr = [];
  const [postsArr, setPostsArr] = useState([]);

  async function getPosts() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const result = await res.json();
      console.log(result);
      // postsArr = result;
      setPostsArr(result);
    } catch (error) {
      console.log(error);
    }
  }
  // 데이터를 컴포넌트로 출력하는 함수
  function makePostList() {
    let list = [];
    list = postsArr.map(function (item, index) {
      return <PostList key={index}></PostList>;
    });
    return list;
  }

  const Button = styled.button`
    background-color: #f85d41;
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

  function resetList() {
    setPostsArr([]);
  }

  // jsx 자리
  return (
    <div>
      <h1>
        Posts 목록
        <Button onClick={getPosts}>목록가져오기</Button>
        <Button onClick={resetList}>목록초기화</Button>
      </h1>
      <div>
        {postsArr.map(function (item, index) {
          return (
            <PostList
              id={item.id}
              title={item.title}
              body={item.body}
              userid={item.userId}
              key={index}
            ></PostList>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
