import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: 48,
        height: 48,
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 32,
        marginLeft: 'auto',
        marginTop: 64,
    },
    avatar: {
        transform: [{ rotateY: '180deg' }],
        width: 46,
        height: 46,
        borderRadius: 50,
    }
});