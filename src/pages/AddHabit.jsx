import { useState } from "react";

function AddHabit() {
  const [title, setTitle] = useState("");
  const [targetDate, setTargetDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newHabit = {
      title,
      completed: false,
      targetDate,
    };

    fetch("http://localhost:4000/api/habits", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newHabit),
    })
      .then((res) => res.json())
      .then(() => {
        alert("✅ Habit added!");
        setTitle("");
        setTargetDate("");
      })
      .catch((err) => console.error("Failed to add habit:", err));
  };

  return (
    <div className="container">
      <div className="form-box">
        <h1 style={{ textAlign: "center" }}>➕ Add a New Habit</h1>
        <form onSubmit={handleSubmit} className="centered-form">
          <input
            type="text"
            placeholder="Habit Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ padding: "8px", width: "250px" }}
          />
          <br /><br />

          <input
            type="date"
            value={targetDate}
            onChange={(e) => setTargetDate(e.target.value)}
            required
          />
          <br /><br />

          <button type="submit" style={{ padding: "8px 20px" }}>
            Add Habit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddHabit;
