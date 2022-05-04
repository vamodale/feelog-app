import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: "center"
	},

	profile: {
		flexDirection: "row",
		marginLeft: 32,
	},

	persona: {
		flexDirection: "row",
		bottom: 80,
		backgroundColor: theme.colors.primary,
		height: 128,
		width: 128,
		borderRadius: 64,
		zIndex: 1, // works on ios
		elevation: 1, // works on android
	},

	picture: {
		marginVertical: 2,
		marginHorizontal: 2,
		width: 124,
		height: 124,
		borderRadius: 62,
		alignItems: 'center',
		justifyContent: "center",
		backgroundColor: theme.colors.primary,
	},

	icon: {
		width: 24,
		height: 24,
		resizeMode: 'stretch',
		marginLeft: 65,
	},

	info: {
		fontSize: RFValue(14, 600), // FontSize Responsive
		fontFamily: theme.fonts.title600,
		color: theme.colors.white,
		marginTop: 40,
		marginRight: 40,
		marginLeft: 2
	},

	infoContainer: {
		flexDirection: "row",
		padding: 8
	},

	userInfo: {
		fontSize: RFValue(14, 600), // FontSize Responsive
		fontFamily: theme.fonts.title400,
		color: theme.colors.white,
	},

	userName: {
		fontSize: RFValue(24, 600), // FontSize Responsive
		fontFamily: theme.fonts.title600,
		color: theme.colors.white,
		marginLeft: 60,
		marginTop: -55,
	},

	pressable: {
		borderRadius: 62,
		borderColor: theme.colors.white,
		borderWidth: 1,
		padding: 12,
		paddingHorizontal: 24,
		marginTop: 24,
	}
});