import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        width: '95%',
        padding: 10,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    imageContainer: {
        padding: 10,
        borderWidth: 3,
        borderRadius: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    lessonImage: {
        width: 50,
        height: 50,
        margin: 16
    },
    titleContainer: {
        marginLeft: 20
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 15,
        fontWeight: "normal",
        fontStyle: 'italic',
    }
})

export default styles