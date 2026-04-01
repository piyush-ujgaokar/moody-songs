import { useEffect, useRef, useState } from "react";
import {init,detect} from '../utils/utils.js'
import './face-expression.scss'

export default function FaceExpression({onclick=()=>{ }}) {
  const videoRef = useRef(null);
  const landmarkerRef = useRef(null);
  const streamRef=useRef(null)
  const [expression, setExpression] = useState("Detecting...");

  async function handleClick(){
    const expression= detect({landmarkerRef,setExpression,videoRef})
    onclick(expression)
  }

  useEffect(() => {
    init({landmarkerRef,streamRef,videoRef,setExpression});

    return () => {
      if (landmarkerRef.current) {
        landmarkerRef.current.close();
      }
      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div className="expression-card card">
      <div className="expression-content">
        <video
          ref={videoRef}
          className="expression-video"
          playsInline
        />
        <div className="expression-actions">
          <h2 className="expression-title">{expression}</h2>
          <button className="expression-btn" onClick={handleClick}>Detect Mood</button>
        </div>
      </div>
    </div>
  );
}
