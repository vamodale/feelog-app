import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    image: {
        width: 212,
        height: 32,
        marginTop: 56,
        marginHorizontal: 74,
    },

    positionText: {
        marginTop: 268,
        marginHorizontal: 99,
    },

    title: {
        fontFamily: theme.fonts.title400,
        fontSize: 16,
        color: theme.colors.white,
    },

    subtitle: {
        fontFamily: theme.fonts.title600,
        fontSize: 16,
        color: theme.colors.white
    },
})
