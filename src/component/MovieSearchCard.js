import React, {useEffect, useState} from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "./MovieSearchCard.css"
import { Link } from "react-router-dom"


const Card = ({searchmovie}) => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, []) 

    return <>
    {
        isLoading
        ?
        <div className="card">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2} />
            </SkeletonTheme>
        </div>
        :
       
            <div className="card">
                <img className="card__img" src={searchmovie.Poster} />
                <div className="card__overlay">
                    <div className="card__title">{searchmovie.Title}</div>
                    <div className="card__runtime">
                        {searchmovie.Year}
                        <span className="card__rating">{searchmovie.Type}<i className="fas fa-star" /></span>
                    </div>

                </div>
            </div>
            
    }
    </>
}

export default Card