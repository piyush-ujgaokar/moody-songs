import React from 'react'
import FaceExpression from '../../expression/components/FaceExpression'
import useSong from '../hooks/useSong'
import './mood-section.scss'

const MoodSection = ()=>{
  const { handleGetSongs } = useSong()

  return (
    <section className="mood-section card">
      <h2 className="mood-section__title">Current Mood</h2>
      <div className="mood-section__body">
        <FaceExpression onclick={(expression)=>handleGetSongs({mood:expression})} />
      </div>
    </section>
  )
}

export default MoodSection
