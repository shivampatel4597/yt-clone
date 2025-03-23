import React from "react";
import { Link } from "react-router-dom";
import Time from "../Loader/Time";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";

const numAbbr = (num) => (num ? abbreviateNumber(num, 1) : "0");
//  for num views management

const Video = ({ video }) => {
  console.log(video);
  return (
    <div>
      <Link to={`/video/${video?.videoId}`}>
        <div className="flex  flex-col">
          <div className="relative h-48 md:h-56 rounded-xl hover:rounded-none duration-200 overflow-hidden">
            <img className="h-full w-full" src={video?.thumbnails[0].url} />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
          <div className="flex  mt-3 space-x-2 ">
            {/* image */}
            <div className="flex items-start ">
              <div className="flex h-9 w-9 rounded-full overflow-hidden border">
                <img
                  className="h-full w-full rounded-full overflow-hidden"
                  src={video?.author?.avatar[0].url}
                  alt=""
                />
              </div>
            </div>
            {/* title */}
            <div>
              <span className="text-sm font-bold line-clamp-2">
                {video?.title}
              </span>
              <span className="flex items-center font-semibold mt-2 text-[12px] text-gray-600">
                {video?.author?.title}
                {/* video?.author?.badges.length >0  you can use this also video?.author?.badges?.[0]?.type  */}
                {video?.author?.badges.length > 0 &&
                  video?.author?.badges[0].type === "VERIFIED_CHANNEL" && (
                    <BsFillCheckCircleFill className="text-gray-600 ml-1 text-[12px]" />
                  )}
              </span>
              <div className=" flex  items-center  text-[12px]">
                <span> ${abbreviateNumber(video?.stats?.views, 2)} views </span>
                <span className="relative top-[-2px]    mx-2 font-bold">.</span>
                <span>{video?.publishedTimeText}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Video;
