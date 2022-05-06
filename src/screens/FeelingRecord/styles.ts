import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Heading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '99%',
    },

    box: {
        display: "flex",
        justifyContent: "center",
        marginTop: 32,
        marginHorizontal: 32,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#FFA34C',
        height: 55,
        marginBottom: 20,
        width: '85%',
    },

    pickerbox: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 25,
        color: "white",
        fontFamily: theme.fonts.title400,
        borderRadius: 25,
        marginHorizontal: 15,
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