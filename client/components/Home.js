import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPlayers } from '../store/players';
import createDeck from '../lib/createDeck';
import playWar from '../lib/playWar';

export const Home = (props) => {
  const { loadPlayers, players } = props;

  useEffect(() => {
    loadPlayers();
    playWar(createDeck(), players[0], players[1]);
  }, []);

  return (
    <div>
      {players.map((player) => {
        return (
          <div key={player.id}>
            <p>{player.name}</p>
            <p>{player.wins}</p>
          </div>
        );
      })}
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
    loadPlayers: () => dispatch(fetchPlayers()),
  };
};

export default connect(mapState, mapDispatch)(Home);
