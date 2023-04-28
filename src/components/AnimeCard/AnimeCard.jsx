import React , { useState ,useEffect} from 'react'
import './AnimeCard.css'
import { Link } from 'react-router-dom'
import Skeleton , {SkeletonTheme} from 'react-loading-skeleton'

export const AnimeCard = ({anime}) => {


    const [isloading  , setIsLoading]=useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        },1500)
    },[])


  return (
    <>
    {
        isloading
        ?
        <div className="cards">
            <SkeletonTheme color='#202020' highlightColor='#444'>
                <Skeleton height={300} duration={2} />
            </SkeletonTheme>
        </div>
        :
        <Link to={`/anime/${anime.mal_id}`} style={{textDecoration:'none' ,color:'white'}}>
        <div className="cards" >
            <img className='cards__img2' src={`${anime ? anime.images.jpg.image_url : ''}`}/>
            <div className="cards__overlay">
                <div className="card__title">{anime?anime.title_english:''}</div>
                <div className="card__runtime">
                    {anime?anime.duration:''}
                    <span className='card__rating'>{anime?anime.score:''}<i className='fas fa-star'></i></span>
                </div>
                <div className="card__description">{anime.background ?anime.background.slice(0,118)+"...":''}</div>
            </div>
        </div>
    </Link>
        

    }
    </>
  )
}
