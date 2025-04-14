export function LandmarksShow({ landmark, onUpdate, onDestroy }) {
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
  }
  
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
        <br></br>
        <div>
          Name: <input defaultValue={landmark.name} name="name" type="text" />
        </div>
        <br></br>
        <div>
          Location: <input defaultValue={landmark.location} name="location" type="text" />
        </div>
        <br></br>
        <div>
          Description: <input defaultValue={landmark.description} name="description" type="text" />
        </div>
        <br></br>
        <button type="submit">Update</button>
      </form>
      <h4>Delete Landmark:</h4>
      <button onClick={() => onDestroy(landmark)}>Remove Landmark</button>
    </div>
  )
}