import React from "react";
import styles from "./Metrics.module.css";

export default function Metrics({ metrics }) {
  return (
    <div className={styles.card}>
      <h3>Scheduler Metrics</h3>
      {metrics && (
        <ul>
          <li>Avg Waiting Time: {metrics.avgWaiting || 0}</li>
          <li>Avg Turnaround Time: {metrics.avgTurnaround || 0}</li>
          <li>CPU Utilization: {metrics.cpuUtil || 0}%</li>
          <li>Total Time: {metrics.totalTime || 0}</li>
        </ul>
      )}
    </div>
  );
}

