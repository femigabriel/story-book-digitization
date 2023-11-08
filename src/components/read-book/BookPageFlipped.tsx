import React from "react";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}
export const BookPageFlipped = ({ onNextClick, onBackClick }: Props) => {
  return (
    <div className="flex justify-between items-center coverBook w-full h-screen px-5">
      <img
        src="../src/assets/icons/forwardIcon.svg"
        className="w-[17px] h-[19px] cursor-pointer cover"
        alt="forward-icon"
        onClick={onBackClick}
      />
      <div>
        <img
          src="../src/assets/images/bookFlip.svg"
          className="w-full px-10 h-[538.355px] cursor-pointer "
          alt="cover"
        />
      </div>
      <img
        src="../src/assets/icons/backIcon.svg"
        className="w-[17px] h-[19px] cursor-pointer cover"
        alt="forward-icon"
        onClick={onNextClick}
      />
    </div>
  );
};
