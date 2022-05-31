import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

    calendarList: {
        backgroundColor: theme.colors.primary,
    },

    header: {
        flexDirection: 'row',
        width: '100%',
        marginLeft: 0
      },
    month: {
        width: '100%',
        marginLeft: -5,
        paddingLeft: 0,
        fontSize: 16,
        fontFamily: theme.fonts.title600,
        paddingBottom: 12,
        color: theme.colors.white,
      },
})
