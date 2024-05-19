import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <section className="relative h-[100vh] overflow-hidden">
        <div className="backdropn h-[100%] w-[100%] ">
          <img
            className="w-[100%] h-[100%] object-cover brightness-50"
            src="https://image.tmdb.org/t/p/original/xulYrS6nrgSLuXLOlvtdeKWiuL1.jpg"
            alt="overlay"
          />
        </div>
        <div className="overlay absolute inset-0 flex items-center justify-center">
          <div className="text-white">
            <img
              className="w-[280px]"
              src="https://www.themoviedb.org/assets/2/awards-preview/oscars-2024-title-f69161f90ed90871e9fe79439ea7e9280e03f3cb896b8d35d5d37b6711d00913.svg"
              alt="Oscar Logo"
            />
            <h4 className="mt-3 text-center poppins-regular">
              96th Academy Awards
            </h4>
            <Link className="block m-auto w-fit mt-4 border border-white px-6 py-2 rounded-2xl quicksand-regular hover:bg-white hover:text-black active:scale-95 transition-all">
              READ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
