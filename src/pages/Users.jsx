import React, { useState } from "react";
import UserList from "../components/users/UserList";
import styled from "@emotion/styled";

function Users() {
  const [UserData, setUserData] = useState([]);
  async function getUsers() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const result = await res.json();
      setUserData(result);
    } catch (error) {
      console.log(error);
    }
  }

  const Button = styled.button`
    background-color: #4db152;
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

  // getUsers();
  function resetData() {
    setUserData([]);
  }
  return (
    <div>
      <h1>
        User 목록<Button onClick={getUsers}>목록가져오기</Button>
        <Button onClick={resetData}>목록초기화</Button>
      </h1>
      <div>
        {UserData.map(function (item, index) {
          return (
            <UserList
              id={item.id}
              name={item.name}
              username={item.username}
              email={item.email}
              address={item.address}
              phone={item.phone}
              website={item.website}
              company={item.company}
              key={index}
            ></UserList>
          );
        })}
      </div>
    </div>
  );
}

export default Users;
