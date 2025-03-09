import { Container, Typography, Box, Paper, Grid } from "@mui/material";
import { motion } from "framer-motion";

function About() {
    return (
        <Container maxWidth="lg" sx={{ mt: 6, textAlign: "center" }}>
            {/* Animated Title */}
            <motion.div 
                initial={{ opacity: 0, y: -50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8 }}
            >
                <Typography variant="h4" color="primary" gutterBottom>
                    About Our Online Auction Platform
                </Typography>
            </motion.div>

            {/* Animated Description */}
            <motion.div
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1.2 }}
            >
                <Typography variant="body1" sx={{ mb: 4 }}>
                    Welcome to our **Online Auction Platform**, where buyers and sellers connect in real-time 
                    to trade valuable items securely and efficiently. Whether you're looking for **rare collectibles, 
                    antiques, or modern gadgets**, our platform ensures a smooth bidding experience.
                </Typography>
            </motion.div>

            {/* Animated Feature Cards */}
            <Grid container spacing={4}>
                {features.map((feature, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 * index, duration: 0.8 }}
                        >
                            <Paper elevation={3} sx={{ p: 3, textAlign: "center", borderRadius: 3 }}>
                                <Typography variant="h6" color="secondary">
                                    {feature.title}
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 1 }}>
                                    {feature.description}
                                </Typography>
                            </Paper>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

// Features Data
const features = [
    { title: "Secure Transactions", description: "We ensure a safe and transparent bidding process with end-to-end encryption." },
    { title: "Real-Time Bidding", description: "Bid in real-time with live updates and notifications." },
    { title: "Diverse Categories", description: "Buy and sell across multiple categories including electronics, art, and automobiles." },
];

export default About;
