import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center"
    },
    feelog: {
        width: 232,
        height: 93,
        resizeMode: 'stretch',
    },
    account: {
        fontSize: 12,
        fontFamily: theme.fonts.title400,
        color: theme.colors.white
    },
    login: {
        fontSize: 12,
        fontFamily: theme.fonts.title600,
        color: theme.colors.white
    },
    teste: {
        marginTop: 24,
        alignItems: 'center',
    }
});