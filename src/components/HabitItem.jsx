import { Link } from "react-router-dom";

function HabitItem({ habit, onDelete }) {
  return (
    <li className="habit-card">
      <h3>
        {habit.title} {habit.completed ? "✅" : "❌"}
      </h3>
      <p>📅 Target Date: {habit.targetDate}</p>
      <Link to={`/edit/${habit.id}`}>
        <button className="edit-btn">Edit</button>
      </Link>
      <button className="delete-btn" onClick={() => onDelete(habit.id)}>
        Delete
      </button>
    </li>
  );
}

export default HabitItem;
