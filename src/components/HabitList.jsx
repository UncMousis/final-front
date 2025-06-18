import HabitItem from "./HabitItem";

function HabitList({ habits, onDelete }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {habits.map((habit) => (
        <HabitItem key={habit.id} habit={habit} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default HabitList;
