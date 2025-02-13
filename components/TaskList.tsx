import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";


export default function TaskList({ tasks, setTasks }) 
{
    useEffect(() => {
        // console.log("📢 useEffect is running: Fetching tasks...");
    fetchTasks();//Calling to method
  }, []);
  
 
  const [loading, setLoading] = useState(true);

  //Start FetchTask
  const fetchTasks = async () => 
    {
    try {
        
      setLoading(true);//Displays "Loading tasks..." while fetching.
      const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
      const data = await response.json();//Converts API response into JavaScript objects.
      setTasks(data);//setTasks(data) updates tasks in index.tsx.

      console.log("📋 Full Task List (After Fetch):", data); // ✅ Log all tasks after fetching
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setLoading(false);//Removes "Loading tasks..." and displays tasks.
    }
  };//End fetchTasks


  //Start CompleteTask Method
  const completeTask = async (id) => {
    try {
        //Looks for the task in the tasks list acc id
      const taskToUpdate = tasks.find((task) => task.id === id);
      if (taskToUpdate==false) return;

      console.log("✅ Task found before update:", taskToUpdate)
  
      //Updates completed: true on the server.
      //${id} -  This updates task id = 3 on the server.

      const newTask ={
            id: taskToUpdate.id,        // Keep original ID
            title: taskToUpdate.title,  // Keep original title
            completed: true,            // Update completed to true
            userId: taskToUpdate.userId // Keep original user ID
      }
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
      });
      
      //The API sends back the updated task.
      const updatedTask = await response.json();

      console.log("📩 API Response (Updated Task):", updatedTask);


      //React updates the UI with the new task.
      setTasks(tasks.map(task => task.id === id ? { ...task, completed: true } : task));
    } catch (error) {
      console.error("Error marking task as completed:", error);
    }
  };
  //End CompleteTask Method
    
  return (
    <View>
      {/* Display Tasks */}
      <Text style={styles.header}>Task List</Text>
      {loading ? (
        <Text>Loading tasks...</Text>
      ) : (
        tasks.map((task) => (
          <View key={task.id} style={styles.taskContainer}>
            {/* Creating text elemnt for each task */}
            <Text style={[styles.task, task.completed && styles.completedTask]}>
              {task.id}. {task.title} {task.details} {task.completed ? "✅" : "❌"}
            </Text>
            {!task.completed && (
              <Button title="✔ Complete" onPress={() => completeTask(task.id)} />
            )}
          </View>
        ))
      )}
      <Button title="Refresh Tasks" onPress={fetchTasks} />
    </View>
  );
  
}
//End of TaskList

const styles = StyleSheet.create({
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  task: {
    fontSize: 18,
    padding: 5,
    marginVertical: 2,
  },
  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  completedTask: {
    textDecorationLine: "line-through",
    color: "gray",
  },
  
});
