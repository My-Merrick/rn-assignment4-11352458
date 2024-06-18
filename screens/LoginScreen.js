// screens/LoginScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    navigation.navigate("Home", { name, email });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jobizz</Text>
      <Text style={styles.subtitle}>Welcome Back 👋</Text>
      <Text style={styles.instructions}>Let's log in. Apply to jobs!</Text>
      <TextInput
        placeholder="Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
      <Text style={styles.orContinue}>Or continue with</Text>
      <View style={styles.socialIcons}>
        <Image source={require("../assets/apple.png")} style={styles.icon} />
        <Image source={require("../assets/google.png")} style={styles.icon} />
        <Image source={require("../assets/facebook.png")} style={styles.icon} />
      </View>
      <Text style={styles.register}>
        Haven’t an account? <Text style={styles.registerLink}>Register</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "start",
    backgroundColor: "#fff",
    paddingLeft: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#356899",
    marginLeft: 1,
    paddingLeft: 1,
  },
  subtitle: {
    fontSize: 24,
    marginTop: 10,
    color: "#0D0D26",
  },
  instructions: {
    fontSize: 16,
    marginVertical: 20,
    color: "#0D0D26",
  },
  input: {
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#356899",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    width: "80%",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    justifyContent: "center",
    alignContent: "center",
  },
  orContinue: {
    marginVertical: 20,

    textAlign: "center",
    paddingRight: 60,
  },
  socialIcons: {
    flexDirection: "row",
  },
  icon: {
    width: 80,
    height: 40,
    marginHorizontal: 1,
  },
  register: {
    marginTop: 20,
  },
  registerLink: {
    color: "#0000FF",
  },
});
