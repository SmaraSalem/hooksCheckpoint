import { useState } from "react"
import React from 'react'

function MovieAdd({ movies , setMovies }) {

  
    const [form, setForm] = useState({
        title : '',
        description : '',
        rating : '',
        posterURL : '',
    })

    //permet d'afficher {form} lors de chaque modification
    /* useEffect(() => {
        console.log(form);
    }, [form])
    */
    const addMovie = () => {
      
       //let arr = movies ;
            //let arr =[];
      // arr.push(form); 
      setMovies([form,...movies]);
      

       
    }
   

  return (
    <div>
    <h2>addMovie </h2>
    <form action="">
        <input type='text'  placeholder="title" name={'title'} required   onChange={ e => setForm({ ...form , title : e.target.value.trim() })} /> <br></br>
        <input  type='text' placeholder="description" name={'description'} required onChange={ e => setForm({ ...form , description : e.target.trim() })} /><br></br>
        <input type='text' placeholder="rating" name={'rating'} required onChange={ e => setForm({ ...form , rating : e.target.value.trim() })} /><br></br>
        <input type='text' placeholder="posterURL" name={'posterURL'} required onChange={ e => setForm({ ...form , posterURL : e.target.value.trim() })} /><br></br>
        <button type='button' onClick={addMovie} >Save</button>
        </form>
    </div>
  )
}

export default MovieAdd