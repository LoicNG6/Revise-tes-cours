import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import MainContainer from "../components/styles/Containers";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registration from "./auth/registration/Register";
import Login from "./auth/login/Login";
const Stack = createNativeStackNavigator();

export default function Home() {
    const [items, setItems] = useState();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://localhost:3001/");
                const json = await response.json();
                console.log(json);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, [])

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomePage">
                <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Registration" component={Registration} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function HomePage({ navigation }: any) {
    var topLine =
        "Le meilleur investissement que tu puisses faire est celui que tu fais en toi, en ta matière grise." +
        "Prépare ton avenir avec Révise tes exams." +
        "Trouve tous les sujets d'examens de toutes les fac de ta région ici.";

    var logoPath = require('../assets/images/rte-logo.png');

    const [isPressed, setIsPressed] = useState(false);
    const [isLogin, SetIsLogin] = useState(false);

    const goTo = (name: string) => {

        setIsPressed(true);

        if (name == "Login") {
            SetIsLogin(true);
            navigation.navigate('Login');
        } else {
            navigation.navigate('Registration');
        }
        setTimeout(() => {
            setIsPressed(false);
            SetIsLogin(false);
        }, 1000);
    }

    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={['#CC9644', '#90621C']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={HomePageStyle.mainContainer}
            >
                <View style={{ flex: 0.8, justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Image source={logoPath} style={HomePageStyle.logo} />
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={MainContainer.title1}>Révise tes exams</Text>
                        <Text style={HomePageStyle.tagline}>
                            {topLine}
                        </Text>
                    </View>
                    <View style={LoginRegistrationStyle.buttonContainer}>
                        <View style={{ flexDirection: 'column' }}>
                            <Pressable
                                onPress={() => goTo('Login')}
                                style={isPressed && isLogin ? LoginRegistrationStyle.pressed : LoginRegistrationStyle.button}
                            >
                                <Text style={isPressed && isLogin ? LoginRegistrationStyle.pressed_text : LoginRegistrationStyle.text} >
                                    Connexion
                                </Text>
                            </Pressable>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Pressable
                                onPress={() => goTo('Registration')}
                                style={isPressed && !isLogin ? LoginRegistrationStyle.pressed : LoginRegistrationStyle.button}
                            >
                                <Text style={isPressed && !isLogin ? LoginRegistrationStyle.pressed_text : LoginRegistrationStyle.text}>
                                    Inscription
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </LinearGradient>

        </View>
    );
}

const HomePageStyle = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 30,
    },
    logo: {
        width: 150,
        height: 150,
        tintColor: 'white',
    },

    test: {
        flexDirection: 'row',
    },
    tagline: {
        fontSize: 23,
        color: 'white',
        marginTop: 8,
    },
});


const LoginRegistrationStyle = StyleSheet.create({
    button: {
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
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 50,
        elevation: 3,
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: 'rgb(250, 250, 255)',
    },
    pressed_text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        textDecorationLine: 'underline',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
})