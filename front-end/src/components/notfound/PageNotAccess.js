import React from "react";
import Image from "../image/Image";
import ButtonBackHome from "../button/ButtonBackHome";

const PageNotAccess = () => {
  return (
    <div className="w-full my-10 flex flex-col items-center">
      <div className="relative w-[500px]">
        <Image
          url="https://blogvault.net/wp-content/uploads/2020/10/Fixed-Sorry-you-are-not-allowed-to-access-this-page.png"
          className="rounded-xl"
        ></Image>
        <ButtonBackHome
          className="!absolute block bottom-4 right-4 !py-1"
          to="/"
        ></ButtonBackHome>
      </div>
    </div>
  );
};

export default PageNotAccess;
