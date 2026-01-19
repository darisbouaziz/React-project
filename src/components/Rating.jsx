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

const Rating = () => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1); //Create [1, 2, 3, 4, 5]

  const clicked = (index) => console.log("Clicked!", index);

  const hovered = (direction, index) =>
    console.log("Hovered!", direction, index);

  return (
    <div className="rating-container">
      <h2>Rate Your Experience</h2>
      <div className="stars">
        {stars.map((star, index) => (
          <span
            onClick={() => clicked(index)}
            onMouseEnter={() => hovered("enter", index)}
            onMouseLeave={() => hovered("leave", index)}
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
