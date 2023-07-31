import React from 'react'
import './Movie.css'

const Movie = ({image, name, genre}) => {
  return (
    <div className='movie'>
        <img src={image} alt={"movie"}></img>
        <p className='movieName'>{name}</p>
        <p>{genre}</p>
    </div>
  )
}

export default Movie