import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <section className="relative h-[100vh] overflow-hidden">
        <div className="backdropn h-[100%] w-[100%] ">
          <img
            className="w-[100%] h-[100%] object-cover brightness-50"
            src="https://image.tmdb.org/t/p/original/3jAmIiF931QuBAZ93OOgjaucNa7.jpg"
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
            <h4 className="mt-3 text-center quicksand-regular">
              96th Academy Awards
            </h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
