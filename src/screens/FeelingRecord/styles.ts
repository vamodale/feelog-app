import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.primary,
        alignItems: 'center', 
    },

    selectButton: {
        paddingHorizontal: 0,
        marginHorizontal: 32,
        width: windowWidth-64,
        marginTop: 32,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: theme.colors.primary,
        backgroundColor: theme.colors.primary,
        color: theme.colors.white
    },

    selectTextButton: {
        backgroundColor: theme.colors.primary,
        color: theme.colors.white,
        fontFamily: theme.fonts.title400,
        fontSize: 16,
        textAlign: 'left',
        marginHorizontal: 24,
    },

    selectRow: {
        borderRadius: 24,
        borderWidth: 1,
        borderColor: theme.colors.white
    },

    selectTextRow: {
        textAlign: 'left',
        marginHorizontal: 24,
        color: theme.colors.white,
        fontFamily: theme.fonts.title400,
        fontSize: 16,
    },

    selectDropDown: {
        shadowOpacity: 0,
        elevation: 0,
        shadowRadius: 0,
        borderRadius: 24,
        borderWidth: 1,
        backgroundColor: theme.colors.primary,
        borderColor: theme.colors.white,
    },

    input: {
        width: windowWidth-64,
        backgroundColor: theme.colors.primary,
        marginTop: 32,
        color: theme.colors.white,
        borderRadius: 16,
        elevation: 4,
        borderColor: theme.colors.white,
        borderWidth: 1,
        justifyContent: 'center',
        marginHorizontal: 32,
        marginVertical: 24,
        paddingHorizontal: 24,
        paddingVertical: 24
    },

    icon: {
        marginRight: 24,
    }
});