import { chunk } from "lodash.chunk";

export const gryffindorColors =
  "linear-gradient(90deg, rgba(127,9,9,1) 27%, rgba(255,197,0,1) 61%)";
export const hufflepuffColors =
  "linear-gradient(90deg, rgba(238,225,23,1) 35%, rgba(0,0,0,1) 93%)";
export const slytherinColors =
  "linear-gradient(90deg, rgba(13,98,23,1) 32%, rgba(170,170,170,1) 69%)";
export const ravenclawColors =
  "linear-gradient(90deg, rgba(0,10,144,1) 32%, rgba(148,107,45,1) 69%)";

export function shuffleCards(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
  }
  return cards;
}

export function splitCardsEqually(cards) {
  const halfSize = Math.floor(cards.length / 2);
  return chunk(cards, halfSize);
}

export function checkNull(value) {
  return value !== null ? value : "unknown";
}

export function checkDeathEater(value) {
  if (value === false) {
    return "no";
  }
  return "undoubtedly";
}

export function checkDumbledoresArmy(value) {
  if (value === false) {
    return "no";
  }
  return `undoubtedly \u{1F9D5}`;
}
