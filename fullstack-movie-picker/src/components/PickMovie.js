import React, {useState, useEffect} from 'react'
import Movie from './Movie';
import {data} from '../data/data'
import './PickMovie.css'

const PickMovie = () => {
    const [randomMovie, setRandomMovie] = useState({});
    const [picked, setPicked] = useState(false)
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/movies')
        .then(response => response.json())
        .then(json => setData(json))
    }, [])

    const  moviePicker = () => {
        const random = data[Math.floor(Math.random() * data.length)];
        console.log(randomMovie)
        setRandomMovie(random);
        setPicked(true);
    }

    const pickAgain = () => {
        setPicked(false)
    }
    return (

        <div>
            <h1>Pick Movie</h1>
            {picked && 
            <div className ="picked">
                <div></div>
                <Movie name={randomMovie.name} image={randomMovie.img} genre={randomMovie.genre}/>
                <button className="pickButton" onClick={pickAgain} >Pick Again</button>
            </div>}
            {!picked && <button onClick={moviePicker}>Pick a Movie</button>}
            
            
        </div>
    )
}

export default PickMovie
