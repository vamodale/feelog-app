import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.primary,
	},

	profile: {
		flexDirection: "row",
		marginTop: 128,
		marginLeft: 32,
	},
	data: {
		flex: 1,
		marginLeft: 24,
		marginRight: 32,
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

	year: {
		fontSize: 24,
		fontFamily: theme.fonts.title600,
		color: theme.colors.white,
		marginTop: 10,
	},

	date: {
		fontSize: 16,
		fontFamily: theme.fonts.title400,
		color: theme.colors.white,
	},

	emotion: {
		flex: 1,
		marginTop: 8,
		borderRadius: 24,
		borderWidth: 2,
		width: '100%',
		height: 48,
		alignItems: 'center',
		justifyContent: 'center',
	},

	emotionDescription: {
		fontSize: 16,
		fontFamily: theme.fonts.title400,
		color: theme.colors.white
	},

	box: {
		backgroundColor: theme.colors.primary,
		marginTop: 32,
		color: theme.colors.white,
		borderRadius: 24,
		elevation: 4,
		justifyContent: 'center',
		marginHorizontal: 32,
		marginVertical: 24,
	},

	description: {
		color: theme.colors.white,
		fontFamily: theme.fonts.title300,
		fontSize: 16,
		height: 229
	},
});