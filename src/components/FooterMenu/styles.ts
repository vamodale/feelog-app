import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme';
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: 296,
        height: 64,
        backgroundColor: theme.colors.primary,
        borderWidth: 2,
        borderColor: theme.colors.white,
        borderRadius: 32,
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
        bottom: 48,
        zIndex: 0, // works on ios
        elevation: 0, // works on android
        paddingHorizontal: 52,
        justifyContent: "space-between"
    },
    addWrapper: {
        position: "absolute",
        alignItems: 'center',
        justifyContent: "center",
        bottom: 76,
        backgroundColor: theme.colors.primary,
        height: 68,
        width: 68,
        borderRadius: 34,
        zIndex: 1, // works on ios
        elevation: 1, // works on android
    },
    addButton: {
        marginVertical: 2,
        marginHorizontal: 2,
        width: 64,
        height: 64,
        borderRadius: 32,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: theme.colors.primary,
    }
});