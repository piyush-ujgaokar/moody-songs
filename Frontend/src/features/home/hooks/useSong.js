import React from 'react'
import { useContext } from 'react'
import { SongContext } from '../song.context'
import { getSong } from '../services/song.api'

export const useSong = () => {

    const context=useContext(SongContext)

    const {song,setSong,loading,setLoading}=context

     async function handleGetSong({mood}){
        setLoading(true)
        try {
            const data=await getSong({mood})
            console.log(data)
            setSong(data.song)
        } catch (error) {
            throw Error(error)
        }finally{
            setLoading(false)
        }
    }

  return({song,loading,handleGetSong})
}

export default useSong