import React from "react";
import "./App.css";
import Movie from "./components/Movie";
import Title from "./components/Title";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: null,
    };
  }
  componentDidMount() {
    this.getMovieData();
  }
  getMovieData = () => {
    fetch("http://www.omdbapi.com/?apikey=f7ea12fa&t=The+notebook")
      .then((response) => response.json())
      .then((result) =>
        this.setState(
          {
            selectedMovie: result,
          },
          () => console.log("setState Completed", this.state.selectedMovie)
        )
      );
  };
  render() {
    const { selectedMovie } = this.state;
    if (!selectedMovie) {
      return <div>Hold tight while movie are being fetched...</div>;
    } else {
      return (
        <div className="App">
          <Title />
          <Movie
            title={this.state.selectedMovie.Title}
            rating={this.state.selectedMovie.imdbRating}
            release_year={this.state.selectedMovie.Year}
          />
          <h1>
            {this.state.selectedMovie.Title} <br />
            {this.state.selectedMovie.imdbRating}
            <br />
            {this.state.selectedMovie.Year}
          </h1>
        </div>
      );
    }
  }
}
export default App;
