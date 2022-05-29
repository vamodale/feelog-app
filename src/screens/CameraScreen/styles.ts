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
    }
})
