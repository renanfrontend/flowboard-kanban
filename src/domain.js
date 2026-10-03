export function moveTask(tasks, id, status) { if (!Number.isInteger(status) || status < 0 || status > 2)
    return tasks; return tasks.map(t => t.id === id ? { ...t, status } : t); }
