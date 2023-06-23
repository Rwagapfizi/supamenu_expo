import React, { useState } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import LoginScreen from './LoginScreen.js';
import RegisterScreen from './RegisterScreen.js';

export default function AuthScreen() {

    //1 for Login, 2 for Register
    const [authStatus, setAuthStatus] = useState(1);
    function showLogin(){
        setAuthStatus(1);
    }
    function showRegister(){
        setAuthStatus(2);
    }
    
    return (
        <>
            <StatusBar style='light' />
            <View style={{ backgroundColor: '#F7941D', flex: 1 }}>
                {authStatus == 1 ? (
                    <LoginScreen
                        showLogin={showLogin}
                        showRegister={showRegister}
                    />
                ) : (
                    <RegisterScreen
                        showLogin={showLogin} 
                        showRegister={showRegister}
                    />
                )}
            </View>
        </>
    )
};