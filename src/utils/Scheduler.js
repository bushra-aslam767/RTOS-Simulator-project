export default function Scheduler(tasks, algo, quantum = 2) {
  let gantt = [];
  let metrics = { avgWaiting: 0, avgTurnaround: 0, cpuUtil: 0, totalTime: 0 };

  if (!tasks.length) return { gantt, metrics };

  if (algo === "RR") {
    let time = 0;
    let queue = tasks.map((t) => ({ ...t }));
    while (queue.length > 0) {
      let current = queue.shift();
      let exec = Math.min(current.execution, quantum);
      gantt.push({ task: current.name, start: time, end: time + exec });
      time += exec;
      current.execution -= exec;
      if (current.execution > 0) queue.push(current);
    }
    metrics.totalTime = gantt[gantt.length - 1].end;
  }

  if (algo === "Priority") {
    let sorted = [...tasks].sort((a, b) => a.priority - b.priority);
    let time = 0;
    sorted.forEach((t) => {
      gantt.push({ task: t.name, start: time, end: time + t.execution });
      time += t.execution;
    });
    metrics.totalTime = gantt[gantt.length - 1].end;
  }

  if (algo === "Deadline") {
    let sorted = [...tasks].sort((a, b) => a.deadline - b.deadline);
    let time = 0;
    sorted.forEach((t) => {
      gantt.push({ task: t.name, start: time, end: time + t.execution });
      time += t.execution;
    });
    metrics.totalTime = gantt[gantt.length - 1].end;
  }

  // 🔹 Calculate Metrics
  let totalExecTime = tasks.reduce((sum, t) => sum + t.execution, 0);

  metrics.avgWaiting = (metrics.totalTime / tasks.length).toFixed(2);
  metrics.avgTurnaround = (metrics.avgWaiting * 2).toFixed(2);
  metrics.cpuUtil = ((totalExecTime / metrics.totalTime) * 100).toFixed(2);

  return { gantt, metrics };
}



