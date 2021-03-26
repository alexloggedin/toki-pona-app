import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header:{
        marginTop: 50,
        flexDirection: 'row',
        marginHorizontal:  0,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    close:{
        flex: 1
    },
    bar:{
        flex: 4,
    },
    numerical:{
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        margin: 8,
    },
    logo: {
        width: 64,
        height: 64,
    },
    title:{
        fontWeight: 'bold',
        fontSize: 24,
        marginVertical: 20
    },
    content:{
        marginTop: 20,
        flex: 6,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 10,
        width: '95%',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        zIndex: 0
    }, 
    confirmation:{
        flexDirection: 'row',
        marginHorizontal:  10,
        alignItems: 'center',
        padding: 5,
        borderRadius: 50
    },
    input: {
        margin: 10,
        marginTop: 40,
        padding: 16,
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
      },
      footer:{
          flex: 1,
      },
      submit:{
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin: 10,
        borderRadius: 20,
        width: 200,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        zIndex: 0
      },
      submitText:{
          fontSize: 24,
          fontWeight: 'bold'
      }
})

export default styles