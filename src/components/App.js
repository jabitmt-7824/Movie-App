import React from 'react';
import { data } from '../data';
import {connect} from 'react-redux';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies, showFavourite } from '../actions/index';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(addMovies(data));
  }

  isFavourite = (movie) => {
    const { movies} = this.props;
    const { favourite } = movies;
    let index = favourite.indexOf(movie);
    if (index !== -1) {
      return true;
    }
    return false;
  }

  onchangetab = (val) => {
    this.props.dispatch(showFavourite(val));
  }

  render() {
    const { movies, search } = this.props;
    let { list, favourite, showFavourite } = movies;
    let displayMovies = showFavourite ? favourite : list;

    return (
      <div className="App">
        <Navbar search={search} />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourite ? "" : "active-tabs"}`} onClick={() => this.onchangetab(false)}>Movies</div>
            <div className={`tab ${showFavourite ? "active-tabs" : ""}`} onClick={() => this.onchangetab(true)}>Favourite</div>
          </div>

          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard movie={movie} key={`movies-${index}`} dispatch={this.props.dispatch} isFavourite={this.isFavourite(movie)} />
            ))}
          </div>
          {displayMovies.length === 0 ? <div>{`No ${showFavourite ? "Favorite" : ""} Movies To Show`}</div> : null}
        </div>
      </div>
    );
  }
}

// class AppWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => <App store={store} />}
//       </StoreContext.Consumer>
//     );
//   }
// }

function callback(state){
  return {
    movies: state.movies,
    search: state.search
  }
}

const connectedAppComponent = connect(callback)(App);

export default connectedAppComponent;
