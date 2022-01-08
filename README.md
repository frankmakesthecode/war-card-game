# War Card Game

## Download and run program

```
cd <DIRECTORY_YOU_WANT_TO_DOWNLOAD_TO>

git clone https://github.com/frankmakesthecode/war-card-game.git

createdb war-card-game
(This is using Postgres: postgres://localhost5432/)

npm install

npm seed
(Seeding the database with players)

npm run start:dev
```

## Mechanics

### Leaderboards

- Leaderboards of total lifetime wins are shown on the left hand side of the screen. (This is stored in our Postgres database)

### Playing the Game

Rules of the game: https://bicyclecards.com/how-to-play/war/

- The war card game simulation is displayed in the middle of the screen
- Click the "Play War" button to start the game simulation
- Once the game is completed the winner will be displayed
- Press the "Continue" button to return to the match screen and clear the game log(see game log section)

### Game Log

- When a game is completed a game log will appear on the right hand side of the screen.
- It displays the result of each round, including tie breakers
- When a new game is initiated, the game log is cleared for the next game
