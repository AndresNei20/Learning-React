import React, { useState } from "react";

const Add = () => {

    const titleComponent = "Add Mmovie"
    const [movieState, setMovieState] = useState({
        title: "",
        description:""
    })

    const {title, description} = movieState

    const getFormData = e => {
        e.preventDefault()

        let target = e.target;
        let title = target.title.value
        let description = target.description.value

        let movie = {
            id:new Date().getTime(),
            title,
            description
        }
        
        //save state
        setMovieState(movie)
        console.log(movie)

        //save in local storage
        saveInStorage(movie)
        
    }
    
    const saveInStorage = movie => {

        //get localStorage items
        let elements = JSON.parse(localStorage.getItem("movies"));
        console.log(elements)

        //prove if there is an array
        if(Array.isArray(elements)){
            //we´re gonna add a new elements (movie)
            elements.push(movie)
        }else{
            //if thi is not an array or isn´t an array, we´re gonna create it
            elements = [movie]
        }

        //save in localStorae
        localStorage.setItem('movies', JSON.stringify(elements));//we use JSON.stringfy cause we need to "translate" those movies, if we don´t translate it, the storage gonna show it like [objectt,object]

        //return object saved
        return movie
    }
    
    
  return (
    <div className="add">
      <h3 className="title">{titleComponent}</h3>

    <strong>
     {(title && description) && "You created the movie: " + title}
    </strong>

      <form onSubmit={getFormData}>
        <input type="text" placeholder="Title" id="title" name="title"/>
        <textarea id="description" name="description" placeholder="Description"></textarea>
        <input id="save" value="Save" type="submit" />
      </form>
    </div>
  );
};

export default Add;
