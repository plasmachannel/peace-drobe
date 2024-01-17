import {JSX, useState} from "react";
import {TextInput} from "react-native-paper";
import {StyleSheet, View} from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function Login () : JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return <>
    <TextInput style={{
      backgroundColor: 'blue',
    }}>
    </TextInput>
    <TextInput
      label="Email"
      value={email}
      onChangeText={text => setEmail(text)}
    />
    <TextInput
      label="Password"
      secureTextEntry
      value={password}
      onChangeText={text => setPassword(text)}
    />
  </>
}