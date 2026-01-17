import express from "express";
import cors from "cors";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// test routes
app.get('/ping', (_req, res) => {
    res.json({message: 'pong'});
});

export default app;