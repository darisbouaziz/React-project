/* In-lign styling
const Rating = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Rate Your Experience</h2>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial",
    padding: "20px",
  },
  heading: {
    color: "red",
  },
};

export default Rating;
*/

import { useState } from "react";
import Star from "./Star";
import Modal from "./Model";
import Button from "./button";

//Default 'heading' prop
const Rating = ({
  heading = "Rate Your Experience",
  color = "gold",
  feedbackMessages = ["Terrible", "Poor", "Fair", "Good", "Excellent"],
}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const stars = Array.from({ length: 5 }, (_, i) => i + 1); //Create [1, 2, 3, 4, 5]

  const handleSubmit = () => {
    if (rating > 0) {
      setSubmitted(true);
    }
  };

  //Close model and reset UI
  const closeModel = () => {
    setSubmitted(false);
    setRating(0);
    setHover(0);
  };

  return (
    <div className="rating-container">
      <h2>{heading}</h2>
      <div className="stars">
        {stars.map((star) => (
          <Star
            key={star}
            star={star}
            rating={rating}
            hover={hover}
            color={color}
            ratingClick={setRating}
            hoverEnter={setHover}
            hoverLeave={() => setHover(null)}
          />
        ))}
      </div>
      {rating > 0 && <p className="feedback">{feedbackMessages[rating - 1]}</p>}

      {/* <button
        className="submit-btn"
        onClick={handleSubmit}
        disabled={rating === 0}
      >
        Submit
      </button> */}
      <Button
        className="submit-btn"
        onClick={handleSubmit}
        disabled={rating === 0}
      >
        Submit
      </Button>

      <Modal isOpen={submitted} onClose={closeModel} rating={rating} />
    </div>
  );
};

export default Rating;
