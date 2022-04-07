import { StyleSheet } from "react-native";

const LoadingPageStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        height: "100%",
    },
    logo: {
        width: '100px',
        height: '100px',
        tintColor: 'white'
    },
    progress_bar: {
        width: "100px",
        height: "100px",
    },
});

export { LoadingPageStyle };  