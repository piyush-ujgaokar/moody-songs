import React from 'react'
import useSong from '../hooks/useSong'
import { useContext } from 'react'
import { SongContext } from '../song.context'
import './playlist.scss'

const Playlist = ()=>{
  const { playlist, selectSong } = useSong()
  const { setPlaylist, getPlayer } = useContext(SongContext)

  function handlePlay(item){
    const api = getPlayer()
    if(api && typeof api.play === 'function') api.play(item)
    else selectSong(item)
  }

  function handleRemove(id){
    setPlaylist(prev => prev.filter(s=>s.id !== id))
  }

  function handleClear(){
    setPlaylist([])
  }

  return (
    <aside className="playlist">
      <div className="playlist-header">
        <h3>Playlist</h3>
        <button className="clear" onClick={handleClear} title="Clear playlist">Clear</button>
      </div>

      {(!playlist || playlist.length===0) ? (
        <div className="empty">No songs in playlist</div>
      ) : (
        <ul className="list">
          {playlist.map(s => (
            <li className="item" key={s.id}>
              <div className="meta">
                <div className="title">{s.title}</div>
                <div className="artist">{s.artist}</div>
              </div>
              <div className="actions">
                <button className="play" onClick={()=>handlePlay(s)}>▶</button>
                <button className="remove" onClick={()=>handleRemove(s.id)}>✕</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </aside>
  )
}

export default Playlist
