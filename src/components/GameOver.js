import "./GameOver.css";

const GameOver = ({ retry, score }) => {
  return (
    <div className="gameover">
      <h1>Game Over!</h1>
      <h2>
        Your Score: <span>{score}</span>!
      </h2>
      <button onClick={retry}>Try Again</button>
    </div>
  );
};

export default GameOver;
