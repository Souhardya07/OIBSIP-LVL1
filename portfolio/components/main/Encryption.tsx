"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/Motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full shadow-black">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[60px] font-medium text-center text-gray-200"
        >
          Performance
          <span >
            {" "}
            &{" "}
          </span>
          Security
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/Lock.png"
            alt="Lock top"
            width={50}
            height={50}
            className="w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
        </div>

        <div className="Welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] border-[#b459158b] opacity-[0.9]">
          <h1 className="Welcome-text text-white text-[20px]">Encryption</h1>
        </div>
      </div>
      <div className="absolute z-[20] bottom-[10px] px-[5px]">
        <div className="cursive text-[40px] font-medium text-center text-gray-200">
          Secure your data with end-to-end encryption
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/Encrypt.mp4"
        />
      </div>
    </div>
  );
};

export default Encryption;