import styled from "@emotion/styled";
import React from "react";

function PhotoList({ id, title, url, thumbnailUrl, albumid }) {
  // js 자리
  const PhotoCard = styled.div`
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
    border-left: 6px solid #4332c3;
    margin: 20px;
    padding: 20px;
    cursor: pointer;

    transition: all 0.2s;
    &:hover {
      transform: translateY(-10px);
    }
  `;
  const PhotoTitle = styled.h1`
    font-size: 20px;
    color: #333;
    margin-bottom: 20px;
  `;
  const PhotoUrl = styled.img``;
  const PhotoThum = styled.div`
    font-size: 13px;
    margin-bottom: 10px;
  `;
  const PhotoAlbumid = styled.div`
    font-size: 13px;
    text-align: right;
    color: #999;
  `;

  // jsx 자리
  return (
    <PhotoCard>
      <PhotoTitle>
        {id}:{title}
      </PhotoTitle>
      <PhotoUrl url={url} alt="사진" />
      <PhotoThum>{thumbnailUrl}</PhotoThum>
      <PhotoAlbumid>Album : {albumid} </PhotoAlbumid>
    </PhotoCard>
  );
}

export default PhotoList;
