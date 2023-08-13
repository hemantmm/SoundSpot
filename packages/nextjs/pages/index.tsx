import Link from "next/link";
import type { NextPage } from "next";
import { BugAntIcon, MagnifyingGlassIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10 bgImage">

        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-2xl">SoundSpot</h1>
          <span>Unlock the true value of music with SoundSpot NFTs</span>
        </div>

        <div className="tagline">
          "Own a piece of music history with our exclusive NFTs. <br />
          Elevate your music collection with our exclusive NFTs, showcasing the beauty and creativity of your favorite
          artists."
        </div>

        <div className="tagline1">
          "Own your favorite music like never before. <br />
          Experience music ownership in a new light. <br />
          Your music, your way, with SoundSpot NFTs"
        </div>


      </div>
    </>
  );
};

export default Home;
