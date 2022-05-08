import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: "center"
	},

	back: {
		bottom: 140,
		left: -160,
	},

	profile: {
		marginStart: -40,
		bottom: 56,
		flexDirection: "row",
	},

	persona: {
		flexDirection: "row",
		bottom: 40,
		backgroundColor: theme.colors.primary,
		height: 168,
		width: 168,
		borderRadius: 84,
		zIndex: 1, // works on ios
		elevation: 1, // works on android
	},

	picture: {
		marginVertical: 2,
		marginHorizontal: 2,
		width: 164,
		height: 164,
		borderRadius: 82,
		backgroundColor: theme.colors.primary,
	},

	year: {
		fontSize: RFValue(24, 600), // FontSize Responsive
		fontFamily: theme.fonts.title600,
		color: theme.colors.white,
		marginLeft: 32,
		marginTop: -55,
	},
	

	feelingInfo: {
		borderRadius: 62,
		borderColor: "#4DA6FF",
		borderWidth: 1,
		padding: 12,
		paddingHorizontal: 24,
		marginTop: 54,
		fontSize: RFValue(14, 600), // FontSize Responsive
		fontFamily: theme.fonts.title400,
		color: theme.colors.white,
	},

	day: {
		fontSize: RFValue(14, 600), // FontSize Responsive
		fontFamily: theme.fonts.title400,
		color: theme.colors.white,
		marginLeft: -80,
	},

	info: {
		fontSize: RFValue(14, 600), // FontSize Responsive
		fontFamily: theme.fonts.title600,
		color: theme.colors.white,
		marginTop: 40,
		marginRight: 16,
		marginLeft: 2
	},


    input: {
        width: '85%',
        backgroundColor: theme.colors.primary,
        marginTop: 10,
        marginBottom: 30,
        color: 'white',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOpacity: 0.23,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 2.62,
        elevation: 4,
        borderColor: theme.colors.white,
        borderWidth: 1,
        justifyContent: 'center',
        marginHorizontal: 35
    },

    labels: {
        marginHorizontal: 24,
        marginVertical: 24,
        color: theme.colors.white,

    },
});