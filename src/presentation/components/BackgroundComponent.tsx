import { ImageBackground, KeyboardAvoidingView, StyleSheet, View } from "react-native";

interface props{
    children?: React.ReactNode;
}

export const BackgroundComponent = ({children}: props) => {
  return (
    <ImageBackground
        source={require('../../../assets/background_dot.png')}
        resizeMode="repeat"
        style={styles.background}
    >
      <KeyboardAvoidingView style={styles.container} behavior="padding">
       {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      width: '100%',
      //backgroundColor: 'black'
    },
    container: {
      flex: 1,
      padding: 20,
      width: '100%',
      maxWidth: 340,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });