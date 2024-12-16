function Result({ score, highScore, dispatch, maxPossiblePoints }) {
  const percentage = (score / maxPossiblePoints) * 100;
  return (
    <div className="result-container">
      <div className="result-content">
        <p className="total-score">
          Your score is <h5 className="result-font">{score}</h5> 🥳🥳🎉🎉🎊
        </p>
        <p className="total-perc">{Math.ceil(percentage)}%</p>
        <p className="total-high score">
          your high Score is <h5 className="result-font">{highScore}</h5> 🥳🥳
        </p>
      </div>

      <button
        className="next_btn  btn"
        onClick={() => dispatch({ type: "reset" })}
      >
        Restart
      </button>
    </div>
  );
}

export default Result;
