import React, { useState } from 'react';
import './validation.css';

function Validation() {

    const [Fname, setFname] = useState('');
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(1);

  
    const [reviews, setReviews] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!Fname || !reviewText || rating < 1 || rating > 5) {
            alert('Please fill all fields and choose a valid rating (1-5)');
            return;
        }

        const newReview = { Fname, reviewText, rating };
        setReviews([...reviews, newReview]);

        setFname('');
        setReviewText('');
        setRating(1);
    };

    return (
        <div className="App">
            <h1>Submit Your Review</h1>

            <form onSubmit={handleSubmit} className="review-form">
                <div className="form-group">
                    <label>First Name</label>
                    <input
                        type="text"
                        value={Fname}
                        onChange={(e) => setFname(e.target.value)}
                        placeholder="Enter your Fname"
                    />
                </div>

                <div className="form-group">
                    <label>Review</label>
                    <textarea
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        placeholder="Write your review here"
                    />
                </div>

                <div className="form-group">
                    <label>Rating (1-5 stars)</label>
                    <select
                        value={rating}
                        onChange={(e) => setRating(Number(e.target.value))}>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <option key={star} value={star}>
                                {star} {star === 1 ? 'star' : 'stars'}
                            </option>
                        ))}
                    </select>
                </div>

                <button type="submit">Submit Review</button>
            </form>

            <div className="reviews">
                <h2>All Reviews</h2>
                {reviews.length === 0 && <p>No reviews submitted!</p>}
                {reviews.map((review, index) => (
                    <div key={index} className="review-card">
                        <h3>F name: {review.Fname}</h3>
                        <p>Review Text: {review.reviewText}</p>
                        <p>Rating: {Array.from({ length: review.rating }).map((_, i) => '⭐')}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Validation;
