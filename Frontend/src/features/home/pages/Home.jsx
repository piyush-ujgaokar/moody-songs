import React from 'react'
import Sidebar from '../components/Sidebar'
import MoodSection from '../components/MoodSection'
import SongsSection from '../components/SongsSection'
import Player from '../components/Player'
import './home.scss'

const Home = () => {
  return (
    <div className="page-root">
      <aside className="page-sidebar">
        <Sidebar />
      </aside>

      <main className="page-content">
        <div className="content-grid">
          <MoodSection />
          <SongsSection />
        </div>

        <Player />
      </main>
    </div>
  )
}

export default Home