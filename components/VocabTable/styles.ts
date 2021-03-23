import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
    },
    title:{
        fontSize: 30,
        margin: 10
    },
    table:{
        borderWidth: 1,
    },
    tableRow:{
        flexDirection: 'row',
        width: 300
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