import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";
import styles from "./TaskGraph.module.css";

export default function TaskGraph({ ganttData }) {
  return (
    <div className={styles.card}>
      <h3>Task Graph</h3>
      <LineChart width={500} height={300} data={ganttData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="start" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="end" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}
