import React, {useState} from 'react'



function MovieSearch  ({ movies , setMovies }){


    const [motcle, setMotcle] = useState("")



   const  search= (e)=>{
    setMotcle(e.target.value);
    console.log(motcle);
    let arr = movies.filter(el=>( (el.title).toUpperCase()).includes(motcle.toUpperCase()));
    setMovies(arr);
    }




  return (
    <div>
        <h2>SearchMovie </h2>
        <input type='text' placeholder='movie title' onChange={search}/>
    </div>
  )
}

export default MovieSearch