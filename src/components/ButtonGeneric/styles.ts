import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme';
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    container: {
        width: 147,
        height: 48,
        backgroundColor: theme.colors.white,
        borderRadius: 24,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 180,
        marginHorizontal: 138
    },

    title: {
        flex: 1,
        color: theme.colors.primary,
        fontSize: RFValue(16, 580), // FontSize Responsive
        fontFamily: theme.fonts.title500,
        textAlign: 'center',
    },
});