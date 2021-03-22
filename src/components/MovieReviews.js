import React from 'react'


const MovieReviews = (props) => {
       const mapRevs = props.reviews.map( (review, index) => {
           return <div key={review.display_title + index} className="review"> {review.headline} </div>
        })


return(
    <div className="review-list">
    {mapRevs}
    </div>
)

}



export default MovieReviews


//Your MovieReviews component should be stateless and functional.

//You are free to lay out each review as you like using the data that the API returns, 
    //but make sure that the component outputs a top-level element with the class 
    //review-list and that each review is wrapped by an element with class review.

