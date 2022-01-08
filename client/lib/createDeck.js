const shuffleDeck = require('./shuffleDeck');

const createDeck = () => {
  const deck = [];

  for (let i = 2; i < 15; i++) {
    const card = { value: i };

    if (i > 10) {
      card.alias = assignAlias(i);
    } else {
      card.alias = i.toString();
    }

    card.suit = '♣️';
    deck.push({ ...card });
    card.suit = '♠️';
    deck.push({ ...card });
    card.suit = '♥️';
    deck.push({ ...card });
    card.suit = '♦️';
    deck.push({ ...card });
  }

  return shuffleDeck(deck);
};

const assignAlias = (value) => {
  switch (value) {
    case 11:
      return 'J';
    case 12:
      return 'Q';
    case 13:
      return 'K';
    case 14:
      return 'A';
    default:
      return null;
  }
};

module.exports = createDeck;
