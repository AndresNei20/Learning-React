import React from "react";

const Add = () => {
  return (
    <div className="add">
      <h3 className="title">Add movie</h3>
      <form action="">
        <input type="text" aria-placeholder="Title" />
        <textarea placeholder="Description"></textarea>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Add;
