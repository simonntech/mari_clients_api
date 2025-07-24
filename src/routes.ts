import { Router } from "express";
import * as ClientsController from "./controllers/clients-controller";
import { POOL } from "./config/db";

export const ROUTER = Router();

ROUTER.get("/clients", ClientsController.getClients);
ROUTER.get("/clients/:id", ClientsController.getClientsById);
ROUTER.post("/clients", ClientsController.postClient);
ROUTER.patch("/clients/:id", ClientsController.updateClient);
ROUTER.delete("/clients/:id", ClientsController.deleteClient);

ROUTER.get("/teste", async (req, res) => {
    try {
        const result = await POOL.query("SELECT NOW()");
        res.json({message: "Conectado com sucesso", timestamp: result.rows[0].now});
    } catch(error) {
        res.status(500).json({ error: "Erro ao conectar ao banco de dados", details: error})
    }
})