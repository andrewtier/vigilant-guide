import {useEffect} from "react";

import './App.css';
import SearchICON from './search.svg';

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
                <div className="movie">
                    <div>
                        <p>{movie1.Year}</p>
                    </div>
                    <div>
                        <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title}/>
                    </div>
                    <div>
                        <span>
                            {movie1.Type}
                        </span>
                        <h3>{movie1.Title}</h3>
                    </div>
                </div>

             </div>
        </div>
    );
}

export default App;