import React from "react";
import UserTopBlock from "./UserTopBlock";

const UserTopContent = ({
  title = "This is title of Top content",
  sub = "This is sub of Top content",
}) => {
  return (
    <UserTopBlock>
      <h1 className="text-2xl font-bold">{title}</h1>
      <span className="text-base">{sub}</span>
    </UserTopBlock>
  );
};

export default UserTopContent;
