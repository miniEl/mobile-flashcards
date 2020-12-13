import { StyleSheet } from 'react-native';
import { paleYellow, dark, lightgrey } from '../utils/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: dark,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        borderRadius: 5,
        padding: 20,
        textAlign: 'center',
        backgroundColor: paleYellow,
        alignItems: 'stretch',
        width: '80%'
    },
    cardHeader: {
        marginBottom: 20
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center'
    },
    input: {
        borderWidth: 1,
        borderColor: lightgrey,
        borderRadius: 3,
        padding: 5,
        marginBottom: 10,
        backgroundColor: lightgrey
    },
    darkButton: {
        borderWidth: 1,
        borderColor: dark,
        borderRadius: 3,
        padding: 10,
        backgroundColor: dark,
        marginTop: 10
    },
    darkButtonText: {
        color: lightgrey,
        fontWeight: '700',
        textAlign: 'center'
    },
    lightButton: {
        borderWidth: 1,
        borderColor: dark,
        borderRadius: 3,
        padding: 10,
        backgroundColor: lightgrey,
        marginTop: 10
    },
    lightButtonText: {
        color: dark,
        fontWeight: '700',
        textAlign: 'center'
    }
});

export default styles;