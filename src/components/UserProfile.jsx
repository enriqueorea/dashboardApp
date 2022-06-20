import React from "react";
import { MdOutlineCancel } from "react-icons/md";

import { Button } from ".";
import { userProfileData } from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";
import avatar from "../data/avatar.jpg";

const UserProfile = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="nav-item absolute right-5 md:right-40 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
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
      <div className="mt-5">
        <div className="flex items-center gap-5">
          <img
            src={avatar}
            alt="user profile picture"
            className="h-24 w-24 rounded-full"
          />
          <div>
            <p>Michael Roberts</p>
            <p>Administrator</p>
            <p>admin@shoppy.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
