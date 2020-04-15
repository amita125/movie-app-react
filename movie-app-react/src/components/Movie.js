import React from "react";
function Movie(props) {
  return (
    <div className="App-body">
      Movie Title :{props.title}
      <br />
      Movie Rating : {props.rating}
      <br />
      Year of Release :{props.release_year}
    </div>
  );
}
export default Movie;
