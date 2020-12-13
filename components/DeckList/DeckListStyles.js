import { StyleSheet } from 'react-native';
import { paleYellow, dark } from '../../utils/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: dark
    },
    card: {
        borderRadius: 5,
        padding: 30,
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: paleYellow,
        width: 300
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    text: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: '700'
    },
});

export default styles;