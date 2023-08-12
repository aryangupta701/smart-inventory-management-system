import express from "express";
import {
  loginRoutes,
  registerRoutes,
  getUsers,
} from "./controllers/loginController"; // Import the loginRoutes function
import {
  addProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "./controllers/productController";

const router = express.Router();

router.get("/users", getUsers);
router.post("/login", loginRoutes);
router.post("/register", registerRoutes);
router.post("/product/add", addProduct);
router.get("/product", getProducts);
router.post("/product/update", updateProduct);
router.delete("/product/delete", deleteProduct);
export default router;
