import { StyleSheet } from "react-native";


export const colors = {
    darkGray: '#2D2D2D',
    ligthGray: '#9B9B9B',
    orange: '#FF9427',
    backgroundColor: 'black',
    resultColor: '#FFFFFF'
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 20,
        alignItems: 'center',
        backgroundColor: 'white',        
    },
    title:{
        fontSize: 25,
        textAlign: 'center',
        color: 'black'
    },
    button:{
        backgroundColor: '#5856D6',
        padding: 10,
        borderRadius: 10,
        margin:10
    },
    buttonText:{
        color: 'white'
    },
    imagePokemon:{
        width: 50,
        height: 50
    },
    containerPokemon:{
        flex: 1,
        padding: 20,
        alignItems: 'center'
    },
    imgPositionBackground: {
        position: 'absolute',
        top: -100,
        right: -100
    },
    containerScreen:{
       marginHorizontal: 20
    },
    titlePokemon:{
        color: 'white',
        top: 10,
        left: 10
    }
});

export const calculatorStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
        justifyContent: 'flex-end',
        padding: 20
    },
    containerResult:{
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    textResult:{
        color: colors.resultColor,
        fontSize: 40,
        textAlign: 'right',
        fontWeight: '400',
    },
    subTextResult:{
        color: colors.ligthGray,
        fontSize: 30,
        textAlign: 'right',
        fontWeight: '400',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    button: {
        height: 80,
        width: 80,
        backgroundColor: colors.darkGray,
        borderRadius: 100,
        justifyContent: 'center',
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 30,
        color: colors.resultColor,
        fontWeight: '400',
    }
});