import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, StyleSheet } from 'react-native';
import { LoadingPageStyle } from '../styleComponents/main';
import { LinearGradient } from 'expo-linear-gradient';
import AnimatedLoader from "react-native-animated-loader";
import MaskedView from '@react-native-masked-view/masked-view';

export default function LoadingPage() {
    return (
        <View style={LoadingPageStyle.container}>
            <LinearGradient
                colors={['#CC9644', '#90621C']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={LoadingPageStyle.background}
            >
                <Image source={require('../../assets/rte-logo.png')} style={LoadingPageStyle.logo} />
                {/* <AnimatedLoader
                    visible={visible}
                    overlayColor="rgba(255,255,255,0.75)"
                    source={require("../../assets/progress_bar.json")}
                    animationStyle={styles.pb}
                    speed={1}
                >
                    <Text>Doing something...</Text>
                </AnimatedLoader> */}
            </LinearGradient>
            <StatusBar style="auto" />
        </View>
    )
}


const styles = StyleSheet.create({
    pb: {
        width: 100,
        height: 100
    }
});