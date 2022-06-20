import React from "react";
import { MdOutlineCancel } from "react-icons/md";

import { Button } from ".";
import { userProfileData } from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";
import avatar from "../data/avatar.jpg";

const UserProfile = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg">User profile</p>
        </div>
        <Button
          icon={<MdOutlineCancel />}
          color={currentColor}
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="mt-6">
        <div className="flex items-center gap-5 border-b-1 border-color pb-6">
          <img
            src={avatar}
            alt="user profile picture"
            className="h-24 w-24 rounded-full"
          />
          <div>
            <p className="font-semibold text-xl">Michael Roberts</p>
            <p className="text-gray-500 text-sm dark:text-gray-400">
              Administrator
            </p>
            <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">
              admin@shoppy.com
            </p>
          </div>
        </div>
        <div>
          {userProfileData.map((item) => (
            <div
              key={item.title}
              className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer dark:hover:bg-[#42464D]"
            >
              <button
                type="button"
                style={{ backgroundColor: item.iconBg, color: item.iconColor }}
                className="text-xl p-3 rounded-xl"
              >
                {item.icon}
              </button>
              <div>
                <p className="text-md font-semibold">{item.title}</p>
                <p className="text-gray-500 text-sm dark:text-gray-400">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5">
        <Button
          color="white"
          borderRadius="10px"
          bgColor={currentColor}
          width="full"
          text="Logout"
        />
      </div>
    </div>
  );
};

export default UserProfile;
