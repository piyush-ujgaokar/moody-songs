import React from 'react'
import { useContext } from 'react'
import { SongContext } from '../song.context'
import { getSong, getSongs } from '../services/song.api'

export const useSong = () => {

    const context=useContext(SongContext)

    const {song,setSong,playlist,setPlaylist,loading,setLoading,registerPlayer,getPlayer}=context

     async function handleGetSongs({mood}){
        setLoading(true)
        try {
            const data=await getSongs({mood})
            // expect data.songs to be an array from backend
            const songs = data.songs || (data.song? [data.song]: [])
            setPlaylist(songs)
            if(songs.length>0) setSong(songs[0])
        } catch (error) {
            throw Error(error)
        }finally{
            setLoading(false)
        }
    }

    function selectSong(selected){
      setSong(selected)
    }

  return({song,playlist,loading,handleGetSongs,selectSong,activeSong:song,registerPlayer,getPlayer})
}

export default useSong