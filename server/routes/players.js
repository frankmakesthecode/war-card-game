const router = require('express').Router();
const {
  models: { Player },
} = require('../db');

// GET /api/players/
router.get('/', async (req, res, next) => {
  try {
    const players = await Player.findAll({
      attributes: ['id', 'name', 'wins'],
    });

    res.status(200).json(players);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
