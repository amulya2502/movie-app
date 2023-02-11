import React, { useEffect, useState } from "react";
import './Header.css';
import {Link, useParams} from 'react-router-dom'
import axios from "axios";
import MovieSearchCard from "../MovieSearchCard";
 let API_Key="2a2c7de3"


const Header = () => {

   
     const [search,setSearch] = useState();
     const [timeoutID,setUpdateTimeoutId] = useState();
     const [movieSearch,setMovieSearch] = useState([]);
   
    const fetchData =async(searchString)=>{
        const response=await axios
        .get(`https://www.omdbapi.com/?s=${searchString}&apikey=${API_Key}`);
         console.log(response)
        setMovieSearch(response.data.Search);
    }

    const onTextChange=(e)=>{
        clearTimeout(timeoutID);
        setSearch(e.target.value );
        // console.log(setSearch());
        const timeout  = setTimeout(()=> fetchData(e.target.value),500);
        setUpdateTimeoutId(timeout);
    }

    return(
        <>
        <div className="header">
            <div className="headerleft">
                <Link to ="/"><img className="header-icon" src="https://banner2.cleanpng.com/20190730/shy/kisspng-photographic-film-movie-camera-cinema-website-and-mobile-application-development-service-5d3fc924ce3b33.8538265315644613488447.jpg"></img></Link>
                <Link to ="/movies/popular" style={{textDecoration:'none'}}><span>Popular</span></Link>
                <Link to ="/movies/top_rated"style={{textDecoration:'none'}}><span>TopRated</span></Link>
                <Link to ="/movies/upcoming"style={{textDecoration:'none'}}><span>Upcoming</span></Link>
            </div>
   <div>
        <div className="search-btn">
            <input type="text" placeholder="Enter movie name" className="inputText" onChange={onTextChange} value={search}></input>
        <button><i className="fas fa-search"></i></button>
        </div>
    
   </div>

        </div>
       
            {movieSearch.map((searchmovie,index)=><MovieSearchCard key={index} searchmovie={searchmovie}/>)}
       
        </>
    )
}
export default Header