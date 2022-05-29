import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: theme.colors.primary,
    },

    image: {
        width: 212,
        height: 32,
        marginTop: 64,
        marginHorizontal: 74,
    },

    positionText: {
        marginTop: 128,
        marginHorizontal: 99,
    },

    title: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: theme.fonts.title400,
        fontSize: RFValue(16, 680),
        color: theme.colors.white,
    },

    user: {
        fontFamily: theme.fonts.title600,
    },

    animation: {
        marginTop: 16,
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
    }
})
