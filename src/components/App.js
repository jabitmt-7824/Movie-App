import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {addMovies, showFavourite} from '../actions/index';

class App extends React.Component {
  componentDidMount(){
    const {store} = this.props;

    store.subscribe(()=>{
      this.forceUpdate();
    });

    store.dispatch(addMovies(data));

    console.log("store", store.getState());
  }

  isFavourite = (movie) =>{
    const {favourite} = this.props.store.getState();
    let index = favourite.indexOf(movie);
    if(index!==-1){
      return true
    }
    return false;
  }

  onchangetab = (val) =>{
    this.props.store.dispatch(showFavourite(val));
  }

  render() {
    let {list, favourite, showFavourite} = this.props.store.getState();
    let displayMovies = showFavourite? favourite: list;
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourite? "": "active-tabs"}`} onClick={()=> this.onchangetab(false)}>Movies</div>
            <div className={`tab ${showFavourite? "active-tabs": ""}`} onClick={()=> this.onchangetab(true)}>Favourite</div>
          </div>

          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard movie={movie} key={`movies-${index}`} dispatch={this.props.store.dispatch} isFavourite={this.isFavourite(movie)}/>
            ))}
          </div>
          {displayMovies.length ===0 ? <div>{`No ${showFavourite?"Favorite":""} Movies To Show`}</div> : null}
        </div>
      </div>
    );
  }
}

export default App;
