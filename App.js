import React from 'react';
import { View, StyleSheet } from 'react-native';
import SplashScreen from './pages/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { AppRegistry } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ScanScreen from './pages/ScanScreen';
import ListScreen from './pages/ListScreen';
import AuthScreen from './components/AuthScreen';
import OrderScreen from './pages/OrderScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <View style={styles.mainContainer}>
            <NavigationContainer>
                <Stack.Navigator>

                    <Stack.Screen name="List" options={{headerShown: false}} component={ListScreen}/>
                    <Stack.Screen name="Order" options={{ headerShown: false }} component={OrderScreen} />
                    <Stack.Screen name="Auth" options={{ headerShown: false }} component={AuthScreen} />
                    <Stack.Screen name="Scan" options={{ headerShown: false }} component={ScanScreen} />
                    <Stack.Screen name="Splash" options={{ headerShown: false }} component={SplashScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
};

AppRegistry.registerComponent('MyApp', () => App);

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        
        // Other styles
    },
});
