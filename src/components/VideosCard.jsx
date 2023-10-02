import React, { useContext } from "react";
import { YoutubeContext } from "../context/youtubeContext";
import { BsCheck2Circle } from "react-icons/bs";
import millify from "millify";
import { Link } from "react-router-dom";

const VideosCard = ({ videoInfo }) => {
  const { video } = videoInfo;
  const { context } = useContext(YoutubeContext);

  return (
    <Link className="w-full" to={`/watch/${video.videoId}`}>
      <div title={video.descriptionSnippet}>
        <img
          className="w-full rounded my-4 cursor-pointer"
          src={video.thumbnails[0].url}
          alt=""
        />
        <div className="flex gap-3">
          <img
            className="rounded-full w-[45px] h-[45px] cursor-pointer"
            src={video.author.avatar[0].url}
            alt=""
          />
          <div>
            <p>{video.title}</p>
            <p className="flex items-center">
              <span>{video.author.title}</span>
              {video.author.badges[0]?.text === "Doğrulandı" && (
                <span>
                  <BsCheck2Circle className="mx-2 text-blue-500" />
                </span>
              )}
            </p>
            <div className="flex gap-3">
              <p
                className="cursor-default"
                title={
                  video.stats.viewers
                    ? video.stats.viewers
                    : video.stats.views
                }
              >
                {video.stats.viewers
                  ? millify(video.stats.viewers)
                  : millify(video.stats.views)}
              </p>
              <p>{video.publishedTimeText}</p>
            </div>
          </div>
        </div>
      </div>{" "}
    </Link>
  );
};

export default VideosCard;
