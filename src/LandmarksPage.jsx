import axios from "axios";
import { useState, useEffect } from "react";
import { LandmarksIndex } from "./LandmarksIndex";
import { LandmarksNew } from "./LandmarksNew";
import { LandmarksShow } from "./LandmarksShow";
import { Modal } from "./Modal";

// Set Axios base URL once
axios.defaults.baseURL = "http://localhost:3000";

export function LandmarksPage() {
  const [landmarks, setLandmarks] = useState([]);
  const [isLandmarkShowVisible, setIsLandmarkShowVisible] = useState(false);
  const [currentLandmark, setCurrentLandmark] = useState({});

  const handleIndex = () => {
    axios.get("/api/v1/landmarks") // Because we set the base URL, we can just put the ending of the url for all our requests
    .then((response) => {
      setLandmarks(response.data);
    })
  };

  const handleCreate = (params, successCallback) => {
    axios.post("/api/v1/landmarks", params)
    .then((response) => {
      setLandmarks([...landmarks, response.data]);
      successCallback();
    })
  };

  const handleShow = (landmark) => {
    setIsLandmarkShowVisible(true);
    setCurrentLandmark(landmark);
  };

  const handleUpdate = (landmark, params, successCallback) => {
    axios.patch(`/api/v1/landmarks/${landmark.id}`, params)
    .then((response) => {
      setLandmarks(landmarks.map(landmark => landmark.id === response.data.id ? response.data : landmark));
      successCallback();
      setIsLandmarkShowVisible(false);
    })
  };

  const handleDestroy = (landmark) => {
    axios.delete(`/api/v1/landmarks/${landmark.id}`)
    .then(() => {
      setLandmarks(landmarks.filter((l) => l.id !== landmark.id));
      setIsLandmarkShowVisible(false);
    })
  };



  useEffect(handleIndex, []);
  
  return (
    <main>
      <LandmarksIndex landmarks={landmarks} onShow={handleShow} />
      <br></br>
      <Modal show={isLandmarkShowVisible} onClose={() => setIsLandmarkShowVisible(false)}>
          <LandmarksShow landmark={currentLandmark} onUpdate={handleUpdate} onDestroy={handleDestroy}/>
      </Modal>
      <LandmarksNew onCreate={handleCreate} />
    </main>
  )
}