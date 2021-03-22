import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'g5bxi2kFFuUAFPnTGn5PVElXQHoACVeU';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {

    state = {
        reviews: []
    }

    componentDidMount(){
        fetch(URL)
            .then(resp => resp.json())
            .then(data => this.setState({ reviews: data.results }))
    }

    render(){
        return(
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }


}

export default LatestMovieReviewsContainer

//<LatestMovieReviewsContainer> and <SearchableMovieReviewsContainer>

//The LatestMovieReviewsContainer should have a 
//top-level wrapping element with class latest-movie-reviews.

//Optional: The SearchableMovieReviewsContainer should have a 
//top-level wrapping element with class searchable-movie-reviews