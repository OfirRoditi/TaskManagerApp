import React, { useState,useEffect } from "react";
// allows us to fetch data when the component loads.
import { View, Text, Button, StyleSheet } from "react-native";

export default function IndexScreen() {
  //setMessage is the function that updates message.
  const [message, setMessage] = useState("Welcome to Task Manager!-index.tsx");
  const [tasks, setTasks] = useState([]); // Stores tasks
  const [loading, setLoading] = useState(true); // Loading state

  // API Fetch Function
  const fetchTasks = async () => {
    try {
      setLoading(true); // Show loading before fetching
      //Step1: Sends a request to the API.

      const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5"); 
      //Step2:  Converts the response to JavaScript format.
      const data = await response.json();

      //Step3: Updates our tasks state with the fetched data
      setTasks(data); // Update tasks state
      
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setLoading(false); // Hide loading after fetching
    }
  };
    // 📌 Step 3: Call API When Component Loads-Call it only once as soon as the app starts
    useEffect(() => {
      fetchTasks();  // Calls fetchTasks when the screen loads
    }, []);  // Empty dependency array ensures it runs only once

  return (
    <View style={styles.container}>
        {/* New Title */}
        <Text style={styles.header}>Task Manager-Main Title</Text>  
        
        {/* Message Display */}
        <Text style={styles.bottom}>{message}</Text>

        {/* Display Tasks -if the task is still loding we display it*/}
        {loading ? (<Text>Loading tasks...</Text>) :
        (
          tasks.map((task) => (
            <Text key={task.id} style={styles.task}>
              {task.userId}. {task.id}. {task.title} {task.completed ? "✅" : "❌"}
            </Text>
          ))
        )}

        {/* Button to Refresh Tasks */}
        <Button title="Refresh Tasks" onPress={fetchTasks} />
    </View>
  );
}


//Stylign every text,title.
const styles = StyleSheet.create({
  //Main Header
  header: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 25,
    color: "rgb(71, 15, 49)"
  },
  //Bottom
  bottom: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "rgb(185, 76, 25)"
  },
  //container - to align everything centered on the screen.
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
  },
  task: {
    fontSize: 18,
    padding: 5,
    marginVertical: 2,
  },
  
});
