import { Router } from "express";
import * as ClientsController from "./controllers/clients-controller";
import { POOL } from "./config/db";
import { login } from "./controllers/auth-controller";
import { authenticateToken } from "./middlewares/auth-middleware";

export const ROUTER = Router();

ROUTER.post("/login", login);

ROUTER.get("/clients", authenticateToken, ClientsController.getClients);
ROUTER.get("/clients/:id", authenticateToken, ClientsController.getClientsById);
ROUTER.post("/clients", authenticateToken, ClientsController.postClient);
ROUTER.patch("/clients/:id", authenticateToken, ClientsController.updateClient);
ROUTER.delete("/clients/:id", authenticateToken, ClientsController.deleteClient);

ROUTER.get("/teste", async (req, res) => {
    try {
        const result = await POOL.query("SELECT NOW()");
        res.json({message: "Conectado com sucesso", timestamp: result.rows[0].now});
    } catch(error) {
        res.status(500).json({ error: "Erro ao conectar ao banco de dados", details: error})
    }
})