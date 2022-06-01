import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.primary,
	},

	profile: {
		flexDirection: "row",
		alignItems: 'center',
		marginTop: 128,
		marginLeft: 32,
	},

	persona: {
		flexDirection: "row",
		backgroundColor: theme.colors.primary,
		height: 128,
		width: 128,
		borderRadius: 64,
	},

	picture: {
		marginVertical: 2,
		marginHorizontal: 2,
		width: 124,
		height: 124,
		borderRadius: 62,
		backgroundColor: theme.colors.primary,

	},

	userName: {
		fontSize: 24,
		fontFamily: theme.fonts.title600,
		color: theme.colors.white,
		marginLeft: 32,
		marginRight: 32
	},

	info: {
		fontSize: 14,
		fontFamily: theme.fonts.title600,
		color: theme.colors.white,
		marginRight: 24
	},

	infoContainer: {
		flexDirection: 'column',
		marginHorizontal: 32,
		marginTop: 24,
	},

	infoRow: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 24
	},

	userInfo: {
		fontSize: 14, // FontSize Responsive
		fontFamily: theme.fonts.title400,
		color: theme.colors.white,
		marginRight: 20,
	},

	pressable: {
		justifyContent: "space-between",
		flexDirection: "row",
		borderRadius: 62,
		borderColor: theme.colors.white,
		borderWidth: 1,
		padding: 12,
		alignItems: 'center',
		flex: 1
	}
});