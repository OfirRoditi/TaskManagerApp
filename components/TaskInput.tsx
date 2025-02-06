import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
//  allowing the user to add new tasks.
//Receives tasks and setTasks as props from index.tsx.
export default function TaskInput({ tasks, setTasks }) {

  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDetail, setNewTaskDetalis] = useState("");


  //Add Task method
  const addTask = async () => 
  {
    try {
      //Creating a new task.
      const lastTaskId = tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) : 0;
      const newTask = {
        id: lastTaskId + 1,
        title: newTaskTitle,
        details: newTaskDetail, // ✅ New field added!
        completed: false,
        userId: 1,
      };

      const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
      });
      
      const data = await response.json(); 

      //Making sure API respone for the new task.
      console.log("📩 API Response (TaskInput):", data);
      
      //  prevTasks = Current task list.
      setTasks((prevTasks) => {

        //...prevTasks=Copies all existing tasks into a new array
        //{ ...data } copies all key-value pairs from the API response.
        //id: newTask.id=Making sure the id in API is UI id
        console.log("TaskID:",newTask.id)
        console.log("DataID:",data.id)
        const updatedTasks = [...prevTasks, { ...data, id: newTask.id }];
        console.log("📩 Tasks after Insert newTask (Corrected):", updatedTasks);
        console.log("TaskID:",newTask.id)
        console.log("DataID:",data.id)
        return updatedTasks;
      });
      
      setNewTaskTitle("");//Refresh the task box
      setNewTaskDetalis("")
      
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };
  //Finish Add - Task method

  // User Input Field
  return (
    <View>
      <Text>Enter a New Task:</Text>
      {/* Sture the user types */}
      <TextInput
        style={styles.input}
        placeholder="Type your task..."
        value={newTaskTitle}
        // text is stored inside the newTaskTitle variable - automatically updates the state variable
        onChangeText={setNewTaskTitle}
      />
      <Text>Enter task detalis:</Text>
      <TextInput
        style={styles.input}
        placeholder="Additional Info"
        value={newTaskDetail}
        // text is stored inside the newTaskDetail variable.
        onChangeText={setNewTaskDetalis} // Updates the details state
        />
      <Button title="Add Task Detalis" onPress={addTask} />
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
