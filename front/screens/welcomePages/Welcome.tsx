import React, { useState } from "react";
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { MainContainer, Button } from '../../components/styles/Container';

export default function Welcome({ navigation }: any) {
    const topLine = "Le meilleur investissement que tu puisses faire est celui que tu fais en toi, en ta matière grise." +
        "Prépare ton avenir avec Révise tes exams." +
        "Trouve tous les sujets d'examens de toutes les fac de ta région ici.";
    const logoPath = require('../../assets/images/rte-logo.png');
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
                style={[MainContainer.container, { padding: 30 }]}
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
                    <View style={ButtonStyles.buttonContainer}>
                        <View style={{ flexDirection: 'column' }}>
                            <Pressable
                                onPress={() => goTo('Login')}
                                style={[Button.base, isPressed && isLogin ? Button.pressed : null]}
                            >
                                <Text style={[
                                    Button.pressed_text,
                                    !isPressed ? ButtonStyles.unpressed_button_text : null,
                                ]}>
                                    Connexion
                                </Text>
                            </Pressable>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Pressable
                                onPress={() => goTo('Registration')}
                                style={[Button.base, isPressed && !isLogin ? Button.pressed : null]}
                            >
                                <Text style={[
                                    Button.pressed_text,
                                    !isPressed ? ButtonStyles.unpressed_button_text : null,
                                ]}>
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


//Styles of current the component
const WelcomeStyle = StyleSheet.create({
    tagline: {
        fontSize: 23,
        color: 'white',
        marginTop: 8,
    },
});

const ButtonStyles = StyleSheet.create({
    unpressed_button_text: {
        color: 'white',
        textDecorationLine: 'underline',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
})