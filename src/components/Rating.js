import React from 'react'
import {Rate} from 'antd';
import '../App.css';

const desc=['terrible','bad','normal','good','wonderful']
const Rating = ({MovieRating,rating,isMovieRating,setRating}) => {
    const handlechange=value=>{
        setRating(value);
    }
  return (
    isMovieRating?
    <span className='rating.Content'>
        <Rate disabled value={MovieRating}/>
    </span>
    :
    <span className='ratingContent'>
    <Rate tooltips={desc} onChange={handlechange} value={rating}>
    </Rate>
    </span>
  )
}

export default Rating
