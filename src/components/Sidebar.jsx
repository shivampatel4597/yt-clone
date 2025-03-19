import React from "react";
import { TiHome } from "react-icons/ti";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { IoChevronForward } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { TfiBook } from "react-icons/tfi";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
// explore icons
import {
  FaShoppingBag,
  FaMusic,
  FaFilm,
  FaGamepad,
  FaNewspaper,
} from "react-icons/fa";
import { MdLiveTv, MdSportsSoccer, MdCastForEducation } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import { BsMic } from "react-icons/bs";
// more from youtube
import { FaYoutube } from "react-icons/fa";
import { MdSettings, MdFeedback, MdReport, MdHelp } from "react-icons/md";
import { SiYoutubestudio, SiYoutubekids } from "react-icons/si";

const Sidebar = () => {
  const sidebarItems = [
    {
      id: 1,
      name: "Home",
      icon: <TiHome />,
    },
    { id: 2, name: "Shorts", icon: <SiYoutubeshorts /> },
    { id: 3, name: "Subscriptions", icon: <MdOutlineSubscriptions /> },
  ];
  const sidebarItems2 = [
    { id: 1, name: "Your channel", icon: <FaUser /> },
    { id: 2, name: "History", icon: <FaHistory /> },
    { id: 3, name: "Playlist", icon: <MdOutlinePlaylistPlay /> },
    { id: 4, name: "Your vedios", icon: <MdOutlineOndemandVideo /> },
    // { id: 5, name: "Book", icon: <TfiBook /> },
    { id: 6, name: "Watch Later", icon: <MdOutlineWatchLater /> },
    { id: 7, name: "Liked Videos", icon: <AiOutlineLike /> },
  ];

  const explore = [
    { id: 1, name: "Shopping", icon: <FaShoppingBag /> },
    { id: 2, name: "Music", icon: <FaMusic /> },
    { id: 3, name: "Movies", icon: <FaFilm /> },
    { id: 4, name: "Live", icon: <MdLiveTv /> },
    { id: 5, name: "Gaming", icon: <FaGamepad /> },
    { id: 6, name: "News", icon: <FaNewspaper /> },
    { id: 7, name: "Sports", icon: <MdSportsSoccer /> },
    { id: 8, name: "Courses", icon: <MdCastForEducation /> },
    { id: 9, name: "Fashion & Beauty", icon: <GiClothes /> },
    { id: 10, name: "Podcast", icon: <BsMic /> },
  ];

  const youtubeOptions = [
    { id: 1, name: "YouTube Premium", icon: <FaYoutube /> },
    { id: 2, name: "YouTube Studio", icon: <SiYoutubestudio /> },
    { id: 3, name: "YouTube Music", icon: <FaMusic /> },
    { id: 4, name: "YouTube Kids", icon: <SiYoutubekids /> },
    { id: 5, name: "Settings", icon: <MdSettings /> },
    { id: 6, name: "Report", icon: <MdReport /> },
    { id: 7, name: "History", icon: <FaHistory /> },
    { id: 8, name: "Help", icon: <MdHelp /> },
    { id: 9, name: "Send Feedback", icon: <MdFeedback /> },
  ];
  const youtubeOptions_red = [
    "YouTube Premium",
    "YouTube Studio",
    "YouTube Music",
    "YouTube Kids",
  ];
  return (
    <div className="w-[20%] px-5 h-[calc(100vh-6.625rem)] overflow-y-scroll oveflow-x-hidden mt-16">
      <div className=" space-y-3   items-center ">
        {sidebarItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1  "
          >
            <div className="text-2xl cursor-pointer">{item.icon} </div>
            <span className="cursor-pointer font-bold">{item.name}</span>
          </div>
        ))}
      </div>
      <br />
      <hr />
      {/* -----you part---- */}
      <div className="mt-2 space-y-3   items-center ">
        <div className="ml-2 flex items-center space-x-6">
          <h1 className="font-semibold ">You</h1>
          <IoChevronForward />
        </div>
        {sidebarItems2.map((item) => (
          <div
            key={item.id}
            className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1  "
          >
            <div className="text-2xl cursor-pointer">{item.icon} </div>
            <span className="cursor-pointer font-bold">{item.name}</span>
          </div>
        ))}
      </div>
      <br />
      <hr />
      {/* explore */}
      <div className="mt-2 space-y-3   items-center ">
        <div className="ml-2 flex items-center space-x-6">
          <h1 className="font-semibold ">Explore</h1>
        </div>
        {explore.map((item) => (
          <div
            key={item.id}
            className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1  "
          >
            <div className="text-2xl cursor-pointer">{item.icon} </div>
            <span className="cursor-pointer font-bold">{item.name}</span>
          </div>
        ))}
      </div>
      <br />
      <hr />

      {/* More from YouTube */}
      <div className="mt-2 space-y-3   items-center ">
        <div className="ml-2 flex items-center space-x-6">
          <h1 className="font-semibold ">More from YouTube</h1>
        </div>
        {youtubeOptions
          .filter((item) => item.name.toLowerCase().includes("youtube"))
          .map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1  "
            >
              <div className="text-2xl cursor-pointer text-red-600">
                {item.icon}{" "}
              </div>
              <span className="cursor-pointer font-bold">{item.name}</span>
            </div>
          ))}
      </div>
      <br />
      <hr />
      {/* More from YouTube non red */}
      <div className="mt-2 space-y-3   items-center ">
      
        {youtubeOptions.filter(item=>!item.name.toLowerCase().includes("youtube")).map((item) => (
          <div
            key={item.id}
            className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1  "
          >
            <div className="text-2xl cursor-pointer ">{item.icon} </div>
            <span className="cursor-pointer font-bold">{item.name}</span>
          </div>
        ))}
      </div>
      <br />
      <hr />
      <div className="mt-2">
        <span className="text-xs font-semibold text-gray-500">About Press Copyright <br/> Contact us Creators Advertise <br/>Developers</span>
        <br/>
        <span className="text-xs font-semibold text-gray-500">Terms Privacy Policy & Safety <br/> How YouTube works <br/> Test new features</span>
        
        <p className="mt-2 text-xs font-semibold text-gray-400">© 2025 Google LLC</p>
      </div>
    </div>
  );
};

export default Sidebar;
