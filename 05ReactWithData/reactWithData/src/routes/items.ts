import { Router } from "express";
import * as controller from "../controllers/itemControllers";

const router = Router();

router.get("/", controller.getItems);
router.post("/", controller.createItem);
router.delete("/:id", controller.removeItem); // :id allows you to pass the ID in the URL

export default router;