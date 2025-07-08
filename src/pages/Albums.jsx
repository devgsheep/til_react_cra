import React, { useState } from "react";
import AlbumList from "../components/albums/AlbumList";
import styled from "@emotion/styled";

function Albums() {
  // js 자리
  const [albumsData, setAlbumsData] = useState([]);
  async function getAlbums() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/albums");
      const result = await res.json();
      setAlbumsData(result);
    } catch (error) {
      console.log(error);
    }
  }

  const Button = styled.button`
    background-color: #f7c53d;
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

  // getAlbums();
  function resetList() {
    setAlbumsData([]);
  }
  // jsx 자리
  return (
    <div>
      <h1>
        Albums 목록 <Button onClick={getAlbums}>목록가져오기</Button>
        <Button onClick={resetList}>목록초기화</Button>
      </h1>
      <div>
        {albumsData.map(function (item, index) {
          return (
            <AlbumList
              userid={item.userId}
              id={item.id}
              title={item.title}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Albums;
