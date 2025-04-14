export function LandmarksIndex({landmarks, onShow}) {
  return (
    <div>
      <h1>Guam Landmarks ({landmarks.length} Landmarks Found)</h1>
      <hr></hr>
      <div>
        {landmarks.map((landmark) => (
          <div className="spot" key={landmark.id}>
            <h2>{landmark.name} | Located in: {landmark.location}</h2>
            <p>{landmark.description}</p>
            <button onClick={() => onShow(landmark)}>View Landmark</button>
            <hr></hr>
          </div>
        ))}
      </div>
    </div>
  );
}