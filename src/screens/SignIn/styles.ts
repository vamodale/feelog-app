import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center"
    },

    feelog: {
        width: 232,
        height: 93,
        resizeMode: 'stretch',
    },

    account: {
        fontSize: RFValue(12, 580), // FontSize Responsive
        fontFamily: theme.fonts.title400,
        color: theme.colors.white
    },

    login: {
        fontSize: RFValue(12, 580), // FontSize Responsive
        fontFamily: theme.fonts.title600,
        color: theme.colors.white
    },

    teste: {
        marginTop: 24,
        alignItems: 'center',
    }
});