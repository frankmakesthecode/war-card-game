const db = require('./db');

const Player = require('./models/Player');

// No current associations

module.exports = {
  db,
  models: {
    Player,
  },
};
