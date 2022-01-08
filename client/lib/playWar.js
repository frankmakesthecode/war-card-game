const createDeck = require('./createDeck');

const playWar = (p1, p2) => {
  const deck = createDeck();
  const gameLog = [];
  let p1deck = deck.splice(0, 26);
  let p2deck = deck.splice(0, 26);
  const result = {};

  let round = 1;
  while (p1deck.length > 0 && p2deck.length > 0) {
    const p1card = p1deck.shift();
    const p2card = p2deck.shift();

    if (p1card.value > p2card.value) {
      p1deck.push(p2card, p1card);
      gameLog.push(
        `ROUND ${round}: Player 1 wins! (${p1card.alias}${p1card.suit} vs ${p2card.alias}${p2card.suit})`
      );
    } else if (p1card.value < p2card.value) {
      p2deck.push(p1card, p2card);
      gameLog.push(
        `ROUND ${round}: Player 2 wins! (${p1card.alias}${p1card.suit} vs ${p2card.alias}${p2card.suit})`
      );
    } else {
      gameLog.push(
        `ROUND ${round}: Tiebreak! Drawing cards.. (${p1card.alias}${p1card.suit} vs ${p2card.alias}${p2card.suit})`
      );

      breakTie(p1deck, p2deck, [p1card], [p2card], gameLog);
    }

    round++;
  }
  result.winner = p1deck.length > p2deck.length ? p1 : p2;
  result.gameLog = gameLog;

  return result;
};

const breakTie = (p1deck, p2deck, p1pile, p2pile, gameLog) => {
  p1pile = [...p1pile, ...p1deck.splice(0, 2)];
  p2pile = [...p2pile, ...p2deck.splice(0, 2)];

  const p1newCard = p1pile[p1pile.length - 1];
  const p2newCard = p2pile[p2pile.length - 1];

  if (p1newCard.value > p2newCard.value) {
    p1deck.push(...p2pile, ...p1pile);
    gameLog.push(
      `Player 1 wins tiebreaker! (${p1newCard.alias}${p1newCard.suit} vs ${p2newCard.alias}${p2newCard.suit})`
    );
  } else if (p1newCard.value < p2newCard.value) {
    p2deck.push(...p1pile, ...p2pile);
    gameLog.push(
      `Player 2 wins tiebreaker! (${p1newCard.alias}${p1newCard.suit} vs ${p2newCard.alias}${p2newCard.suit})`
    );
  } else {
    gameLog.push(
      `ANOTHER Tiebreak! Drawing cards.. (${p1newCard.alias} of ${p1newCard.suit} vs ${p2newCard.alias} of ${p2newCard.suit})`
    );
    breakTie(p1deck, p2deck, p1pile, p2pile, gameLog);
  }
};

module.exports = playWar;
