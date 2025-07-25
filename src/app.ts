import express from 'express';
import { ROUTER } from './routes';
import cors from 'cors';

export default function createApp() {
    const app = express();
    
    app.use(cors({
        origin: 'https://simonntech.github.io',
        methods: ['GET', 'POST', 'PATCH', 'DELETE'],
        allowedHeaders: [ 'Content-Type', 'Authorization']
    }));
    
    app.use(express.json());
    app.use("/api", ROUTER);


    return app;
}