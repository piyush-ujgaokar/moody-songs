const songModel=require('../models/songs.model')
const id3=require('node-id3')
const storagetService=require('../services/storage.service')

async function uploadSongs(req,res){

    const songBuffer=req.file.buffer
    const {mood} = req.body

    const tags=id3.read(songBuffer)

const [songs, poster] = await Promise.all([
      storagetService.uploadFile({
            buffer: songBuffer,
            filename: tags.title + ".mp3",
            folder: 'moodify-2/songs'
      }),
      storagetService.uploadFile({
            buffer: tags.image.imageBuffer,
            filename: tags.title + ".jpeg",
            folder: 'moodify-2/posters'
      })
 ])

    const song=await songModel.create({
        title:tags.title,
        url:songs.url,
        posterUrl:poster.url,
        mood
    })

    res.status(201).json({
        message:"Song Uploaded Successfully !",
        song
    })

}   

async function getSongs(req,res){
    const {mood}=req.query

    const song=await songModel.findOne({
        mood
    })

    res.status(200).json({
        message:"Songs fetched Successfully !",
        song
    })
}

module.exports={
    uploadSongs,
    getSongs
}