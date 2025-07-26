import cors from "cors";

export const corsOptions: cors.CorsOptions = {
    origin: ['https://simonntech.github.io', 'http://127.0.0.1:5500'],
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}

export const corsMiddleware = cors(corsOptions);