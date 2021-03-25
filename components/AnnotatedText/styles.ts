import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    text: {
        textDecorationLine: 'underline',
        textDecorationStyle: 'dotted',
        margin: '1%'
    },
    def: {
        position: 'absolute',
        alignSelf: 'center',
        borderRadius: 10,
        top: 100,
        height: 150,
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
        zIndex: 10

    },
    defHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    }
})