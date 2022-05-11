import * as  React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-community/masked-view';
import ProgressBar from "react-native-animated-progress";
import {MainContainer, Button} from '../../components/styles/Container';
import Homes from '../../routes/Homes';

export default function Loading() {
    var logoPath = require('../../assets/images/rte-logo.png');

    //To pass from the loading page to the first home page (sign in/up)
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        var count = 5;
        var countDown = setInterval(function () {
            if (count <= 0) {
                setShowLoader(false);
                clearInterval(countDown);
            }
            count -= 1;
        }, 250);
    }, []);

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
            <Homes />
        );
    }

    // return (
    //      <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
    //         <Text>hello</Text>
    //     </View>
    // );
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