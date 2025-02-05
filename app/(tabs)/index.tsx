// 1️⃣ Importing Dependencies
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import TaskList from "../../components/TaskList";
import TaskInput from "../../components/TaskInput";

export default function IndexScreen() 
{
  const [taskList, setTasks] = useState([]); // Stores tasks in tasksList - Holds an array of tasks

  //UI Layout (Main Screen)
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Task Manager-Main Title</Text>
      {/* Allows adding new */}
      {/* Sharing same the same state(tasks) */}
      {/* Props = properties, pass takas and setTasks as prop. */}
      <TaskList tasks={taskList} setTasks={setTasks} />
      <TaskInput tasks={taskList} setTasks={setTasks} />
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
  header: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 25,
    color: "rgb(71, 15, 49)",
  },
});
