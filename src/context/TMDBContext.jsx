import React, { createContext, useContext, useCallback } from "react";

const TMDBContext = createContext();

const TMDBProvider = ({ children }) => {
  const authToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTEzZTJkOTVkYTE2ODk3MzU0ZjY0NjYzYmZiZDM1NSIsInN1YiI6IjY0ZDExZGIyZDlmNGE2MDNiNGExMjQ5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-kTGGdFEV2NVNlEo0yY-o-KXgH1cObu2wj97U2L7bTg";

  const fetchTMDBData = useCallback(
    async (endpoint) => {
      const response = await fetch(
        `https://api.themoviedb.org/3/${endpoint}?api_key=e113e2d95da16897354f64663bfbd355`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    },
    [authToken]
  );

  return (
    <TMDBContext.Provider value={{ fetchTMDBData }}>
      {children}
    </TMDBContext.Provider>
  );
};

const useTMDB = () => {
  const context = useContext(TMDBContext);
  if (!context) {
    throw new Error("useTMDB must be used within a TMDBProvider");
  }
  return context;
};

export { TMDBProvider, useTMDB };
