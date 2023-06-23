import React, { useRef, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, TouchableHighlight, ScrollView, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { login } from './style.js';

export default function LoginScreen(props) {
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
        {/* <StatusBar style="light" />
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
                        <Text style={[login.titleDesc, { fontWeight: 300 }]}>Sign in to Continue</Text>
                    </View>


                    <TextInput
                        placeholder="Your Email"
                        style={login.input}
                    />
                    <TextInput
                        placeholder="Password"
                        style={login.input}
                    />
                    <View style={login.loginButton}>
                        <TouchableHighlight
                            onPress={() => navigation.navigate('Scan')}
                            underlayColor="#c38131"
                            style={{ width: '100%', borderRadius: 10 }}
                        >
                            <Text style={login.buttonText}>Sign In</Text>
                        </TouchableHighlight>
                    </View>

                    <Text style={{ fontWeight: 'bold', color: 'gray', alignSelf: 'center', paddingVertical: 20 }} >----------------------  OR  ----------------------</Text>

                    <View style={login.extLogin}>

                        <View style={login.loginExt}>
                            <TouchableHighlight
                                onPress={() => console.log('Logged in with Google')}
                                underlayColor="#eeeeee"
                                style={{ width: '100%', borderRadius: 5, }}
                            >
                                <Text style={login.loginExtText}>Login with Google</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={login.loginExt}>
                            <TouchableOpacity
                                onPress={() => console.log('Logged in with Facebook')}
                                underlayColor="#aaaaaa"
                                style={{ width: '100%', borderRadius: 5, }}
                            >
                                <Text style={login.loginExtText}>Login with Facebook</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Text style={{ color: '#F7941D', fontWeight: 'bold', padding: 10 }}>Forgot Password?</Text>
                    <Text style={{ fontWeight: 300, fontSize: 13 }}>
                        Don't have an account?
                        <TouchableHighlight
                            // onPress={() => navigation.navigate('Register')}
                            onPress={props.showRegister}
                            style={{ paddingTop: 10 }}
                            underlayColor="#ffffff"
                        >
                            <Text style={{ color: '#F7941D', paddingTop: 10 }}>  Register!</Text>
                        </TouchableHighlight>
                    </Text>
                    {/* </ScrollView> */}
                </Animated.View>
            {/* </View> */}
        </>
    );
};
