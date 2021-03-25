import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header:{
        flex: 1,
        marginTop: 90,
        flexDirection: 'row',
        height: 40,
        marginHorizontal:  10
    },
    close:{
        flex: 1
    },
    bar:{
        flex: 2
    },
    numerical:{
        flex: 1
    },
    prompt:{
        paddingHorizontal: 20,
        marginVertical: 10,
        flex: 1,
    },

    input: {
        margin: 10,
        padding: 10,
        borderRadius: 20,
        borderWidth: 2,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        zIndex: 0
      }
})

export default styles