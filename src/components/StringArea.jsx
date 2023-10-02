import React, { useRef, useState } from "react";

const StringArea = ({ text, max }) => {
  const pTag = useRef();
  const [showFullText, setShowFullText] = useState(false);
  let shortText = text;

  if (text.length > max && !showFullText) {
    shortText = text.substring(0, max) + "...";
  }
  const handleClick = () => {
    setShowFullText(!showFullText);
  };

  return (
    <p
      className={shortText.length !== text.length && "cursor-pointer"}
      ref={pTag}
      onClick={handleClick}
    >
      {shortText}
    </p>
  );
};

export default StringArea;
