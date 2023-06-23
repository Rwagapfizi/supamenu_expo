import React from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

function ScanScreen() {
    const navigation = useNavigation();
    return (
        <>
            <StatusBar style='light' />
            <View style={scan.mainscan}>
                <View style={{ flex: 1, paddingTop: 100, width: '80%' }}>
                    <TouchableHighlight
                        onPress={() => navigation.navigate('List')}
                        underlayColor="#ccc"
                        style={{ width: '100%', borderRadius: 15, }}
                    >
                        <Text style={scan.search}>Search for your preferred restaurant</Text>
                    </TouchableHighlight>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={scan.appTitle}>or</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Image style={scan.image} source={require("../assets/images/qr.png")} />
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={[scan.appTitle, { paddingTop: 50 }]}>Scan, Pay and Enjoy!</Text>
                </View>
            </View>
        </>
    );
}

export default ScanScreen;

const scan = StyleSheet.create({
    mainscan: {
        backgroundColor: "#F7941D",
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    image: {
        width: 150,
        height: 150,
    },

    appTitle: {
        paddingTop: 20,
        fontFamily: 'Roboto',
        fontSize: 25,
        fontWeight: 'bold',
        color: "#4d4d4d",
    },
    search: {
        borderRadius: 15,
        width: '100%',
        alignSelf: 'center',
        backgroundColor: 'white',
        padding: 11,
        color: '#7d7d7d',
    }
})