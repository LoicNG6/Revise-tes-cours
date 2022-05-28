import React, { useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import { View, Text, Image, TextInput, Pressable } from "react-native";
import { MainContainer, Button, RegistrationPage, } from "../../components/styles/Container";
import { logo_path } from "./RegisterDatas";

export default function UserInformation() {
    //declare state
    const [validate, setValidate] = useState(false);
    const [information, setInformation] = useState({
        username: null,
        firstname: null,
        lastname: null,
        email: null,
        password: null,
    });

    //modify states
    const onChangeInformation = (field, value) => {
        setInformation(prevState => ({
            ...prevState,
            [field]: value,
        }));
    };

    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={['#CC9644', '#90621C']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[MainContainer.container, { padding: 10, paddingTop: 0 }]}
            >
                <View style={[MainContainer.container]}>
                    <View style={[{
                        flex: 1,
                        justifyContent: 'space-between',
                    }]}>
                        <View style={[{ flex: 0.1, alignItems: "center", }]}>
                            <Image source={logo_path} style={MainContainer.logo_in_the_app} />
                        </View>

                        <View style={[{ flex: 0.1, alignItems: 'center', justifyContent: "center" }]}>
                            <View>
                                <Text style={[RegistrationPage.title]}>
                                    Informations Personnelles
                                </Text>
                            </View>
                        </View>

                        <View style={[
                            {
                                flex: 0.65,
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                            }
                        ]}>
                            <View>
                                <Text style={[RegistrationPage.input_label]}>
                                    Nom d'utilisateur
                                </Text>
                                <View style={[RegistrationPage.input_container]}>
                                    <TextInput
                                        value={information.username}
                                        onChangeText={value => onChangeInformation('username', value)}
                                        style={{ color: "white", fontSize: 17 }}
                                        placeholderTextColor="rgba(20,20,20,0.3)"
                                    ></TextInput>
                                </View>
                            </View>
                            <View>
                                <Text style={[RegistrationPage.input_label]}>
                                    Nom
                                </Text>
                                <View style={[RegistrationPage.input_container]}>
                                    <TextInput
                                        value={information.firstname}
                                        onChangeText={value => onChangeInformation('firstname', value)}
                                        style={{ color: "white", fontSize: 17 }}
                                        placeholderTextColor="rgba(20,20,20,0.3)"
                                    ></TextInput>
                                </View>
                            </View>
                            <View>
                                <Text style={[RegistrationPage.input_label]}>
                                    Prénom
                                </Text>
                                <View style={[RegistrationPage.input_container]}>
                                    <TextInput
                                        value={information.lastname}
                                        onChangeText={value => onChangeInformation('lastname', value)}
                                        style={{ color: "white", fontSize: 17 }}
                                        placeholderTextColor="rgba(20,20,20,0.3)"
                                    ></TextInput>
                                </View>
                            </View>
                            <View>
                                <Text style={[RegistrationPage.input_label]}>
                                    E-mail
                                </Text>
                                <View style={[RegistrationPage.input_container]}>
                                    <TextInput
                                        value={information.email}
                                        onChangeText={value => onChangeInformation('email', value)}
                                        style={{ color: "white", fontSize: 17 }}
                                        placeholderTextColor="rgba(20,20,20,0.3)"
                                    ></TextInput>
                                </View>
                            </View>
                            <View>
                                <Text style={[RegistrationPage.input_label]}>
                                    Mot de passe
                                </Text>
                                <View style={[RegistrationPage.input_container]}>
                                    <TextInput
                                        value={information.password}
                                        style={{ color: "white", fontSize: 17 }}
                                        placeholderTextColor="rgba(20,20,20,0.3)"
                                    ></TextInput>
                                </View>
                            </View>
                            <View>
                                <Text style={[RegistrationPage.input_label]}>
                                    Mot de passe
                                </Text>
                                <View style={[RegistrationPage.input_container]}>
                                    <TextInput
                                        value={information.password}
                                        onChangeText={value => onChangeInformation('password', value)}
                                        style={{ color: "white", fontSize: 17 }}
                                        placeholderTextColor="rgba(20,20,20,0.3)"
                                    ></TextInput>
                                </View>
                            </View>
                        </View>

                        <View style={{
                            flex: 0.2,
                            justifyContent: "center",
                        }}>
                            <Pressable
                                style={[validate ? Button.pressed : null, Button.base]}
                            >
                                <Text style={validate ? [Button.pressed_text] : [RegistrationPage.title]}>
                                    Suivant
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </View>
    )
}