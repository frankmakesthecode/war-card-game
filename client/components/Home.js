import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPlayers } from '../store/players';
import Game from './Game';
import Leaderboard from './Leaderboard';

export const Home = (props) => {
  const { loadPlayers } = props;

  useEffect(async () => {
    await loadPlayers();
  }, []);

  return (
    <div id="main-container">
      <Leaderboard />
      <Game />
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
