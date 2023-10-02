import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { options } from "../utils/constants";

//!Create Base of Context
export const YoutubeContext = createContext();

//!Provide all data from Context
export const ContextProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("new");
  const [searchResult, setSearchResult] = useState(null);

  //UseEffect
  useEffect(() => {
    setSearchResult(null);
    fetchCategory(selectedCategory);
  }, [selectedCategory]);

  //Get data from API
  const fetchCategory = (category) => {
    axios
      .get(
        `https://youtube138.p.rapidapi.com/search/?q=${category}`,
        options
      )
      .then((res) => {
        setSearchResult(res.data.contents);
      });
  };

  return (
    <YoutubeContext.Provider
      value={{ selectedCategory, setSelectedCategory, searchResult }}
    >
      {children}
    </YoutubeContext.Provider>
  );
};
