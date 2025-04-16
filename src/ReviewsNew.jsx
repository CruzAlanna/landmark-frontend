import { useState } from 'react';

export function ReviewsNew({ landmarkId, onCreateReview }) {
  const [rating, setRating] = useState(5);

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const params = {
      review: {
        rating: parseInt(formData.get('rating')),
        comment: formData.get('comment')
      }
    };

    const successCallback = () => form.reset();
    onCreateReview(landmarkId, params, successCallback);
  }

  return (
    <div>
      <h3>Add a Review</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Rating:
            <select 
              name="rating"
              value={rating}
              onChange={handleRatingChange}
            >
              <option value='1'>1 ⭐</option>
              <option value='2'>2 ⭐⭐</option>
              <option value='3'>3 ⭐⭐⭐</option>
              <option value='4'>4 ⭐⭐⭐⭐</option>
              <option value='5'>5 ⭐⭐⭐⭐⭐</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Comment:
            <textarea name="comment" required rows="3" />
          </label>
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  )
}
