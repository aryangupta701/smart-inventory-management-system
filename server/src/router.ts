import express from "express";
import { loginRoutes,registerRoutes,getUsers } from "./controllers/controller"; // Import the loginRoutes function

const router = express.Router();

router.get("/users", getUsers);
router.post("/login", loginRoutes);
router.post("/register", registerRoutes);
export default router;
