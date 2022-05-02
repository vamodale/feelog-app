import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    image: {
        width: 212,
        height: 32,
        marginTop: 56,
        marginHorizontal: 74,
    },

    positionText: {
        marginTop: 268,
        marginHorizontal: 99,
    },

    title: {
        fontFamily: theme.fonts.title400,
        fontSize: RFValue(16, 580),
        color: theme.colors.white,
    },

    subtitle: {
        fontFamily: theme.fonts.title600,
        fontSize: RFValue(16, 580),
        color: theme.colors.white
    },
})
