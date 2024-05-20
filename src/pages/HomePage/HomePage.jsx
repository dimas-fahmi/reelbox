import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTMDBData from "../../hooks/useTMDBData";
import StarRating from "../../components/StarRating/StarRating";

const HomePage = () => {
  // Variable Initializations
  const [movieIndex, setMovieIndex] = useState(0);
  const [tvIndex, setTvIndex] = useState(0);
  const [cooldown, setCooldown] = useState(false);

  // Popular Movie Data
  const {
    data: popularMovieData,
    loading: popularMovieLoading,
    error: popularMovieError,
  } = useTMDBData("movie/popular");

  // Popular TV Data
  const {
    data: popularTvData,
    loading: popularTvLoading,
    error: popularTvError,
  } = useTMDBData("tv/popular");

  // Movie Index Handler
  const movieIndexHandler = () => {
    if (movieIndex == 19) {
      setMovieIndex(0);
      cooldownHandler();
    } else {
      setMovieIndex(movieIndex + 1);
      cooldownHandler();
    }
  };

  // TV Index Handler
  const tvIndexHandler = () => {
    if (tvIndex == 19) {
      setTvIndex(0);
      cooldownHandler();
    } else {
      cooldownHandler();
      setTvIndex(tvIndex + 1);
    }
  };

  // Cooldown Handler
  const cooldownHandler = () => {
    setCooldown(true);
    setTimeout(() => {
      setCooldown(false);
    }, 3000);
  };

  // Rendering
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
        <div className="absolute inset-0 flex items-center justify-center overlay">
          <div className="text-white">
            <img
              className="w-[280px]"
              src="https://www.themoviedb.org/assets/2/awards-preview/oscars-2024-title-f69161f90ed90871e9fe79439ea7e9280e03f3cb896b8d35d5d37b6711d00913.svg"
              alt="Oscar Logo"
            />
            <h4 className="mt-3 text-center poppins-regular">
              96th Academy Awards
            </h4>
            <Link className="block px-6 py-2 m-auto mt-4 transition-all border border-white w-fit rounded-2xl quicksand-regular hover:bg-white hover:text-black active:scale-95">
              READ
            </Link>
          </div>
        </div>
      </section>
      {popularMovieData?.results && popularMovieData.results ? (
        <section className="h-[100vh] bg-blue-300 overflow-hidden relative">
          <div className="backdrop h-[100%]">
            <img
              className="w-[100%] h-[100%] object-cover object-center brightness-50"
              src={`https://image.tmdb.org/t/p/original${popularMovieData.results[movieIndex]["backdrop_path"]}`}
              alt="backdrop"
            />
          </div>
          <div className="absolute inset-0 overlay">
            <div className="grid grid-cols-1 grid-rows-1 h-[100%] overflow-hidden">
              <div className="flex items-end flex-grow p-6 text-white info">
                <div className="p-2">
                  <h5 className="text-yellow-300 poppins-bold">
                    #{movieIndex + 1} Most Popular Movie Today
                  </h5>
                  <h2 className="text-3xl poppins-bold">
                    {popularMovieData.results[movieIndex]["title"]}
                  </h2>
                  <p className="quicksand-regular max-w-[480px] text-xs">
                    {popularMovieData.results[movieIndex]["overview"]}
                  </p>
                  <div className="mt-2 mb-3">
                    <StarRating
                      rating={
                        popularMovieData.results[movieIndex]["vote_average"]
                      }
                    />
                  </div>
                  <div className="flex">
                    <button className="px-4 py-2 text-black transition-colors bg-yellow-300 border border-yellow-300 cursor-pointer quicksand-regular rounded-xl hover:bg-transparent hover:text-yellow-300 me-3">
                      <i className="bi bi-play me-2"></i>PLAY
                    </button>
                    <button
                      className="px-4 py-2 transition-colors border border-white rounded-xl hover:bg-white hover:text-black quicksand-regular"
                      onClick={movieIndexHandler}
                    >
                      {cooldown ? (
                        <div className="flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 200 200"
                            className="w-[20px] me-2"
                          >
                            <radialGradient
                              id="a11"
                              cx=".66"
                              fx=".66"
                              cy=".3125"
                              fy=".3125"
                              gradientTransform="scale(1.5)"
                            >
                              <stop offset="0" stop-color="#FFFFFF"></stop>
                              <stop
                                offset=".3"
                                stop-color="#FFFFFF"
                                stop-opacity=".9"
                              ></stop>
                              <stop
                                offset=".6"
                                stop-color="#FFFFFF"
                                stop-opacity=".6"
                              ></stop>
                              <stop
                                offset=".8"
                                stop-color="#FFFFFF"
                                stop-opacity=".3"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="#FFFFFF"
                                stop-opacity="0"
                              ></stop>
                            </radialGradient>
                            <circle
                              transform-origin="center"
                              fill="none"
                              stroke="url(#a11)"
                              stroke-width="14"
                              stroke-linecap="round"
                              stroke-dasharray="200 1000"
                              stroke-dashoffset="0"
                              cx="100"
                              cy="100"
                              r="70"
                            >
                              <animateTransform
                                type="rotate"
                                attributeName="transform"
                                calcMode="spline"
                                dur="2"
                                values="360;0"
                                keyTimes="0;1"
                                keySplines="0 0 1 1"
                                repeatCount="indefinite"
                              ></animateTransform>
                            </circle>
                            <circle
                              transform-origin="center"
                              fill="none"
                              opacity=".2"
                              stroke="#FFFFFF"
                              stroke-width="14"
                              stroke-linecap="round"
                              cx="100"
                              cy="100"
                              r="70"
                            ></circle>
                          </svg>
                          <span>Loading</span>
                        </div>
                      ) : (
                        <>
                          <i className="bi bi-chevron-right me-2"></i>NEXT
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
      {popularTvData?.results && popularTvData.results ? (
        <section className="h-[100vh] bg-blue-300 overflow-hidden relative">
          <div className="backdrop h-[100%]">
            <img
              className="w-[100%] h-[100%] object-cover object-center brightness-50"
              src={`https://image.tmdb.org/t/p/original${popularTvData.results[tvIndex]["backdrop_path"]}`}
              alt="backdrop"
            />
          </div>
          <div className="absolute inset-0 overlay">
            <div className="grid grid-cols-1 grid-rows-1 h-[100%] overflow-hidden">
              <div className="flex items-end flex-grow p-6 text-white info">
                <div className="p-2">
                  <h5 className="text-yellow-300 poppins-bold">
                    #{tvIndex + 1} Most Popular Show Today
                  </h5>
                  <h2 className="text-3xl poppins-bold">
                    {popularTvData.results[tvIndex]["name"]}
                  </h2>
                  <p className="quicksand-regular max-w-[480px] text-xs">
                    {popularTvData.results[tvIndex]["overview"]}
                  </p>
                  <div className="mt-2 mb-3">
                    <StarRating
                      rating={popularTvData.results[tvIndex]["vote_average"]}
                    />
                  </div>
                  <div className="flex">
                    <button className="px-4 py-2 text-black transition-colors bg-yellow-300 border border-yellow-300 cursor-pointer quicksand-regular rounded-xl hover:bg-transparent hover:text-yellow-300 me-3">
                      <i className="bi bi-play me-2"></i>PLAY
                    </button>
                    <button
                      className="px-4 py-2 transition-colors border border-white rounded-xl hover:bg-white hover:text-black quicksand-regular"
                      onClick={tvIndexHandler}
                    >
                      {cooldown ? (
                        <div className="flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 200 200"
                            className="w-[20px] me-2"
                          >
                            <radialGradient
                              id="a11"
                              cx=".66"
                              fx=".66"
                              cy=".3125"
                              fy=".3125"
                              gradientTransform="scale(1.5)"
                            >
                              <stop offset="0" stop-color="#FFFFFF"></stop>
                              <stop
                                offset=".3"
                                stop-color="#FFFFFF"
                                stop-opacity=".9"
                              ></stop>
                              <stop
                                offset=".6"
                                stop-color="#FFFFFF"
                                stop-opacity=".6"
                              ></stop>
                              <stop
                                offset=".8"
                                stop-color="#FFFFFF"
                                stop-opacity=".3"
                              ></stop>
                              <stop
                                offset="1"
                                stop-color="#FFFFFF"
                                stop-opacity="0"
                              ></stop>
                            </radialGradient>
                            <circle
                              transform-origin="center"
                              fill="none"
                              stroke="url(#a11)"
                              stroke-width="14"
                              stroke-linecap="round"
                              stroke-dasharray="200 1000"
                              stroke-dashoffset="0"
                              cx="100"
                              cy="100"
                              r="70"
                            >
                              <animateTransform
                                type="rotate"
                                attributeName="transform"
                                calcMode="spline"
                                dur="2"
                                values="360;0"
                                keyTimes="0;1"
                                keySplines="0 0 1 1"
                                repeatCount="indefinite"
                              ></animateTransform>
                            </circle>
                            <circle
                              transform-origin="center"
                              fill="none"
                              opacity=".2"
                              stroke="#FFFFFF"
                              stroke-width="14"
                              stroke-linecap="round"
                              cx="100"
                              cy="100"
                              r="70"
                            ></circle>
                          </svg>
                          <span>Loading</span>
                        </div>
                      ) : (
                        <>
                          <i className="bi bi-chevron-right me-2"></i>NEXT
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default HomePage;
