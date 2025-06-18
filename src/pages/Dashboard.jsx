import { useEffect, useState } from "react";
import HabitList from "../components/HabitList";

function Dashboard({ onDelete }) {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/habits")
      .then(res => res.json())
      .then(data => setHabits(data))
      .catch(err => console.error("Failed to fetch habits:", err));
  }, []);

  const total = habits.length;
  const completed = habits.filter(h => h.completed).length;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  const handleDelete = (id) => {
    fetch(`http://localhost:4000/api/habits/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          setHabits((prev) => prev.filter((h) => h.id !== id));
        }
      })
      .catch(console.error);
  };

  return (
    <div className="container">
      <div className="dashboard-box">
        <h1 style={{ textAlign: "center" }}>📋 Your Habits</h1>
        <div className="progress-container">
          <p>Habit Progress: {percent}%</p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${percent}%` }}></div>
          </div>
        </div>
        {total === 0 ? (
          <p>No habits yet. Go to "Add Habit" to create one.</p>
        ) : (
          <HabitList habits={habits} onDelete={handleDelete} />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
