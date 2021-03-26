import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    result:{
        borderRadius: 200, 
        borderWidth: 8,
        padding: 32,
        margin: 20,
        alignItems: 'center',
        width: 275,
        height: 275,
        justifyContent: 'flex-start',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.30,
        shadowRadius: 5.84,
        elevation: 5,
        zIndex: 0
    },
    ratio:{
        fontSize: 64,
        marginTop: 50
    },
    percent:{
        fontSize: 24,
    },
    caption:{
        fontSize: 24,
        alignSelf: 'center'
    }

})

export default styles