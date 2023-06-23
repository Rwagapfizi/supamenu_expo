import React from 'react';
import { Text, View, StyleSheet } from "react-native";
import { StatusBar } from 'expo-status-bar';

function SplashScreen() {
    return (
        <>
        <StatusBar style='light' />
            <View style={splash.mainSplash}>
                <Text style={splash.appTitle}>Supa<Text style={{ color: "white" }}>Menu</Text></Text>
            </View>
        </>
    );
}

export default SplashScreen;

const splash = StyleSheet.create({
    mainSplash: {
        backgroundColor: "#F7941D",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    appTitle: {
        fontFamily: 'Roboto',
        fontSize: 50,
        fontWeight: 'bold',
        color: "black",
    },
})