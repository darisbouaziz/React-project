import Rating from "./components/Rating";

//sfc (Shortcut) -> arrow function
const App = () => {
  return (
    <div>
      <Rating
        heading="How do you feel about React?"
        feedbackMessages={[
          "Hate it",
          "Dislike it",
          "Meh",
          "Like it",
          "Love it",
        ]}
      />
    </div>
  );
};

export default App;
