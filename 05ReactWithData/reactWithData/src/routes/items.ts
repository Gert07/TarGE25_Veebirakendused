import { Router } from "express";
import * as controller from "../controllers/itemControllers";

// 1. Router must be capitalized when calling the constructor function
const router = Router(); 

// 2. You need a comma between the path string and the controller function
router.get("/", controller.getItems);
router.post("/", controller.createItem);
router.delete("/:id", controller.deleteItem); // Added ':id' as a common practice for deletes

export default router;