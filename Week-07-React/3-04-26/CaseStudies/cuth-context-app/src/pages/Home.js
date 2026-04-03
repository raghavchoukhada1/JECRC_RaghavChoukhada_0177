import React from "react";
import LoginForm from "../components/LoginForm";
function Home() {
    return (
        <div>
            <h1>Welcome to MyApp</h1>
            <p>Please login to access your dashboard.</p>
            <LoginForm />
        </div>
    );
}export default Home;