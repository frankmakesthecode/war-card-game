import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updatePlayer } from '../store/players';
import playWar from '../lib/playWar';

export const Game = (props) => {
  const { players, updatePlayer } = props;
  const [player1, player2] = players;
  const [result, setResult] = useState(null);

  const handlePlayClick = async () => {
    setResult(playWar(player1, player2));
  };

  const handleContinueClick = async () => {
    const { winner } = result;
    setResult(null);
    updatePlayer(winner.id);
  };

  return (
    <div id="game-container">
      {result === null ? (
        <div className="game-item">
          {players.length && (
            <h3 id="match-header">{`${player1.name} vs ${player2.name}`}</h3>
          )}
          <button className="main-btn" onClick={handlePlayClick}>
            Play War
          </button>
        </div>
      ) : (
        <div className="game-item">
          <h3 id="result-header">{result.winner.name} wins!</h3>
          <button className="main-btn" onClick={handleContinueClick}>
            Continue
          </button>
        </div>
      )}
      <div id="game-log-container">
        <h4>Game Log</h4>
        {result === null ? (
          <p>Start a Game!</p>
        ) : (
          result.gameLog.map((round) => {
            return <p>{round}</p>;
          })
        )}
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    players: state,
  };
};

const mapDispatch = (dispatch) => {
  return {
    updatePlayer: (id) => dispatch(updatePlayer(id)),
  };
};

export default connect(mapState, mapDispatch)(Game);
