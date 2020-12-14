import keyMirror from "keymirror";
import { getData, saveDeck, saveCard } from '../utils/api';

export const handleInitialData = () => {
    return (dispatch) => {
        return getData().then(({ decks, cards }) => {
            // console.log('VVVVVVVV::');
            // console.log(decks);
            dispatch(receiveDecks(decks));
            dispatch(getCards(cards));
        });
    }
}

export const handleSaveDeck = (title) => {
    return (dispatch) => {
        return saveDeck(title).then((deck) => {
            dispatch(createDeck(deck));
            return deck;
        }).then()
    }
}

export const handleSaveCard = (deckID, question, answer) => {
    return (dispatch) => {
        return saveCard(deckID, question, answer).then((deckID, card) => {
            dispatch(createCard(card));
            dispatch(addCardToDeck(card.id, deckID));
        });
    }
}

export const ActionTypes = keyMirror({
    RECEIVE_DECKS: null,
    CREATE_DECK: null,
    GET_CARDS: null,
    CREATE_CARD: null,
    ADD_CARD_TO_DECK: null
});

export const receiveDecks = (decks) => {
    console.log('SSSSSSSSSSS');
    console.log(decks);
    return {
        type: ActionTypes.RECEIVE_DECKS,
        decks
    }
};

export const createDeck = (deck) => {
    return {
        type: ActionTypes.CREATE_DECK,
        deck
    }
};

export const getCards = (cards) => ({
    type: ActionTypes.GET_CARDS,
    cards
});

export const createCard = (card) => ({
    type: ActionTypes.CREATE_CARD,
    card
});

export const addCardToDeck = (cardID, deckID) => ({
    type: ActionTypes.ADD_CARD_TO_DECK,
    cardID,
    deckID
});