import { useState } from "react";
import { Image, Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { BackgroundComponent } from "../../components/BackgroundComponent";
import { colors } from "../../theme/appTheme";
import { emailValidator, nameValidator, passwordValidator } from "../../utils/FormUtils";
import { TextInput } from "../../components/TextInput";
import { Button, Dialog, Portal } from "react-native-paper";
import { RootStackParamList } from "../../routes/StackNavigation";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { BackendUseCaseImpl } from '../../../domain/useCase/implements/backendUseCaseImpl';
import { RequestRegister } from "../../../data/sources/remote/interfaces/backend.interface";

export const RegisterScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [name, setName] = useState({ value: '', error: '' });
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);

  const _onSignUpPressed = async () => {

    const { RegisterUserUseCase} = new BackendUseCaseImpl();

    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    const nameError = nameValidator(name.value);

    if (emailError || passwordError || nameError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      setName({ ...name, error: nameError });
      return;
    }

    const inputData: RequestRegister = {
        email: email.value,
        password: password.value,
        fullName: name.value
    }

    console.log(inputData);
    try {
      const dataRegistered = await RegisterUserUseCase(inputData);
      if (dataRegistered.firebaseUUID){
          setMessage('Usuario registrado correctamente.');
          showDialog();
      }
    }catch(error: any){
      setMessage(error.message);
      showDialog();
    }
  }

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <BackgroundComponent>
      <Portal>
        <Dialog 
          visible={visible}
          onDismiss={hideDialog}>
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
              <Text>{message}</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Cerrar</Button>
            </Dialog.Actions>
        </Dialog>
      </Portal>
      <Image source={require('../../../../assets/logo.png')} style={styles.image} />
      <Text style={styles.header}>Bienvenido</Text>
      <TextInput 
        label = "Nombre Completo"
        returnKeyType="next"
        value={name.value}
        onChangeText={text => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput 
        label = "Correo Electrónico"
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
        label = "Contraseña"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button mode="contained" onPress={_onSignUpPressed}>
        Registrar
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>¿Ya tienes una cuenta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Iniciar Sesión</Text>
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
  
