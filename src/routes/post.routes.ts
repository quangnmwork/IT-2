import { Router } from "express";

import { PostController } from "../controllers/PostController";
import { checkToken } from "../middlewares/checkToken";
import { upload } from "../utils/multer";

const router = Router();

router.get("/", PostController.getAllPost);

router.use(checkToken);

router.post("/", upload.single("thumbnail"), PostController.addPost);

router.get("/", PostController.getPostByUserId);

export default router;
