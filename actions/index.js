import keyMirror from "keymirror";

export const ActionTypes = keyMirror({
    RECEIVE_DECKS: null,
    CREATE_DECK: null,
    GET_CARDS: null,
    CREATE_CARD: null,
    ADD_CARD_TO_DECK: null
});

export const receiveDecks = (decks) => ({
    type: ActionTypes.RECEIVE_DECKS,
    decks
});

export const createDeck = (deck) => ({
    type: ActionTypes.CREATE_DECK,
    deck
});

export const getCards = (cards) => ({
    type: ActionTypes.GET_CARDS,
    cards
});

export const createCard = (card) => ({
    type: ActionTypes.CREATE_CARD,
    card
});

export const addCardToDeck = (cardID, deckID)({
    type: ActionTypes.ADD_CARD_TO_DECK,
    cardID,
    deckID
});