import React from 'react'
import './style.scss';
import Trending from './trending/Trending';
import Popular from './popular/Popular';
import TopRated from './toprated/TopRated';


const Home = () => {
  return (
    <div className="homepage">
      <Trending />
      <Popular />
      <TopRated />
      {/* <div style={{height:1000}}></div> */}
    </div>
  )
}

export default Home