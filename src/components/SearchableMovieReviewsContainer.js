import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ''
    }
    handleSubmit = (e) => {
        e.preventDefault()
        fetch(URL)
            .then(resp => resp.json())
            .then(data => this.setState({ reviews: data.results }))
    }

    render(){
        return(
            <div className="searchable">
                <form onSubmit={this.handleSubmit}>
                    <input
                        name="search"
                        value={this.state.searchTerm}
                        onChange={e => this.setState({searchTerm: e.target.value})} 
                    />
                </form>
            <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }

}

export default SearchableMovieReviewsContainer
