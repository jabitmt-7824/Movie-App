import React from 'react';
import {addFavourite, removeFavourite} from '../actions/index';

class MovieCard extends React.Component {
    handleFavourite = () =>{
        const { movie } = this.props;
        this.props.dispatch(addFavourite(movie));
    }

    handleUnFavourite = () =>{
        const { movie } = this.props;
        this.props.dispatch(removeFavourite(movie));
    }
    render() {
        const { movie, isFavourite } = this.props;
        return (
            <div className="movie-card">

                <div className="left">
                    <img alt="movie-poster" src={movie.Poster} />
                </div>

                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>

                    <div className="footer">
                        <div className="rating">{movie.imdbRating}</div>
                        {
                            isFavourite ?
                            <button className="unfavourite-btn" onClick={this.handleUnFavourite}>Unfavourite</button>
                            : <button className="favourite-btn" onClick={this.handleFavourite}>Favourite</button>
                        }
                    </div>
                </div>

            </div>
        );
    }
}

export default MovieCard;