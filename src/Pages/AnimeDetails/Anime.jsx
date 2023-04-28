import React from 'react'
import { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Anime.css'
export const Anime = () => {

    const {id} = useParams()
    const [AnimeData , setAnimeData]=useState({})
    const [Characters , setCharacters]=useState([])
    const [showMore , setShowMore]=useState(false)
    
  const getAnime = (id)=>{
    fetch(`https://api.jikan.moe/v4/anime/${id}`)
    .then(res => res.json())
    .then(result => {setAnimeData(result.data)
    console.log(result.data)})
  }

  const getCharacters = ()=>{
    fetch(`https://api.jikan.moe/v4/anime/${id}`)
    .then(res => res.json())
    .then(result => setAnimeData(result.data))
  }

    useEffect(()=>{
       getAnime(id)
    },[])


    const {
        title,synopsis,
        trailer,duration , aired ,season ,images , rank
        ,score,scored_by,popularity,status,rating , source
    }=AnimeData

  return (
    <>
          <h1>{title}</h1>
            <div className="details">
                <div className="detail">
                    <div className="image">
                        <img src={images?.jpg.large_image_url} alt="" />
                    </div>
                    <div className="anime-details">
                        <p><span>Aired:</span><span>{aired?.string}</span></p>
                        <p><span>Rating:</span><span>{rating}</span></p>
                        <p><span>Rank:</span><span>{rank}</span></p>
                        <p><span>Score:</span><span>{score}</span></p>
                        <p><span>Scored By:</span><span>{scored_by}</span></p>
                        <p><span>Popularity:</span><span>{popularity}</span></p>
                        <p><span>Status:</span><span>{status}</span></p>
                        <p><span>Source:</span><span>{source}</span></p>
                        <p><span>Season:</span><span>{season}</span></p>
                        <p><span>Duration:</span><span>{duration}</span></p>
                    </div>
                </div>
                <p className="description">
                    {showMore ? synopsis : synopsis?.substring(0, 450) + '...'}
                    <button onClick={() => {
                        setShowMore(!showMore)
                    }}>{showMore ? 'Show Less': 'Read More'}</button>
                </p>
            </div>
    </>
  )
}


