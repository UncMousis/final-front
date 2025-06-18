import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function EditHabit({ habits, onUpdate }) {
    const { id } = useParams();
    const navigate = useNavigate();

    const habitToEdit = habits.find((habit) => habit.id === parseInt(id));

    const [title, setTitle] = useState("");
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        if (habitToEdit) {
            setTitle(habitToEdit.title);
            setCompleted(habitToEdit.completed);
        }
    }, [habitToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedHabit = {
            ...habitToEdit,
            title,
            completed,
        };

        const updatedList = habits.map((h) =>
            h.id === updatedHabit.id ? updatedHabit : h
        );

        onUpdate(updatedList);
        navigate("/dashboard");
    };

    if (!habitToEdit) {
        return <p style={{ textAlign: "center" }}>Habit not found ❌</p>;
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
