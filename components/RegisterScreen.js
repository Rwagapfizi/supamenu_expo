import React, { useRef, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, TouchableHighlight, ScrollView, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { login } from './style.js';

export default function RegisterScreen(props) {
    const slideUpAnimation = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation();

    useEffect(() => {
        Animated.timing(slideUpAnimation, {
            toValue: 1,
            duration: 500, // Adjust the duration as per your preference
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <>
        {/* <StatusBar style='light' />
            <View style={{ backgroundColor: '#F7941D', flex: 1 }}> */}
                <Animated.View
                    style={[
                        login.container, {
                            transform: [
                                {
                                    translateY: slideUpAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [300, 0], // Adjust the range as per your preference
                                    }),
                                },
                            ],
                        },
                    ]}
                >
                    {/* <ScrollView> */}
                    <View style={{ alignItems: 'center', paddingBottom: 20, }}>

                        <Text style={login.appTitle}>Supa<Text style={{ color: "#F7941D" }}>Menu</Text></Text>

                        <Text style={[login.titleDesc, { fontWeight: 'bold', }]}>Welcome</Text>
                        <Text style={[login.titleDesc, { fontWeight: 300 }]}>Please fill in the information</Text>
                    </View>


                    <TextInput
                        placeholder="Full Name"
                        style={login.input}
                    />
                    <TextInput
                        placeholder="Phone Number"
                        style={login.input}
                    />
                    <TextInput
                        placeholder="Email"
                        style={login.input}
                    />
                    <TextInput
                        placeholder="Password"
                        style={login.input}
                    />
                    <View style={login.loginButton}>
                        <TouchableHighlight
                            onPress={() => console.log('Login pressed')}
                            underlayColor="#c38131"
                            style={{ width: '100%', borderRadius: 10 }}
                        >
                            <Text style={login.buttonText}>Proceed</Text>
                        </TouchableHighlight>
                    </View>

                    <Text style={{ fontWeight: 'bold', color: 'gray', alignSelf: 'center', paddingVertical: 15 }} >----------------------  OR  ----------------------</Text>

                    {/* <View style={login.extLogin}> */}
                    <Text style={[login.titleDesc, { fontWeight: 300 }]}>If you have a PMG account</Text>
                    <View style={login.loginButton}>
                        <TouchableHighlight
                            onPress={() => console.log('Logged in with PMG')}
                            underlayColor="#c38131"
                            style={{ width: '100%', borderRadius: 10 }}
                        >
                            <Text style={[login.buttonText, { marginTop: 1 }]}>Sign In</Text>
                        </TouchableHighlight>
                    </View>
                    {/* </View> */}

                    <Text style={{ fontWeight: 300, fontSize: 14, padding: 10, alignSelf: 'center' }}>Already have an account? <TouchableOpacity onPress={props.showLogin} style={{}}><Text style={{ color: '#F7941D' }}> Sign in!</Text></TouchableOpacity> </Text>
                    {/* </ScrollView> */}
                </Animated.View>
            {/* </View> */}
        </>
    );
};


