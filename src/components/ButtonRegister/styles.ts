import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme';
import { RFValue } from "react-native-responsive-fontsize";

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
        fontSize: RFValue(16, 580), // FontSize Responsive
        fontFamily: theme.fonts.title500,
        textAlign: 'center',
        marginRight: 30,
    },
    icongoogle: {
        marginLeft: 40
    }
});