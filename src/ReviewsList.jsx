export function ReviewsList({ reviews }) {
  return (
    <div>
      <h3>Reviews:</h3>
      {reviews.map((review) => (
        <div key={review.id}>
          <p>Rating: {review.rating}</p>
          <p>Comment: {review.comment}</p>
        </div>
      ))}
    </div>
  )
}