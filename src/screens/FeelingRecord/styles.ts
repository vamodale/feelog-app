import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.primary,
    },

    selectButton: {
        marginTop: 32,
        marginHorizontal: 32,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: theme.colors.white,
        backgroundColor: theme.colors.primary,
        color: theme.colors.white,
    },

    selectTextButton: {
        backgroundColor: theme.colors.primary,
        color: theme.colors.white,
        fontFamily: theme.fonts.title400,
    },

    selectRow: {
        borderRadius: 24,
        borderWidth: 1,
        borderColor: theme.colors.white
    },

    selectTextRow: {
        color: theme.colors.white,
        fontFamily: theme.fonts.title400,
    },

    selectDropDown: {
        borderRadius: 24,
        backgroundColor: theme.colors.primary,
    },

    input: {
        backgroundColor: theme.colors.primary,
        marginTop: 32,
        color: theme.colors.white,
        borderRadius: 15,
        elevation: 4,
        borderColor: theme.colors.white,
        borderWidth: 1,
        justifyContent: 'center',
        marginHorizontal: 32,
        marginVertical: 24,
        paddingHorizontal: 24,
        paddingVertical: 24
    }
});