import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function IndexScreen() {
  //setMessage is the function that updates message.
  const [message, setMessage] = useState("Welcome to Task Manager!-index");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{message}</Text>
      {/* When the button is clicked, React calls setMessage 
          setMessage("SetMsg-You clicked the button!") requests React to update the state.  */}
      <Button title="Click Me" onPress={() => { setMessage("SetMsg-You clicked the button!"); }} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
