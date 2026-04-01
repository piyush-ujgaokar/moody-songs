import { useState } from "react";
import { createContext } from "react";


export const SongContext=createContext()

export const SongContextProvider=({children})=>{
    const [song, setSong] = useState({
            "url": "https://ik.imagekit.io/exdlx4vvmg/moodify-2/songs/Saiyaara_Title_Song___Ahaan_Panday__Aneet_Padda___Tanishk_Bagchi__Faheem_A__Arslan_N___Irshad_Kamil_dlzpVN1P7.mp3",
            "posterUrl": "https://ik.imagekit.io/exdlx4vvmg/moodify-2/posters/Saiyaara_Title_Song___Ahaan_Panday__Aneet_Padda___Tanishk_Bagchi__Faheem_A__Arslan_N___Irshad_Kamil_Ly4QJR04B.jpeg",
            "title": "Saiyaara Title Song | Ahaan Panday, Aneet Padda | Tanishk Bagchi, Faheem A, Arslan N | Irshad Kamil",
            "mood": "sad"
        })

    const [loading, setLoading] = useState(false)

    return (
        <SongContext.Provider value={{song,setSong,loading,setLoading}}>
            {children}
        </SongContext.Provider>
    )


}