import React from "react";

export const Header = () => {
  return (
    <div>
      <header className="px-5 py- flex justify-between h-[96px] header">
        <img
          src="./assets/icons/logo.svg"
          className="w-[131px] h-[101px] cursor-pointer logo"
          alt="logo"
        />
        <img
          src="./assets/icons/menuIcon.svg"
          className="w-[57px] h-[85px] cursor-pointer menuIcon"
          alt="menu"
        />
      </header>
    </div>
  );
};
