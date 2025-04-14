export function LandmarksNew({ onCreate }) {
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
    onCreate(params, successCallback);
  }

  return (
    <div>
      <h1>New Landmark</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Image URL: <input name="image_url" type="text" />
        </div>
        <br></br>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <br></br>
        <div>
          Location: <input name="location" type="text" />
        </div>
        <br></br>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <br></br>
        <button type="submit">Add Landmark</button>
      </form>
    </div>
  )
}