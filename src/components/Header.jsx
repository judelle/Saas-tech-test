import React from "react";
import { useSelector } from "react-redux";

function Header() {
  const user = useSelector((state) => state.user.userInfo);

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {user && (
          <div className="flex items-center">
            <img
              src={user.picture.thumbnail}
              alt="user thumbnail"
              className="rounded-full w-8 h-8 mr-2"
            />
            <span>
              {user.name.first} {user.name.last}
            </span>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
