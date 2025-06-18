import HabitList from "../components/HabitList";

function Dashboard({ habits, onDelete }) {
  const total = habits.length;
  const completed = habits.filter(h => h.completed).length;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

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
        <HabitList habits={habits} onDelete={onDelete} />
      )}
    </div>
    </div>
  );
}

export default Dashboard;
