import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

    camera: {
        position: 'relative',
        flex: 1
    },

    ButtonBack: {
        borderRadius: 24,
        width: 48,
        height: 48,
        top: 64,
        left: 32,
        borderColor: '#FFFFFF',
        borderWidth: 1,
        backgroundColor: theme.colors.primary,
        zIndex: 3,
        elevation: 3,
        position: 'absolute'
    },

    Icon: {
        marginTop: 11,
        marginLeft: 11,
    },

    ModalView: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: theme.colors.primary
    },

    NextButton: {
        backgroundColor: theme.colors.white,
        borderRadius: 24,
        zIndex: 5,
        elevation: 5,
        position: 'absolute',
        bottom: 72,
        paddingHorizontal:48,
        paddingVertical: 12
    },

    NextButtonText: {
            flex: 1,
            color: theme.colors.primary,
            fontSize: 16,
            fontFamily: theme.fonts.title500,
            textAlign: 'center',
    }
})
