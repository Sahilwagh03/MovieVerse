import React from 'react'
import './AnimeList.css'
import { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AnimeCard } from '../AnimeCard/AnimeCard';
export const AnimeList = () => {

    const {type} = useParams()

    const [AnimeLists , setAnimeLists]=useState([]);
    
    // useEffect(()=>{
    //     fetch(``)
    //     .then(res => res.json())
    //     .then(result => setAnimeLists(result.data))
    // },[])

    useEffect(()=>{
        getData()
    },[])

    useEffect(()=>{
        getData()
    },[type])

    const getData=()=>{
        fetch(`https://api.jikan.moe/v4/top/anime?filter=${type}`)
        .then(res => res.json())
        .then(result => setAnimeLists(result.data))
    }


  return (
    <>
     <div className="anime__list">
        <h2 className="list__title">{(type ? type : 'bypopularity').toUpperCase()}</h2>
        <div className="list__cards">
            {
                AnimeLists.map(anime=>(
                    <AnimeCard anime={anime} key={AnimeLists.indexOf(anime)}/>
                ))
            }
        </div>
    </div>
    </>
  )
}
