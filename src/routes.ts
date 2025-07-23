import { Router } from "express";
import * as ClientsController from "./controllers/clients-controller";

export const ROUTER = Router();

ROUTER.get("/clients", ClientsController.getClients);
ROUTER.get("/clients/:id", ClientsController.getClientsById);
ROUTER.post("/clients", ClientsController.postClient);
ROUTER.patch("/clients/:id", ClientsController.updateClient);
ROUTER.delete("/clients/:id", ClientsController.deleteClient);