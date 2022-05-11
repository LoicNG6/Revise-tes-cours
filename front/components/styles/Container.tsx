import { StyleSheet } from "react-native";

const MainContainer = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title1: {
        color: 'white',
        fontSize: 25,
        fontWeight: '700',
    },
    logo: {
        width: 100,
        height: 100,
        tintColor: 'white',
    },
    logo_in_the_app: {
        width: 80,
        height: 80,
        tintColor: 'white',
    },
});

const Button = StyleSheet.create({
    base: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 50,
        elevation: 3,
        borderWidth: 2,
        borderColor: 'white',
    },
    pressed: {
        backgroundColor: 'rgb(250, 250, 255)',
    },
    pressed_text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
    }
});
export {MainContainer, Button};