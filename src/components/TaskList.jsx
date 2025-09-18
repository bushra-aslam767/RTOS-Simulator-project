import React from "react";
import styles from "./TaskList.module.css";

export default function TaskList({ tasks }) {
  return (
    <div className={styles.card}>
      <h3>Task List</h3>
      {tasks.length === 0 ? (
        <p>No tasks added yet.</p>
      ) : (
        <ul className={styles.list}>
          {tasks.map((task, index) => (
            <li key={index}>
              <strong>{task.name}</strong> | Exec: {task.execution} | Priority:{" "}
              {task.priority} | Deadline: {task.deadline}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
