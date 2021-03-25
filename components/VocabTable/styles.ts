import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    title:{
        fontSize: 30,
        margin: 10
    },
    table:{
        borderWidth: 4,
        borderRadius: 10,
        shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
    },
    tableRow:{
        flexDirection: 'row',
        width: '100%'
    },
    ColOne:{
        fontSize: 15,
        borderWidth: 1,
        padding: 10,
        flex: 1
    },
    ColTwo:{
        fontSize: 15,
        borderWidth: 1,
        padding: 10,
        flex: 3
    }
})

export default styles