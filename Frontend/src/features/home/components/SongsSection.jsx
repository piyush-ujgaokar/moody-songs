import React from 'react'
import useSong from '../hooks/useSong'
import './songs-section.scss'

const SongsSection = ()=>{
  const { playlist, selectSong, loading } = useSong()

  return (
    <section className="songs-section card">
      <h2 className="songs-section__title">Recommended Songs</h2>

      <div className="songs-section__body">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (!playlist || playlist.length === 0) ? (
          <div className="empty">No suggestions yet — click "Detect Mood"</div>
        ) : (
          <ul className="songs-list">
            {playlist.map(s => (
              <li key={s.id} className="song-item" onClick={()=>selectSong(s)}>
                <img src={s.posterUrl} alt={s.title} className="song-thumb" />
                <div className="song-meta">
                  <div className="song-title">{s.title}</div>
                  <div className="song-artist">{s.artist}</div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default SongsSection
