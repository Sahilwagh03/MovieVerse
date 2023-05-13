import React, { useEffect, useState } from 'react'
import './CharacterGallery.css'
import { useParams } from 'react-router-dom'
export const CharacterGallery = () => {

    const { mal_id } = useParams();
    const [Pictures, setPictures] = useState([])
    const [index ,setIndex]=useState(0)

    function handleImgClick(i){
        setIndex(i)
    }

    const getPictures = (mal_id) => {
        fetch(`https://api.jikan.moe/v4/characters/${mal_id}/pictures`)
            .then(res => res.json())
            .then(result => {
                setPictures(result.data)
                console.log(result.data)
            })
    }

    useEffect(() => {
        getPictures(mal_id)
    }, [])
    return (
        <>
            <div className="large_image">
                <img src={Pictures[index]?.jpg.image_url} alt="" />
            </div>
            <div className="small_images">
            {
                Pictures.map((picture, i) =>
                <div className="small_img" onClick={()=>handleImgClick(i)}>
                        <img src={picture.jpg.image_url} alt="" key={i} />
                    </div>
                )
            }
            </div>
        </>
    )
}
