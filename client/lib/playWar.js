const playWar = (deck, p1, p2) => {
  let p1deck = deck.splice(0, 26);
  let p2deck = deck.splice(0, 26);

  while (p1deck.length > 0 && p2deck.length > 0) {
    const p1card = p1deck.shift();
    const p2card = p2deck.shift();

    if (p1card.value > p2card.value) {
      console.log('p1 wins');
      p1deck = [...p1deck, p2card, p1card];
    } else if (p1card.value < p2card.value) {
      console.log('p2 wins');
      p2deck = [...p2deck, p1card, p2card];
    } else {
      console.log('tie breaker');
      //   debugger;
      breakTie(p1deck, p2deck, [p1card], [p2card]);
    }
  }

  console.log({ p1deck, p2deck });
  return { p1deck, p2deck };
};

const breakTie = (p1deck, p2deck, p1pile, p2pile) => {
  p1pile = [...p1pile, ...p1deck.splice(0, 2)];
  p2pile = [...p2pile, ...p2deck.splice(0, 2)];

  const p1newCard = p1pile[p1pile.length - 1];
  const p2newCard = p2pile[p2pile.length - 1];

  if (p1newCard.value > p2newCard.value) {
    // p1deck = [...p1deck, ...p2pile, ...p1pile];
    p1deck.push(...p2pile);
    p1deck.push(...p1pile);
  } else if (p1newCard.value < p2newCard.value) {
    // p2deck = [...p2deck, ...p1pile, ...p2pile];
    p2deck.push(...p1pile);
    p2deck.push(...p2pile);
  } else {
    breakTie(p1deck, p2deck, p1pile, p2pile);
  }

  return { p1deck, p2deck };
};

module.exports = playWar;
