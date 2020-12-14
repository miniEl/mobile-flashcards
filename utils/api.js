import AsyncStorage from '@react-native-community/async-storage';
import { Notifications } from 'expo';
import * as Permissions from "expo-permissions";

const DECKS_STORAGE_KEY = 'MerhanElkheshen:decks';
const CARDS_STORAGE_KEY = 'MerhanElkheshen:cards';
const NOTIFICATION_KEY = 'MerhanElkheshen:notifications';

export const getData = () => {
    // AsyncStorage.clear();
    return AsyncStorage.multiGet([DECKS_STORAGE_KEY, CARDS_STORAGE_KEY])
        .then((results) => {
            const obj = {};
            results.map((result) => {
                obj[result[0].slice(16)] = result[1] ? JSON.parse(result[1]) : tempData(result[0])
            });
            return obj;
        });
};

export const saveDeck = (title) => {
    const id = generateId();
    const deck = { title, id, cards: [] };
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [id]: deck
    })).then((() => deck));
};

export const saveCard = (deckID, question, answer) => {
    const id = generateId();
    const card = { id, deckID, question, answer };
    return AsyncStorage.mergeItem(CARDS_STORAGE_KEY, JSON.stringify({
            [id]: card
        })).then(() => AsyncStorage.getItem(DECKS_STORAGE_KEY))
        .then(result => {
            const decks = JSON.parse(result);
            decks[deckID].cards.push(id);
            return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks))
        }).then(() => {
            return { deckID, card };
        });
};

const createNotification = () => ({
    title: 'Time to practice!',
    body: "👋 Don't forget to take your quiz today!",
    ios: {
        sound: true,
    },
    android: {
        sound: true,
        priority: 'high',
        sticky: false,
        vibrate: false,
    }
});

export const clearLocalNotification = () => {
    AsyncStorage.removeItem(NOTIFICATION_KEY).then(
        Notifications.cancelAllScheduledNotificationsAsync()
    );
};

async function notificationAsync() {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (status === 'granted') {
        Notifications.cancelAllScheduledNotificationsAsync();
        let tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(18);
        tomorrow.setMinutes(0);
        Notifications.scheduleLocalNotificationAsync(createNotification(), {
            time: tomorrow,
            repeat: "day"
        });
        AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
    } else {
        throw new Error('Notification permission not granted');
    }
}

export const setLocalNotification = () => {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                notificationAsync();
            }
        })
}

const tempData = (key) => {
    AsyncStorage.setItem(key, JSON.stringify({}));
    return {};
};

const generateId = () => {
    return (
        Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    );
};