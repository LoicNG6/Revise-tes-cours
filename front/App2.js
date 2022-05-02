/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Loading from './screens/welcomePages/Loading';

export default function App2() {
    return (
        
        <Loading />
        // <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
        //     <Text>hello</Text>
        // </View>
    );
}
