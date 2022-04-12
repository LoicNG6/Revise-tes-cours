import * as  React from 'react';
import { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import ProgressBar from "react-native-animated-progress";
import HomePage from './HomePage';
import MainContainer from '../components/styles/Containers';

export default function LoadingPage() {
    var logoPath = require('../assets/images/rte-logo.png');

    //To pass from the loading page to the first home page (sign in/up)
    const [showLoader, setShowLoader] = useState(true);
    var count = 5;
    var countDown = setInterval(function () {
        if (count <= 0) {
            setShowLoader(false);
            clearInterval(countDown);
        }
        count -= 1;
    }, 250);

    if (showLoader) {
        return (
            <View >
                <LinearGradient
                    colors={['#CC9644', '#90621C']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                >
                    <MaskedView
                        style={{ height: '100%' }}
                        maskElement={
                            <View style={MainContainer.container}>
                                <View style={LoadingPageStyle.logoContainer}>
                                    <Image source={logoPath} style={LoadingPageStyle.logo} />
                                    <View style={{ minWidth: '50%' }}>
                                        <ProgressBar height={10} progress={100} trackColor={'white'} />
                                    </View>
                                </View>
                            </View>
                        }
                    >
                        <View style={MainContainer.container}>
                            <View style={LoadingPageStyle.logoContainer}>
                                <Image source={logoPath} style={LoadingPageStyle.logo} />
                                <View style={{ minWidth: '55%' }}>
                                    <ProgressBar height={10} progress={100} trackColor={'white'} backgroundColor={'#90621C'} />
                                </View>
                            </View>
                        </View>
                    </MaskedView>
                </LinearGradient>
            </View>
        );
    } else {
        return (
            <HomePage />
        );
    }
}

const LoadingPageStyle = StyleSheet.create({
    logoContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '85%',
    },
    logo: {
        width: 150,
        height: 150,
        tintColor: 'white',
    },
    progress_bar: {
        width: "200px",
        height: "100px",
    },
});