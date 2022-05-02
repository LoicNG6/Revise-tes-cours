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
    }
});

export default MainContainer;