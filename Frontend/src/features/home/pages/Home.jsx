import React from 'react'
import FaceExpression from '../../expression/components/FaceExpression'
import Player from '../components/Player'
import useSong from '../hooks/useSong'
import Playlist from '../components/Playlist'
import './home.scss'

const Home = () => {

    const {handleGetSongs}=useSong()

  return (
    <div className="home-layout">
      <main className="home-main">
        <FaceExpression onclick={(expression)=>{handleGetSongs({mood:expression})}}/>
        <Player/>
      </main>
      <aside className="home-side">
        <Playlist />
      </aside>
    </div>
  )
}

export default Home