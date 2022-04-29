import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: 209,
        height: 48,
        backgroundColor: theme.colors.white,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 96,
    },
    title: {
        flex: 1,
        color: theme.colors.primary,
        fontSize: 16,
        fontFamily: theme.fonts.title500,
        textAlign: 'center',
        marginRight: 30,
    },
    icongoogle: {
        marginLeft: 40
    }
});