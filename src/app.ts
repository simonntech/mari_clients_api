import express from 'express';
import { ROUTER } from './routes';
import { corsMiddleware } from './config/cors';

export default function createApp() {
    const app = express();
    
    app.use(corsMiddleware);
    app.use(express.json());
    app.use("/api", ROUTER);

    return app;
}