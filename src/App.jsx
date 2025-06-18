import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import AddHabit from "./pages/AddHabit";
import EditHabit from "./pages/EditHabit";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import WeatherPage from "./pages/WeatherPage";
import './App.css';

function App() {
  const [habits, setHabits] = useState([]);

  const addHabit = (habit) => {
    setHabits([...habits, habit]);
  };

  const deleteHabit = (id) => {
    const filtered = habits.filter((habit) => habit.id !== id);
    setHabits(filtered);
  };

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/add">Add Habit</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/weather">Weather</Link>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard habits={habits} onDelete={deleteHabit} />} />
          <Route path="/add" element={<AddHabit onAdd={addHabit} />} />
          <Route path="/edit/:id" element={<EditHabit habits={habits} onUpdate={setHabits} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/weather" element={<WeatherPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
