import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Anime.css'
export const Anime = () => {

  const { id } = useParams()
  const [AnimeData, setAnimeData] = useState({})
  const [Characters, setCharacters] = useState([])
  const [showMore, setShowMore] = useState(false)
  const [LoadMore, setLoadMore] = useState(false)

  const getAnime = (id) => {
    fetch(`https://api.jikan.moe/v4/anime/${id}`)
      .then(res => res.json())
      .then(result => {
        setAnimeData(result.data)
      })
  }

  const getCharacters = () => {
    fetch(`https://api.jikan.moe/v4/anime/${id}/characters`)
      .then(res => res.json())
      .then(result =>{
        setCharacters(result.data)
      }) 
  }

  useEffect(() => {
    getAnime(id)
    getCharacters(id)
  }, [])


  const {
    title, synopsis,
    trailer, duration, aired, season, images, rank
    , score, scored_by, popularity, status, rating, source
  } = AnimeData

  return (
    <>
      <div>
        <h1>{title}</h1>
        <div className="details">
          <div className="detail">
            <div className="image">
              <img className='Anime-poster-img' src={images?.jpg.large_image_url} alt="" />
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
          <p className="description anime_description">
            {showMore ? synopsis : synopsis?.substring(0, 450) + '...'}
            <button className='readMore' onClick={() => {
              setShowMore(!showMore)
            }}>{showMore ? 'Show Less' : 'Read More'}</button>
          </p>
        </div>
        <h3 className='title-trailer'>Trailer</h3>
        <div className="tralier-con">
          {
            trailer?.embed_url &&
            <iframe
              src={trailer?.embed_url}
              title='Inline Frame Example'
              width={800}
              height={450}
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen>
            </iframe>
          }
        </div>
        {
          Characters.length<=0 ? 
          ""
          :
          <h3 className='title-characters'>Characters</h3>
        }
        {Characters.length<=0 ? "":
        <div className="characters">
          {LoadMore ? (
            Characters?.map((character, index) => {
              const { role } = character
              const { images, name, mal_id } = character.character
              return <Link className='links' to={`/character/${mal_id}`} key={index}>
                <div className="character">
                  <img className='character-image' src={images?.jpg.image_url} alt="" width={225} height={350} />
                  <h4>{name}</h4>
                  <p>{role}</p>
                </div>
              </Link>
            })
          )
            :
            (
              Characters?.slice(0, 7).map((character, index) => {
                const { role } = character
                const { images, name, mal_id } = character.character
                return <Link className='links' to={`/character/${mal_id}`} key={index}>
                  <div className="character">
                    <img className='character-image' src={images?.jpg.image_url} alt="" width={225} height={350} />
                    <h4>{name}</h4>
                    <p>{role}</p>
                  </div>
                </Link>
              })
            )
          }
          <div className="LoadMore">
            <button className='LoadMore-btn' onClick={() => setLoadMore(!LoadMore)}>{Characters.length <= 0 ?"":(LoadMore  ? "Load Less" : "Load More")}</button>
          </div>
        </div>
      }
      </div>
    </>
  )
}


