import axios from 'axios';

// Action Types
const SET_PLAYERS = 'SET_PLAYERS';
const UPDATE_PLAYER = 'UPDATE_PLAYER';

// Action Creators
const setPlayers = (players) => {
  return {
    type: SET_PLAYERS,
    players,
  };
};

const _updatePlayer = (player) => {
  return {
    type: UPDATE_PLAYER,
    player,
  };
};

// Thunk Creators
export const fetchPlayers = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/players');
    dispatch(setPlayers(data));
  } catch (error) {
    console.log(error);
  }
};

export const updatePlayer = (id) => async (dispatch) => {
  try {
    const { data } = await axios.put(`/players/${id}`);
    dispatch(_updatePlayer(data));
  } catch (error) {
    console.log(error);
  }
};

export default function (players = [], action) {
  switch (action.type) {
    case SET_PLAYERS:
      return [...action.players];
    case UPDATE_PLAYER: {
      return players.map((player) => {
        return player.id === action.player.id ? action.player : player;
      });
    }
    default:
      return players;
  }
}
