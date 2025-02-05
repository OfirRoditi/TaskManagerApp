import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
//  allowing the user to add new tasks.
//Receives tasks and setTasks as props from index.tsx.
export default function TaskInput({ tasks, setTasks }) {

  const [newTaskTitle, setNewTaskTitle] = useState("");


  //Add Task method
  const addTask = async () => 
  {
    try {
      //Creating a new task.
      const lastTaskId = tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) : 0;
      const newTask = {
        id: lastTaskId + 1,
        title: newTaskTitle,
        completed: false,
        userId: 1,
      };

      const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
      });

      const data = await response.json();

      setTasks([...tasks, { ...data, id: newTask.id }]);// adds the new task to the existing list.
      setNewTaskTitle("");//Refresh the task box
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };
  //Finish Task method

  // User Input Field
  return (
    <View>
      <Text>Enter a New Task:</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your task..."
        value={newTaskTitle}
        onChangeText={setNewTaskTitle}
      />
      <Button title="Add Task" onPress={addTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
