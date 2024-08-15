import {useEffect} from "react";

import './App.css';
import SearchICON from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=4d189f6e';

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
        <h1>App</h1>
    );
}

export default App;