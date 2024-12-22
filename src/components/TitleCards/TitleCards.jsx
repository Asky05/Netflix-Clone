import React, { useEffect, useRef, useState, } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'

const TitleCards = ({title, category}) => {

  const[apiData, setApiData]=useState([]);
  const cardsRef= useRef();
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMGExNWY2YWYzM2RiYTA2NjAyNjcwZmU0OGMxMzk3YyIsIm5iZiI6MTczNDcxMTU0NC45MSwic3ViIjoiNjc2NTk4Zjg4ZjEwYzI3NDZiOTBkNzFlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.AsAxSzFO7xLZdacE1MfSL1W-IpHEveDB_ZNy3rvmYOE'
    },
    
  };
  



const handleWheel=(event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}

useEffect(()=>{

  fetch('/3/movie/now_playing?language=en-US&page=1', options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel',handleWheel) 
},[options])

  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card,index)=>{
            return <div className='card' key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+ card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </div>

        })}
      </div>
    </div>
  )
}

export default TitleCards