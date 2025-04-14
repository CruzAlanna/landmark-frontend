import axios from "axios";
import { useState, useEffect } from "react";
import { LandmarksIndex } from "./LandmarksIndex";
import { LandmarksNew } from "./LandmarksNew";

export function LandmarksPage() {
  const [landmarks, setLandmarks] = useState([]);

  const handleIndex = () => {
    axios.get("http://localhost:3000/api/v1/landmarks")
    .then((response) => {
      setLandmarks(response.data);
    })
  };

  const handleCreate = (params, successCallback) => {
    axios.post("http://localhost:3000/api/v1/landmarks", params)
    .then((response) => {
      setLandmarks([...landmarks, response.data]);
      successCallback();
    })
  };

  useEffect(handleIndex, []);
  
  return (
    <main>
      <LandmarksIndex landmarks={landmarks} />
      <br></br>
      <LandmarksNew onCreate={handleCreate} />
    </main>
  )
}