const router = require('express').Router();
const {
  models: { Player },
} = require('../db');

module.exports = router;

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

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const player = await Player.findByPk(id, {
      attributes: ['id', 'name', 'wins'],
    });

    const updatedPlayer = await player.update({
      wins: player.wins + 1,
    });

    res.status(200).json(updatedPlayer);
  } catch (error) {
    next(error);
  }
});
