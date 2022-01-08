import axios from 'axios';

// Action Types
const SET_PLAYERS = 'SET_PLAYERS';

// Action Creators
const setPlayers = (players) => {
  return {
    type: SET_PLAYERS,
    players,
  };
};

// Thunk Creators
export const fetchPlayers = () => async (dispatch) => {
  const { data } = await axios.get('/players');
  console.log(data);
  dispatch(setPlayers(data));
};

export default function (players = [], action) {
  switch (action.type) {
    case SET_PLAYERS:
      return [...action.players];
    default:
      return players;
  }
}
