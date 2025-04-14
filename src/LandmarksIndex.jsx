export function LandmarksIndex({landmarks}) {
  return (
    <div>
      <h1>Guam Landmarks ({landmarks.length} Landmarks Found)</h1>
      <hr></hr>
      <div>
        {landmarks.map((landmark) => (
          <div className="spot" key={landmark.id}>
            <img src={landmark.image_url} />
            <h2>{landmark.name} | Located in: {landmark.location}</h2>
            <p>{landmark.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}