import { StyleSheet } from 'react-native';
import { paleYellow, dark, lightgrey } from '../../utils/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: dark,
        width: '80%'
    },
    lightTitle: {
        color: lightgrey,
        fontSize: 24,
        fontWeight: '700',
        paddingTop: 20
    },
    darkTitle: {
        color: dark,
        fontSize: 24,
        fontWeight: '700'
    },
    subTitle: {
        color: dark,
        fontSize: 18,
        fontWeight: 'bold',
        margin: 20,
        borderWidth: 1,
        borderColor: dark,
        borderStyle: 'dotted',
        borderRadius: 100,
        padding: 15,
        backgroundColor: lightgrey,
        opacity: .8
    },
    cardWrapper: {
        flex: 1,
        justifyContent: 'center'
    },
    card: {
        borderRadius: 5,
        padding: 20,
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: paleYellow
    },
    text: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 24
    },
    toggle: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: dark,
        borderStyle: 'dotted',
        borderRadius: 100,
        padding: 10,
        margin: 30,
        width: '50%',
        backgroundColor: lightgrey,
        opacity: .7
    },
    toggleText: {
        color: dark,
        fontWeight: '700'
    },
    actionsWrapper: {
        width: '100%',
        flexDirection: "row",
        justifyContent: 'space-around'
    },
    darkButton: {
        borderWidth: 1,
        borderColor: dark,
        borderRadius: 3,
        padding: 10,
        backgroundColor: dark,
        marginTop: 10,
        width: '45%'
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
        marginTop: 10,
        width: '45%'
    },
    lightButtonText: {
        color: dark,
        fontWeight: '700',
        textAlign: 'center'
    }
});

export default styles;