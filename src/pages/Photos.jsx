import React, { useState } from "react";
import PhotoList from "../components/photos/PhotoList";
import styled from "@emotion/styled";

function Photos() {
  // js 자리
  const [photosData, setPhotosData] = useState([]);
  async function getPhotos() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");
      const result = await res.json();
      setPhotosData(result);
    } catch (error) {
      console.log(error);
    }
  }

  const Button = styled.button`
    background-color: #306ee0;
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

  // getPhotos();
  function resetData() {
    setPhotosData([]);
  }
  return (
    <div>
      <h1>
        Photos 목록<Button onClick={getPhotos}>목록가져오기</Button>
        <Button onClick={resetData}>목록초기화</Button>
      </h1>
      <div>
        {photosData.map(function (item, index) {
          return (
            <PhotoList
              albumid={item.albumId}
              id={item.id}
              title={item.title}
              url={item.url}
              thumbnailUrl={item.thumbnailUrl}
              key={index}
            ></PhotoList>
          );
        })}
      </div>
    </div>
  );
}

export default Photos;
