import React from "react";
import { Play, Info } from "lucide-react";

const HeroBanner = () => {
  return (
    <section className="relative h-[75vh] w-full overflow-hidden">

   
      <img
        src="https://image.tmdb.org/t/p/original/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg"
        alt="Movie background"
        className="absolute inset-0 h-full w-full object-cover"
      />

     
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent" />

      <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-black to-transparent" />

    
      <div className="relative z-10 flex h-full items-center px-10 md:px-16">

        <div className="max-w-xl">

          <p className="mb-3 text-sm font-semibold text-gray-300">
            #1 in Movies Today
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white">
            DEADPOOL
          </h1>

          <div className="mt-4 flex items-center gap-4 text-sm text-gray-300">
            <span>2024</span>
            <span>•</span>
            <span>2h 8m</span>
            <span>•</span>
            <span>18+</span>
          </div>

          <p className="mt-5 text-base leading-7 text-gray-300">
            A wisecracking mercenary joins forces with an unlikely ally
            for a chaotic mission that changes everything.
          </p>

          <div className="mt-7 flex gap-4">

            <button className="flex items-center gap-2 rounded-md bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-300">
              <Play size={20} fill="black" />
              Play
            </button>

            <button className="flex items-center gap-2 rounded-md bg-gray-600/80 px-6 py-3 font-semibold text-white transition hover:bg-gray-600">
              <Info size={20} />
              More Info
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default HeroBanner;