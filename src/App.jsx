import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import Controls from "./components/Controls";
import Metrics from "./components/Metrics";
import TaskGraph from "./components/TaskGraph";
import Scheduler from "./utils/Scheduler";
import TaskList from "./components/TaskList";
import styles from "./App.module.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [metrics, setMetrics] = useState({});
  const [ganttData, setGanttData] = useState([]);
  const [quantum, setQuantum] = useState(2);

  const addTask = (task) => setTasks([...tasks, task]);

  const clearTasks = () => {
    setTasks([]);
    setMetrics({});
    setGanttData([]);
  };

  const runScheduler = (algo) => {
    const { gantt, metrics } = Scheduler(tasks, algo, quantum);
    setGanttData(gantt);
    setMetrics(metrics);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>RTOS Simulator</h1>
      <p className={styles.subtitle}>
        Add tasks, choose algorithm, adjust quantum (Round Robin).
      </p>

      <div className={styles.grid}>
        <TaskForm addTask={addTask} clearTasks={clearTasks} />
        <Controls
          runScheduler={runScheduler}
          quantum={quantum}
          setQuantum={setQuantum}
        />
        <Metrics metrics={metrics} />
        <TaskGraph ganttData={ganttData} />
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}



