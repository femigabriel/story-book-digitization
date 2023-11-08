import React from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown } from "antd";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    ),
  },
];

export const ActivitiesHeader = () => {
  return (
    <div className="w-full h-[96px]">
      <header className="px-10 py-7 flex justify-between  w-full">
        <div className="flex cursor-pointer w-full">
          <img
            src="../src/assets/icons/back.svg"
            className="w-[24px] h-[24px] mr-3"
            alt="back-icon"
          />
          <span>Back</span>
        </div>

        <div className="flex">
          <div className="flex cursor-pointer h-[] w-[198px]">
            <img
              src="../src/assets/icons/avatarIcon.svg"
              className="w-[58px] h-[58px] cursor-pointer"
              alt="avatar"
            />
            <span className="mx-3 items-center flex justify-center">
              Queen1234
            </span>
          </div>
          {/* <img
            src="../src/assets/icons/downIcon.svg"
            className="w-[40px] h-[40px] items-center flex justify-center"
            alt="down-icon"
          /> */}
          <Dropdown menu={{ items }} placement="bottomRight" arrow>
            <img
              src="../src/assets/icons/downIcon.svg"
              className="w-[40px] h-[40px] mt-3"
              alt="down-icon"
            />
          </Dropdown>
        </div>
      </header>
    </div>
  );
};
