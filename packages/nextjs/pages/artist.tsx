import React from "react"; 
import { useEffect, useState, useRef } from "react";
import type { NextPage } from "next";
import { useLocalStorage } from "usehooks-ts";
import { MetaHeader } from "~~/components/MetaHeader";
import { ContractUI } from "~~/components/scaffold-eth";
import { ContractName } from "~~/utils/scaffold-eth/contract";
import { getContractNames } from "~~/utils/scaffold-eth/contractNames";




const ExampleUI: NextPage = () => {  

  const songs = [
    { title: 'Arijith Singh', views:'3,33,21,213', image:'https://m.economictimes.com/thumb/msid-100076153,width-1200,height-900,resizemode-4,imgsize-47012/arijit-singh-2.jpg' },
    { title: 'Armaan Malik', views:'1,33,21,213', image:'https://i.ytimg.com/vi/4_UdEBlsD9w/maxresdefault.jpg' },
    { title: 'Atif Aslam', views:'23,21,213', image:'https://images.indulgexpress.com/uploads/user/imagelibrary/2020/6/25/original/AtifAslamPhotoInternetArchives.jpg' },
  ];

  return (
    <>
      <div className="text-center mt-8 bg-grey-500 bg-blue-500 p-10">
      <div className="flex flex-wrap gap-4 my-8 px-5 justify-center">
        {songs.map((song, index) => (
          <div
            key={index}
            className="w-1/4 p-4 bg-blue-300 rounded-lg shadow-md m-4"
          >
            <img
              src={song.image}
              alt={song.title}
              className="mx-auto mb-4"
            />
            <div className="flex justify-center mt-2">
              <button
                className="mx-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
              >
                {song.title}
              </button>
              
             
            </div>
            <br />
            <button className="mx-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
              >
                Monthly Views : {song.views}
              </button>
          </div>
        ))}
      </div>

<button className="btn text-2xl relative float-left" title="Add artist">+</button>
      </div>
    </>
  );
};


export default ExampleUI;

