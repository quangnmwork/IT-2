import { Router } from "express";
import { AuthController } from "../controllers/AuthController";
import { UserController } from "../controllers/UserController";
import { checkToken } from "../middlewares/checkToken";

const router = Router();
//Login route
router.post("/login", AuthController.login);
router.post("/signup", AuthController.signup);

//Change my password

export default router;
