import React from 'react'
import {data} from '../data/data'
import Movie from './Movie'

const Catalog = () => {
  return (
    <div>
        <h1>Movies</h1>
        <div>
            {data.map((movie) => (
                <Movie name={movie.name} genre={movie.genre} image={movie.img}/>
            ))}
        </div>
    </div>
  )
}

export default Catalog