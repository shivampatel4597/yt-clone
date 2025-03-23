import React from "react";
import Sidebar from "./Sidebar";
import Video from "./Video";
import { useAuth } from "../context/AuthProvider";
const Home = () => {
  const { data } = useAuth();
  console.log("home", data);
  return (
    <div className="flex mt-16">
      <Sidebar />
      <div className=" h-[calc(100vh-6.625rem)] overflow-y-scroll oveflow-x-hidden ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-5">
        {data && data.map((item) => {
    if(item.type !== "video") return false
         return  <Video key={item.id} video={item?.video} />
        })}
      </div>
      </div>
     
    
    </div>
  );
};

export default Home;
