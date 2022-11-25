import "./Game.css";

const Game = ({verifyLetter}) => {
  return (
    <div className="game">
      <p className="points">
        <span>Points: 000</span>
      </p>
      <h1>Guess the word:</h1>
      <h3 className="tip">
        Tip about the word: <span>Tip...</span>
      </h3>
      <p>You still have XX tries</p>
      <div className="wordContainer">
        <span className="letter">A</span>
        <span className="blankSquare"></span>
      </div>

      <div className="letterContainer">
        <p>Try to guess a letter of the word:</p>
        <form>
          <input type="text" name="letter" maxLength="1" required/>
          <button>Play!</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Already tried letters:</p>
        <span>a,</span>
        <span>t,</span>
      </div>
    </div>
  )
}

export default Game