import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme';
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({

    container: {
        backgroundColor: theme.colors.white,
        borderRadius: 24,
        zIndex: 5,
        elevation: 5,
        position: 'absolute',
        bottom: 72,
        paddingHorizontal:48,
        paddingVertical: 12
    },

    title: {
            flex: 1,
            color: theme.colors.primary,
            fontSize: 16,
            fontFamily: theme.fonts.title500,
            textAlign: 'center',
    }
});