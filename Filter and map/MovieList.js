import React from 'react'



function MovieList({filteredMovies}) {



  return (
    <div>
        <h2>Movies</h2>
        <ul>
            {
                filteredMovies.map((movix,index)=>(
                    <li key={index}>
                        <h3>{movix.title}</h3>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default MovieList