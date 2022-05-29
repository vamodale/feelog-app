import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    buttonWrapper: {
        backgroundColor: theme.colors.primary,
        height: 68,
        width: 68,
        borderRadius: 34,
        zIndex: 2,
        elevation: 2,
        position: 'absolute',
        bottom: 75,
        left: '41-50%',
    },
    pictureButton: {
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