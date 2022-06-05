import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: 209,
        height: 48,
        backgroundColor: theme.colors.white,
        borderRadius: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 96,
    },
    title: {
        color: theme.colors.primary,
        fontSize: 16,
        fontFamily: theme.fonts.title500,
        textAlign: 'left'
    },
    icongoogle: {
        marginRight: 16,
        alignItems: 'center',
    }
});