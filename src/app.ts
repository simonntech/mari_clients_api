import express from 'express';
import { ROUTER } from './routes';
import cors from 'cors';

export default function createApp() {
    const app = express();

    app.use(express.json());
    app.use("/api", ROUTER);

    app.use(cors({
        origin: [
            "https://simonntech.github.io/mari_ink/", 
            "http://localhost:5500"
        ],
        credentials: true
    }));

    return app;
}