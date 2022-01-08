import React from 'react';
import { connect } from 'react-redux';

export const Leaderboard = (props) => {
  const { players } = props;
  return (
    <div id="leaderboard-container">
      <h4>Leaderboard</h4>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Wins</th>
          </tr>
          {players.map((player) => {
            return (
              <tr>
                <td>{player.name}</td>
                <td>{player.wins}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const mapState = (state) => {
  return {
    players: state,
  };
};

export default connect(mapState)(Leaderboard);
