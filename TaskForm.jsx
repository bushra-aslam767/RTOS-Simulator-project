import React, { useState } from "react";
import styles from "./TaskForm.module.css";

export default function TaskForm({ addTask, clearTasks }) {
  const [task, setTask] = useState({
    name: "",
    execution: "",
    priority: "",
    deadline: "",
  });

  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });

  const handleAdd = () => {
    if (task.name && task.execution) {
      addTask({
        ...task,
        execution: parseInt(task.execution),
        priority: parseInt(task.priority) || 0,
        deadline: parseInt(task.deadline) || 0,
      });
      setTask({ name: "", execution: "", priority: "", deadline: "" });
    }
  };

  return (
    <div className={styles.card}>
      <h3>Add Task</h3>
      <input
        type="text"
        name="name"
        placeholder="Task Name"
        value={task.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="execution"
        placeholder="Execution Time"
        value={task.execution}
        onChange={handleChange}
      />
      <input
        type="number"
        name="priority"
        placeholder="Priority"
        value={task.priority}
        onChange={handleChange}
      />
      <input
        type="number"
        name="deadline"
        placeholder="Deadline"
        value={task.deadline}
        onChange={handleChange}
      />
      <div className={styles.buttons}>
        <button onClick={handleAdd}>Add</button>
        <button onClick={clearTasks}>Reset</button>
      </div>
    </div>
  );
}
