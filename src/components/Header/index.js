import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
      <Image src={"/netflixLogo.png"} width={150} height={50} alt="logo" />
    </div>
  );
};

export default Header;
