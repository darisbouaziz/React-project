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

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const stars = Array.from({ length: 5 }, (_, i) => i + 1); //Create [1, 2, 3, 4, 5]

  return (
    <div className="rating-container">
      <h2>Rate Your Experience</h2>
      <div className="stars">
        {stars.map((star) => (
          <span
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            key={star}
            className="star"
          >
            {"\u2605"}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Rating;
