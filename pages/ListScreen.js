import React from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet,
    FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'expo-status-bar';
// import { useNavigation } from '@react-navigation/native';


export default function ListScreen() {
    const navigation = useNavigation();
    const handleBackPress = () => {
        navigation.goBack();
    };

    const handleOrderPress = (item) => {
        navigation.navigate('Order', { item }); // Navigate to the Edit screen with the itemId
    };

    const data = [
        { id: '1', name: 'Resto 1' },
        { id: '2', name: 'Resto 2' },
        { id: '3', name: 'Resto 3' },
        { id: '4', name: 'Resto 4' },
        { id: '5', name: 'Resto 5' },
        { id: '6', name: 'Resto 6' },
        // ...and so on
    ];

    const renderRestaurantItem = ({ item: resto }) => (
        // return (
        // <View style={styles.restaurantItem}>
        <TouchableOpacity
            onPress={() => handleOrderPress(resto)}
            style={styles.restaurantItem}
        >
            <Image style={styles.restaurantImg} source={require("../assets/images/wine.png")} />
            <View style={styles.restaurantDesc}>
                <Text style={{ fontWeight: 'bold', paddingBottom: 5, fontSize: 15 }}>{resto.name}</Text>
                <Text style={{ fontWeight: 400, paddingTop: 5, fontSize: 11 }}>World, African, Pizzerian, Coffee</Text>
            </View>
        </TouchableOpacity>
        // </View>
        // )
    );

    return (
        <>
            <StatusBar style='dark' />
            <View style={styles.mainContainer}>
                {/* <Text>Bomboclat</Text> */}
                <View style={styles.searchContainer}>
                    <TouchableOpacity onPress={handleBackPress} style={styles.backArrow}>
                        <Icon name="chevron-left" size={25} color="#F7941D" />
                    </TouchableOpacity>
                    <TextInput style={styles.searchBar} placeholder="Search..." />
                </View>

                <View style={styles.restaurantMenu}>
                    <Text style={{
                        color: '#F7941D',
                        alignSelf: 'flex-start',
                        marginBottom: 10,
                    }} >Nearby Restaurants</Text>
                    <View style={styles.restaurantList}>
                        <FlatList
                            data={data}
                            // renderItem={(itemData) => {
                            //     resto = itemData.item;
                            //     return(
                            //         <RestaurantItem  
                            //             id={resto.id}
                            //             name={resto.name}
                            //             handleOrderPress={handleOrderPress}
                            //         />
                            //     )
                            // }}

                            renderItem={renderRestaurantItem}
                            // renderItem={renderItem}
                            keyExtractor={(resto) => resto.id}
                        />
                    </View>
                </View>

            </View>
        </>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: 30,
        // alignItems: 'center',
        justifyContent: 'center',
    },

    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#eaeaea',
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
    },

    backArrow: {
        padding: 10,
        backgroundColor: '#ddd',
        borderRadius: 8,
        marginRight: 10,
    },

    searchBar: {
        flex: 1,
        height: 40,
        padding: 10,
    },

    restaurantMenu: {
        flex: 7,
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 30,
    },

    restaurantList: {
        width: '100%',
        paddingBottom: 10,
    },

    restaurantItem: {
        backgroundColor: '#eaeaea',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 16,
        width: '100%',
        marginVertical: 10,
    },

    restaurantImg: {
        height: 100,
        width: 100,
        flex: 1,
    },

    restaurantDesc: {
        justifyContent: 'center',
        flex: 2,
    },
})