import React from "react";

const AuthenticationPage = ({
  title = "This is title of Heading Authentication Page",
  children,
}) => {
  return (
    <div className="w-full max-w-[360px] mx-auto py-10">
      <h2 className="text-base font-bold">{title}</h2>
      {children}
    </div>
  );
};

export default AuthenticationPage;
