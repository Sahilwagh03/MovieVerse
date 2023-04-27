import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'


export const Header = () => {
  return (
    <div className="header">
        <div className="headerLeft">
            <Link to='/'><img className='header__icon' src="https://blogger.googleusercontent.com/img/a/AVvXsEi1ADDxYXjmNuDBrfs1JMo95osx_iSX6AC48_lJ_T2UFDzfuRjeDf4w1DA4QoxFg4caZwHEwu75zE-ntbzfAy8cBJwCYZ4QIYTlU-_Syj0GIUJD1TNpfh3Teg8d5rAN4RrsKN7DtKD-trqmLmD26ryvLDRkDsnPObxsu770MzY6TlzvW4lsLQ_zl-yd=s1600" style={{width:'max-content'}} height={40} alt="" /></Link>
            <Link to="/movies/popular" className='text-style'><span>Popular</span></Link>
            <Link to="/movies/top_rated" className='text-style'><span>Top Rated</span></Link>
            <Link to="/movies/upcoming" className='text-style'><span>Upcoming</span></Link>
            <Link to="/animes/bypopularity" className='text-style'><span>Popular Animes</span></Link>
            <Link to="/animes/airing" className='text-style'><span>Airing Animes</span></Link>
            <Link to="/animes/upcoming" className='text-style'><span>Upcoming Animes</span></Link>
        </div> 
    </div>
  )
}
