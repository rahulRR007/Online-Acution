import { useState } from "react";
import { Container, TextField, Button, Typography, Paper, Box } from "@mui/material";

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
        <Container maxWidth="xs">
            <Paper elevation={3} sx={{ padding: 4, mt: 6, textAlign: "center" }}>
                <Typography variant="h5" gutterBottom>Sign Up</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField 
                        fullWidth
                        label="Name"
                        type="text"
                        name="name"
                        margin="normal"
                        variant="outlined"
                        onChange={handleChange}
                        required
                    />
                    <TextField 
                        fullWidth
                        label="Email"
                        type="email"
                        name="email"
                        margin="normal"
                        variant="outlined"
                        onChange={handleChange}
                        required
                    />
                    <TextField 
                        fullWidth
                        label="Password"
                        type="password"
                        name="password"
                        margin="normal"
                        variant="outlined"
                        onChange={handleChange}
                        required
                    />
                    <Button 
                        type="submit" 
                        variant="contained" 
                        color="primary" 
                        fullWidth 
                        sx={{ mt: 2 }}
                    >
                        Sign Up
                    </Button>
                </form>
                <Box mt={2}>
                    <Typography variant="body2">
                        Already have an account? <a href="/signin">Sign In</a>
                    </Typography>
                </Box>
            </Paper>
        </Container>
    );
}

export default SignUp;
