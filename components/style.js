import { StyleSheet } from "react-native";

export const login = StyleSheet.create({
    container: {
        // flex: 3,
        height: 620,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        padding: 20,
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        alignItems: 'center',
    },
    appTitle: {
        fontFamily: 'Roboto',
        fontSize: 40,
        padding: 20,
        paddingBottom: 10,
        fontWeight: 'bold',
        color: "black",

    },

    titleDesc: {
        fontSize: 15,
        padding: 3,
    },

    input: {
        width: '100%',
        height: 40,
        borderColor: '#dddddd',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    loginButton: {
        flexDirection: 'row',
        marginVertical: 5,
        backgroundColor: '#F7941D',
        width: '100%',
        borderRadius: 10,
        justifyContent: 'center'
    },
    buttonText: {
        width: '100%',
        padding: 10,
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },

    extlogin: {
        alignItems: 'center',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        justifyContent: 'center'
        // height: 200,
    },

    loginExt: {
        flexDirection: 'row',
        // flex: 1,
        // height: 45,
        // width: '100%',
        borderWidth: 1,
        borderColor: '#cdcdcd',
        borderRadius: 5,
        margin: 5,
        // padding: 5,
    },

    loginExtText: {
        // flex: 1,
        textAlign: 'center',
        width: '100%',
        padding: 15,
        color: '#505050',
    }
});