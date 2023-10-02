import React, { useContext } from "react";
import SideNav from "../components/SideNav";
import { YoutubeContext } from "../context/youtubeContext";
import VideosCard from "../components/VideosCard";

const Feed = () => {
  const { searchResult } = useContext(YoutubeContext);

  return (
    <div className="flex">
      <SideNav />
      <div className=" videos">
        {!searchResult ? (
          <p>Loading</p>
        ) : (
          searchResult.map((video) => (
            <div>
              {video.type === "video" && (
                <VideosCard videoInfo={video} />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Feed;
