import React, { useContext, useEffect, useState } from 'react'

const AppContext = React.createContext()

export const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppProvider = ({children}) => {
  
  const [movieName, setMovieName] = useState([]);
  const [isLoading, setisLoading] = useState("true");
  const [isError, setIsError] = useState({show:"false", msg:""});
  const [query, setQuery] = useState("Hindustan");

  const getMovie = async(url) => {

    setisLoading("true");

    try{
      const res = await fetch(url);

      const data = await res.json();

      if( data.Response === "True" ){

        setisLoading("false");

        setIsError({show:"false", msg:""});

        setMovieName(data.Search || data);

      } 

      else{
        setIsError({show:"true", msg: data.Error})
      }

    }
    catch(error){
      console.log(error)
    }
    

  }

  useEffect(() => {
    let timerOut = setTimeout(()=>{

      getMovie(`${API_URL}&s=${query}`)

    }, 800)
    
    return () => clearTimeout(timerOut)
    
  }, [query]);

  return (
    <AppContext.Provider value={{isLoading, isError, query, setQuery, movieName}}>{children}</AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext};

