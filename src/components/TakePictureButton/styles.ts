import { AutoFocus } from "expo-camera/build/Camera.types";
import { Dimensions, StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme';


const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    buttonWrapper: {
        backgroundColor: theme.colors.primary,
        height: 68,
        width: 68,
        borderRadius: 34,
        zIndex: 6,
        elevation: 6,
        position: 'absolute',
        bottom: 64,
        left: windowWidth/2-34,
    },
    pictureButton: {
        marginVertical: 2,
        marginHorizontal: 2,
        width: 64,
        height: 64,
        borderRadius: 32,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.primary,
    }
});