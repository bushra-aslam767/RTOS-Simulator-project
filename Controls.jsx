import React from "react";
import styles from "./Controls.module.css";

export default function Controls({ runScheduler, quantum, setQuantum }) {
  return (
    <div className={styles.card}>
      <h3>Controls</h3>
      <label>Quantum (Round Robin):</label>
      <input
        type="number"
        value={quantum}
        onChange={(e) => setQuantum(parseInt(e.target.value))}
      />
      <div className={styles.buttons}>
        <button onClick={() => runScheduler("RR")}>Round Robin</button>
        <button onClick={() => runScheduler("Priority")}>Priority</button>
        <button onClick={() => runScheduler("Deadline")}>Deadline</button>
      </div>
    </div>
  );
}
