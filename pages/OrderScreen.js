import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const WhiteText = ({ children, style }) => {
	return <Text style={[{color: 'white'}, style]}>{children}</Text>;
};

export default function OrderScreen({ route }) {
	const { item: resto } = route.params; // Get the ID of the component to edit

	return (
		<>
			<StatusBar style='light' />
			<View style={styles.mainContainer}>
				<View style={{ alignItems: 'center' }}>
					<Text style={styles.restoTitle}>{resto.name}</Text>
				</View>
				<View style={styles.restoCall}>
					<View style={{
						borderRightColor: '#F7941D', borderRightWidth: 1, flex: 1, alignItems: 'center'
					}} >
						{/* <Icon name="table-picnic" size={25} color="#F7941D" /> */}
						<View style={{flexDirection: 'row'}}>
							<Image
								source={require('../assets/images/table.png')}
								style={{
									height: 40,
									width: 40,
									flex: 1
								}} />
								<Text style={{
									color: 'white', fontSize: 20, 
									justifyContent: 'center',
									alignSelf: 'center',
									padding: 10, flex:1
								}}>N8</Text>
						</View>
						<WhiteText style={{fontWeight: 'bold', padding: 5, fontSize: 20}}>Ordered</WhiteText>
					</View>
					<View style={{
						flex: 1
					}} >
						{/* <FontAwesomeIcon icon="phone" size={25} color="#F7941D" /> */}
						<FontAwesomeIcon icon={['fas', 'phone']} size={24} color="#F4941D" />
						<Icon name="fa-phone" size={25} color="#F7941D" />
					</View>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		padding: 50,
		backgroundColor: 'black'
	},

	restoTitle: {
		color: '#F7941D',
		fontSize: 30,
		fontWeight: 'bold',
	},

	restoCall: {
		flexDirection: 'row',
		marginVertical: 30,
	}
})