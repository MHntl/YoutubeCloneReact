import axios from "axios";
import React, { useState } from "react";
import { FaBell } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Header = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/results/${query}`);
  };
  return (
    <header className="flex justify-between items-center p-2 sticky">
      <div className="flex items-center">
        <Link className="flex items-center" to={"/"}>
          <img
            className="w-24 cursor-pointer"
            src="https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png"
            alt=""
          />
          <h1 className="text-2xl">Youtube</h1>
        </Link>
      </div>
      <form className="bg-white rounded">
        <input
          type="text"
          className="px-4 py-1 rounded text-black focus:outline-none"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleClick}>
          <FiSearch className="text-black mr-2" />
        </button>
      </form>
      <FaBell className="mr-4" />
    </header>
  );
};

export default Header;
