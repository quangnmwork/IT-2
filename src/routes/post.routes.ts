import { Router } from "express";

import { PostController } from "../controllers/PostController";
import { checkToken } from "../middlewares/checkToken";

const router = Router();

router.get("/", PostController.getAllPost);

router.use(checkToken);

router.post("/", PostController.addPost);
export default router;
