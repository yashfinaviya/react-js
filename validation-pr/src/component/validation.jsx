import React, { useState } from 'react';
import './validation.css';


function Validation() {
    const [username, setUsername] = useState('');
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(0);
    const [reviews, setReviews] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !reviewText || !rating) {
            alert('Please fill in all fields.');
            return;
        }
        const newReview = {
            username,
            reviewText,
            rating,
        };
        setReviews([...reviews, newReview]);
        setUsername('');
        setReviewText('');
        setRating(0);
    };

    return (
        <div className="App">
            <h1>Review & Rating System</h1>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <br />
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter your Name' />
                <br />
                <label>Review:</label>
                <br />
                <textarea value={reviewText} onChange={(e) => setReviewText(e.target.value)} placeholder='Enater Review Text..' />
                <br />
                <label>Rating:</label>
                <br />
                <select value={rating} onChange={(e) => setRating(parseInt(e.target.value))}>
                    <option value="0">Select Rating</option>
                    <option value="1">★</option>
                    <option value="2">★★</option>
                    <option value="3">★★★</option>
                    <option value="4">★★★★</option>
                    <option value="5">★★★★★</option>
                </select>
                <br />
                <button type="submit">Submit Review</button>
            </form>
            <div className="reviews">
                {reviews.map((review, index) => (
                    <div key={index} className="review">
                        <h2>User Name: {review.username}</h2>
                        <p>Review Text: {review.reviewText}</p>
                        <p>Rating: {review.rating} ★</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Validation;