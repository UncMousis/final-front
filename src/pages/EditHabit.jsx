import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function EditHabit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const [targetDate, setTargetDate] = useState(""); // ✅ new state
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:4000/api/habits/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Habit not found");
        return res.json();
      })
      .then(data => {
        setTitle(data.title);
        setCompleted(data.completed);
        setTargetDate(data.target_date?.slice(0, 10)); // ✅ convert to YYYY-MM-DD
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching habit:", err);
        setNotFound(true);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedHabit = {
      title,
      completed,
      targetDate, // ✅ include this in payload
    };

    fetch(`http://localhost:4000/api/habits/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedHabit),
    })
      .then(res => res.json())
      .then(() => {
        alert("✅ Habit updated!");
        navigate("/dashboard");
      })
      .catch(err => console.error("Error updating habit:", err));
  };

  if (notFound) {
    return <p style={{ textAlign: "center" }}>❌ Habit not found</p>;
  }

  if (loading) {
    return <p style={{ textAlign: "center" }}>⏳ Loading habit...</p>;
  }

  return (
    <div className="container">
      <div className="form-box">
        <h1 style={{ textAlign: "center" }}>✏️ Edit Habit</h1>
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

          <label>
            <input
              type="checkbox"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
            />
            Mark as completed
          </label>
          <br /><br />

          <button type="submit" style={{ padding: "8px 20px" }}>
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditHabit;
