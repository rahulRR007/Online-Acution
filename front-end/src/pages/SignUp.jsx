import { useState } from "react";

function SignUp() {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (response.ok) {
            alert("User registered successfully!");
        } else {
            alert(data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <button type="submit">Sign Up</button>
        </form>
    );
}

export default SignUp;
