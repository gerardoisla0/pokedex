import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../theme/appTheme";
import { BackgroundComponent } from "../../components/BackgroundComponent";
import { useState } from "react";
import { TextInput } from "../../components/TextInput";
import { Button } from "react-native-paper";
import { emailValidator, passwordValidator } from '../../utils/FormUtils';
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/StackNavigation";

export const LoginScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const _onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
    }
  }

  return (
    <BackgroundComponent>
      <Image source={require('../../../../assets/logo.png')} style={styles.image} />
      <Text style={styles.header}>Bienvenido</Text>
      <TextInput 
        label = "Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput 
        label = "Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button mode="contained" onPress={_onLoginPressed}>
        Iniciar Sesión
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>¿No estas registrado? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.link}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </BackgroundComponent>
  )
}

  const styles = StyleSheet.create({
    forgotPassword: {
      width: '100%',
      alignItems: 'flex-end',
      marginBottom: 24,
    },
    row: {
      flexDirection: 'row',
      marginTop: 4,
    },
    label: {
      color: colors.dark,
    },
    link: {
      fontWeight: 'bold',
      color: colors.primary,
    },
    image: {
        width: 128,
        height: 128,
        marginBottom: 12,
      },
    header: {
      fontSize: 26,
      color: colors.primary,
      fontWeight: 'bold',
      paddingVertical: 14,
    },
  });
  