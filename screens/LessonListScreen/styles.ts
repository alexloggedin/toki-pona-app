import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lessonContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer:{
        padding: 10,
        borderWidth: 4,
        borderColor: 'green',
        borderRadius: 100,
    },
    lessonImage:{
        width: 100,
        height: 100,
        margin: 16
    },
    lessonTitle:{
        fontSize: 20,
        fontWeight: 'bold',
        margin: 20
    }
})

export default styles