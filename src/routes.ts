import { Router } from "express";
import * as ClientsController from "./controllers/clients-controller";

export const ROUTER = Router();

ROUTER.get("/clients", ClientsController.getClients);
ROUTER.post("/clients", ClientsController.postClient);
ROUTER.patch("/clients/:id", ClientsController.updateClient);