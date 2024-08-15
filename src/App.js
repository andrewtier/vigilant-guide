import {useEffect} from "react";

import './App.css';
import SearchICON from './search.svg';
import MovieCard from "./MovieCard";

const API_URL = 'http://www.omdbapi.com?apikey=4d189f6e';

const movie1 = 
    {
        "Title": "Cars 2",
        "Year": "2011",
        "imdbID": "tt1216475",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTUzNTc3MTU3M15BMl5BanBnXkFtZTcwMzIxNTc3NA@@._V1_SX300.jpg"
    }

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data);
    }
    useEffect(() => {
        searchMovies('Cars 2');
    }, [])
    return(
        <div className="app">
             <h1>MovieLand</h1>

             <div className="search">
                <input 
                    placeholder="Search for movies"
                    value="Superman"
                    onChange={() => {}}
                />
                <img 
                    src={SearchICON}
                    alt="search"
                    onClick={() => {}}
                />
             </div>
             <div className="container">
                <MovieCard movie1={movie1} />
             </div>
        </div>
    );
}

export default App;