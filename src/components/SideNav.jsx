import React from "react";
import { categories } from "../utils/constants.jsx";
import { v4 as uuid } from "uuid";
import { useContext } from "react";
import { YoutubeContext } from "../context/youtubeContext.jsx";

const SideNav = () => {
  const { selectedCategory, setSelectedCategory } = useContext(YoutubeContext);
  const UniqueId = uuid().slice(0, 8);
  return (
    <nav className="flex flex-col pt-4">
      {categories.map((item) => (
        <>
          <div
            onClick={() => setSelectedCategory(item.name)}
            className={`${
              selectedCategory === item.name && "bg-blue-800"
            } flex items-center gap-2 p-2 py-3 text-lg cursor-pointer hover:bg-gray-800`}
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
          {item.divider && <hr />}
        </>
      ))}
    </nav>
  );
};

export default SideNav;
