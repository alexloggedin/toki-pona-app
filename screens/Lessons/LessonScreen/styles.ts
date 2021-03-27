import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontSize: 50,
        fontWeight: 'bold'
    },
    subtitle:{
        fontSize: 20,
        fontWeight: 'normal',
        fontStyle: 'italic',
        marginVertical: 4,
    },
    video: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: -50
    },
    exercise:{
        margin: 20,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 2, // Android
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    exerciseText:{
        fontSize: 24
    },
    footer:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop: 50,
        marginBottom: 10,
        marginHorizontal: 10

    },
    link:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        borderRadius: 32
    },
    linkText:{
        fontSize: 12
    }

})

export default styles