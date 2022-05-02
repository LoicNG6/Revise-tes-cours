import React, { useEffect, useState } from "react";
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import MainContainer from '../../components/styles/Container';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registration from "../authentication/Register";
import Login from "../authentication/Login";
import { result } from "../../database/FetchDatabase";

const Stack = createNativeStackNavigator();

export default function Home() {
    // const [items, setItems]:any = useState([{}]);

    // useEffect(() => {
    //     setItems(result);
    //     console.log(items);
    //     items.map(item => {
    //         console.log(item.id)
    //     })
    // }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Registration" component={Registration} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function Welcome({ navigation }: any) {
    const topLine = "Le meilleur investissement que tu puisses faire est celui que tu fais en toi, en ta matière grise." +
        "Prépare ton avenir avec Révise tes exams." +
        "Trouve tous les sujets d'examens de toutes les fac de ta région ici.";
    const logoPath = require('../../assets/images/rte-logo.png');
//   il faut que j'utilise mes useState dans un useEffect() en gros dans un constructeur
  
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
                style={WelcomeStyle.mainContainer}
            >
                <View style={{ flex: 0.8, justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Image source={logoPath} style={MainContainer.logo} />
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={MainContainer.title1}>Révise tes exams</Text>
                        <Text style={WelcomeStyle.tagline}>
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

const WelcomeStyle = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 30,
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