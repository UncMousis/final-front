function AboutPage() {
    return (
        <div className="container">
            <div className="about-box">
                <h1>📘 About Routinee</h1>
                <p style={{ textAlign: "center", fontStyle: "italic", color: "#888" }}>
                    Helping students build better habits, one tick at a time.
                </p>

                <p>
                    <strong>Routinee</strong> is a simple habit tracker built as part of a full-stack college project.
                </p>
                <p>
                    It helps you create, monitor, and maintain your daily goals using a minimalist and effective interface.
                </p>
                <p>
                    This app was built using <strong>React</strong> for the frontend and will be connected to a backend soon.
                </p>
                <p>
                    We built Routinee to help students like ourselves stay on track — and learn web development in the process.
                </p>
            </div>
        </div>
    );
}

export default AboutPage;
