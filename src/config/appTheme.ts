import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
    },
    title:{
        fontSize: 25,
        textAlign: 'center',
        color: 'white'
    },
    button:{
        backgroundColor: '#5856D6',
        padding: 10,
        borderRadius: 10,
    }
});

export const colors = {
    darkGray: '#2D2D2D',
    ligthGray: '#9B9B9B',
    orange: '#FF9427',
    backgroundColor: 'black',
    resultColor: '#FFFFFF'
}

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