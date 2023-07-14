import React, { useEffect, useState } from 'react'
import './Movies.css'
import getData from '../api.js'
import Loader from '../Loader/Loader'

const Movies = () => {
  const [moviesList, setMoviesList] = useState([])
  const [loading,setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    getData().then((res) => {
      setMoviesList(res)
      setLoading(false)
    })
    // console.log(movies)
  }, [])
  return (
    <>
   {loading ? <Loader/> :  <div className="moviesWrapper">
   {moviesList?.map((item, ind) => {
     return (
       <div className="movieCard" key={ind}>
         <div className="image">
           <img c src={item.i.imageUrl} alt={item.l} />
         </div>
         <p> {item.l}</p>
         <p> {item.q}</p>
         <p>Release Year : {item.y}</p>
       </div>
     )
   })}
 </div>}
   </>
  )
}

export default Movies
