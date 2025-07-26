import cors from "cors";

export const corsOptions: cors.CorsOptions = {
    origin: ['https://simonntech.github.io', 'http://localhost:5500'],
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}

export const corsMiddleware = cors(corsOptions);