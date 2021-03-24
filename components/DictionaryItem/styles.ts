import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: 10,
      borderRadius: 10,
      width: 375,
      height: 100,
      margin: 5,
      flex: 1,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    toki:{
      flex: 2
    },
    tokiText:{
      fontWeight: '900',
      fontSize: 15
    },
    definition:{
      flex: 3
    },
    pos:{
      fontWeight: 'normal'
    },
    def:{

    } 

})

export default styles