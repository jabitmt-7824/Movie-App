import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard'

class App extends React.Component {
  componentDidMount(){
    const {store} = this.props;

    store.subscribe(()=>{
      this.forceUpdate();
    });

    store.dispatch({
      type: "ADD_MOVIES",
      movies: data
    });
  }
  render() {
    let movies = this.props.store.getState();
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourite</div>
          </div>

          <div className="list">
            {movies.map((movie, index) => (
              <MovieCard movie={movie} key={`movies-${index}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
