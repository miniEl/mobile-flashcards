import { ActionTypes } from '../actions/index';

function decks(state = {}, action) {
    switch (action.type) {
        case ActionTypes.RECEIVE_DECKS:
            return {
                // ...state,
                ...action.decks
            };
        case ActionTypes.CREATE_DECK:
            return {
                ...state,
                [action.deck.id]: action.deck
            };
        case ActionTypes.GET_CARDS:
            return {
                ...state,
                ...action.cards
            }
        case ActionTypes.CREATE_CARD:
            return {
                ...state,
                [action.card.id]: action.card
            };
        case ActionTypes.ADD_CARD_TO_DECK:
            return {
                ...state,
                [action.deckID]: {
                    ...state[action.deckID],
                    cards: [...state[action.deckID].cards, action.cardID]
                }
            };
        default:
            return state;
    }
}

export default decks;