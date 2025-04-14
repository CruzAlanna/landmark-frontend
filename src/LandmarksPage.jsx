import axios from "axios";
import { useState, useEffect } from "react";
import { LandmarksIndex } from "./LandmarksIndex";

export function LandmarksPage() {
  const [landmarks, setLandmarks] = useState([]);

  const handleIndex = () => {
    axios.get("http://localhost:3000/api/v1/landmarks")
    .then((response) => {
      setLandmarks(response.data);
    })
  };

  useEffect(handleIndex, []);
  
  return (
    <main>
      <LandmarksIndex landmarks={landmarks} />
    </main>
  )
}