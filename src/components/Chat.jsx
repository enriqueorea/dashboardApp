import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { Button } from ".";
import { chatData } from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";

const Chat = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="nav-item absolute right-5 md:right-40 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg">Message</p>
          <button
            type="button"
            className="text-black text-xs rounded p-1 px-2 bg-orange-theme "
          >
            5 New
          </button>
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
        {chatData.map((item, index) => (
          <div
            key={index}
            className=" cursor-pointer flex items-center leading-8 gap-5 border-b-1 border-color p-3"
          >
            <div className="relative">
              <img
                className="h-10 w-10 rounded-full"
                src={item.image}
                alt="profile notification"
              />
              <span className="absolute inline-flex rounded-full h-2 w-2 bg-green-500 right-0 top-8"></span>
            </div>
            <div>
              <p className="font-semibold dark:text-gray-200">{item.message}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400">
                {item.desc}
              </p>
              <p className="text-gray-500 text-xs dark:text-gray-400">
                {item.time}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <Button
          color="white"
          borderRadius="10px"
          bgColor={currentColor}
          width="full"
          text="See all message"
        />
      </div>
    </div>
  );
};

export default Chat;
