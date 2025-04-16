import axios from "axios";
import { useState, useEffect } from "react";
import { ReviewsList } from "./ReviewsList";
import { ReviewsNew } from "./ReviewsNew";

export function LandmarksShow({ landmark, onUpdate, onDestroy }) {
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const params = {
      landmark: {
        name: formData.get('name'),
        description: formData.get('description'),
        image_url: formData.get('image_url'),
        location: formData.get('location'),
      }
    }

    const successCallback = () => form.reset();
    onUpdate(landmark, params, successCallback);
  };

  const handleCreateReview = (landmarkId, params, successCallback) => {
    axios.post(`http://localhost:3000/api/v1/landmarks/${landmarkId}/reviews`, params)
    .then((response) => {
      setReviews([...reviews, response.data]);
      successCallback();
    })
    .catch((error) => {
      console.log(error);
    });
  }

  // use effect to fetch reviews whenever the landmark changes
  useEffect(() => {
    // only going to fetch the data if there's a valid landmark with a valid id
    if (landmark && landmark.id) {
      axios.get(`http://localhost:3000/api/v1/landmarks/${landmark.id}`)
      .then((response) => {
        // only update the review state if the response contains reviews
        if (response.data.reviews) {
          setReviews(response.data.reviews);
        }
      })
      .catch((error) => {
        console.log(error);
      })
    }
    // re-run effect when the landmark changes
  }, [landmark])

  
  return (
    <div>
      <h1>Landmark Show Page:</h1>
      <img src={landmark.image_url} />
      <h2>{landmark.name} | Located in: {landmark.location}</h2>
      <p>{landmark.description}</p>
      <hr></hr>
      <h4>Update Landmark:</h4>
      <form onSubmit={handleSubmit}>
        <div>
          Image URL: <input defaultValue={landmark.image_url} name="image_url" type="text" />
        </div>
        <div>
          Name: <input defaultValue={landmark.name} name="name" type="text" />
        </div>
        <div>
          Location: <input defaultValue={landmark.location} name="location" type="text" />
        </div>
        <div>
          Description: <input defaultValue={landmark.description} name="description" type="text" />
        </div>
        <button type="submit">Update</button>
      </form>
      <h4>Delete Landmark:</h4>
      <button onClick={() => onDestroy(landmark)}>Remove Landmark</button>
      <hr></hr>
      <div>
        <ReviewsList reviews={reviews} />
        <h4>Write a Review!</h4>
        <ReviewsNew landmarkId={landmark.id} onCreateReview={handleCreateReview}/>
      </div>
    </div>
  )
}