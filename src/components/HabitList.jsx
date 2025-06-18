import HabitItem from "./HabitItem";

function HabitList({ habits, onDelete }) {
  return (
    <ul className="habit-grid">
      {habits.map((habit) => (
        <HabitItem key={habit.id} habit={habit} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default HabitList;
