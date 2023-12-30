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
        
        setMovieState(movie)

        console.log(movie)

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
