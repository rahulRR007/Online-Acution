import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, TextField, Button, Typography, Paper, Box } from "@mui/material";

function SignIn() {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/signin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (response.ok) {
            localStorage.setItem("token", data.token);
            alert("Login Successful!");
            navigate("/dashboard");
        } else {
            alert(data.message);
        }
    };

    return (
        <Container maxWidth="xs">
            <Paper elevation={3} sx={{ padding: 4, mt: 6, textAlign: "center" }}>
                <Typography variant="h5" gutterBottom>Sign In</Typography>
                <form onSubmit={handleSubmit}>
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
                        Sign In
                    </Button>
                </form>
                <Box mt={2}>
                    <Typography variant="body2">
                        Don't have an account? <a href="/signup">Sign Up</a>
                    </Typography>
                </Box>
            </Paper>
        </Container>
    );
}

export default SignIn;
