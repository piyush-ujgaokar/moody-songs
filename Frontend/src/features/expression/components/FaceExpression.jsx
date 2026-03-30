import { useEffect, useRef, useState } from "react";
import {init,detect} from '../utils/utils.js'

export default function FaceExpression() {
  const videoRef = useRef(null);
  const landmarkerRef = useRef(null);
const streamRef=useRef(null)
  const [expression, setExpression] = useState("Detecting...");



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
    <div style={{ textAlign: "center" }}>
      <video
        ref={videoRef}
        style={{ width: "400px", borderRadius: "12px" }}
        playsInline
      />
      <h2>{expression}</h2>
      <button onClick={()=>{
        detect({landmarkerRef,setExpression,videoRef})
      }}>Detect Expression</button>
    </div>
  );
}
