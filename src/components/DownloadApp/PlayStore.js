import React from "react";
import appimage from "../../images/App.png";
import googleplay from "../../images/playstore/gplay.png";

import { Link } from "react-router-dom";
import { Button } from "../Models/button";
import toast from "react-hot-toast";
import Video from "../Video";

const PlayStore = () => {

  const Handletoast = () => {


    toast.success("App comming soon");
    console.log("toast fired");
  }



  return (
    <div className="w-full min-h-[100dvh] mt-10 bg-[#000] flex flex-col md:flex-row mb-10 justify-center items-center p-4  ">
      <div className="mx-10 bg-transparent flex items-center justify-center flex-col shadow-lg group p-4  gap-5">
        <img
          src={appimage}
          alt="Investment"
          className="xl:w-[300px] xl:h-[300px] mx-10 object-center object-contain "
        />
        <Link to="/">
          <img
            src={googleplay}
            alt="download app"
            className=" hover:blur-sm group-hover:shadow-md  object-center object-contain bg-secondary   rounded-xl "
          />
        </Link>

        <Button className="bg-rose-700 " onClick={Handletoast} size="lg">
          <Link>Download App</Link>
        </Button>
      </div>
      <div className="mx-10 bg-transparent flex items-center justify-center">
      <Video/>
      </div>
    </div>
  );
};

export default PlayStore;
