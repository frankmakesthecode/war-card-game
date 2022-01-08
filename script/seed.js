'use strict';

const {
  db,
  models: { Player },
} = require('../server/db');

async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');

  const players = await Promise.all([
    Player.create({ name: 'John' }),
    Player.create({ name: 'Francis' }),
  ]);

  console.log(`seeded ${players.length} players`);
  console.log(`seeded successfully`);

  return {
    players: {
      john: players[0],
      francis: players[1],
    },
  };
}

async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed;
