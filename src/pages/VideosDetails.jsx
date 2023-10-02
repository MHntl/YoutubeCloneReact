import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { options } from "../utils/constants";
import ReactPlayer from "react-player";
import { SlLike } from "react-icons/Sl";
import { PiShareFat } from "react-icons/Pi";
import millify from "millify";
import VideosCard from "../components/VideosCard";
import StringArea from "../components/StringArea";

const VideosDetails = () => {
  const params = useParams();
  const [details, setDetails] = useState(null);
  const [relatedContent, setRelatedContent] = useState(null);

  useEffect(() => {
    //her değişimde loading ekranı gelsin die null yapıldı
    setDetails(null);
    setRelatedContent(null);
    axios
      .get(
        `https://youtube138.p.rapidapi.com/video/details/?id=${params.videoId}`,
        options
      )
      .then((res) => setDetails(res.data))
      .catch((error) => console.log(error));
    axios
      .get(
        `https://youtube138.p.rapidapi.com/video/related-contents/?id=${params.videoId}`,
        options
      )
      .then((res) => setRelatedContent(res.data.contents));
  }, [params.videoId]);

  return (
    <div>
      {details === null ? (
        <div role="status" className="flex mt-[200px] justify-center">
          <svg
            aria-hidden="true"
            className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row lg:justify-between gap-5 justify-between p-3 sm:p-5 md:p-12">
          {/*  Ana  içerik */}
          <div className="flex flex-col items-center  lg:max-w-[800px]">
            <ReactPlayer
              width={"100%"}
              url={`https://www.youtube.com/watch?v=${details.videoId}`}
              controls
              // playing={true}
            />
            <div className="flex flex-col gap-5 mt-5">
              <h2>{details?.title}</h2>
              <div className="flex justify-between">
                <div className="flex">
                  <img
                    className="w-[48px] rounded-full h-[48px]"
                    src={details?.author.avatar[0].url}
                    alt=""
                  />
                  <div>
                    <p>{details.author.title}</p>
                    <p>{details.author.stats.subscribersText}</p>
                  </div>
                  <button className="bg-white text-black rounded-lg ml-2 h-[40px]">
                    Abone Ol
                  </button>
                </div>
                <div>
                  <div className="flex gap-5 cursor-pointer items-center">
                    <div className="items-center mx-2  bg-gray-800 p-2 rounded-md hover:bg-gray-700">
                      <button>
                        <SlLike />
                      </button>
                      <span>{millify(details.stats.likes)}</span>
                    </div>
                    <div className="flex items-center  bg-gray-800 p-2 rounded-md hover:bg-gray-700">
                      <PiShareFat />
                      <span>Paylaş</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-600 rounded p-4">
                <p className="flex gap-5 mb-3">
                  <span>
                    {millify(details.stats.views)} kez izlendi
                  </span>
                  <span>
                    {details.publishedDate} tarihinde yayınlandı
                  </span>
                </p>
                <p>
                  {
                    <StringArea
                      text={details.description}
                      max={100}
                    />
                  }
                </p>
              </div>
            </div>
          </div>
          {/*  Alakalı içerik */}
          <div className="flex flex-col gap-3 lg:max-w-[300px]">
            {!relatedContent ? (
              <div
                role="status"
                className="flex mt-[200px] justify-center"
              >
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <div>
                {relatedContent.map((video, i) => {
                  if (video.type !== "video") return;
                  return <VideosCard key={i} videoInfo={video} />;
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideosDetails;
