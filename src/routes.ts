import { Router } from "express";
import * as ClientsController from "./controllers/clients-controller";
import { login } from "./controllers/auth-controller";
import { authenticateToken } from "./middlewares/auth-middleware";

export const ROUTER = Router();

ROUTER.post("/login", login);

ROUTER.get("/clients", authenticateToken, ClientsController.getClients);
ROUTER.get("/clients/:id", authenticateToken, ClientsController.getClientsById);
ROUTER.post("/clients", authenticateToken, ClientsController.postClient);
ROUTER.patch("/clients/:id", authenticateToken, ClientsController.updateClient);
ROUTER.delete("/clients/:id", authenticateToken, ClientsController.deleteClient);
