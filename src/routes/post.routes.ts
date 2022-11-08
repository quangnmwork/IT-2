import { Router } from "express";

import { PostController } from "../controllers/PostController";
import { checkToken } from "../middlewares/checkToken";
import { upload } from "../utils/multer";
import commentRouter from "./comment.routes";

const router = Router();

router.get("/", PostController.getAllPost);
router.use("/:postId/comments", commentRouter);
router.get("/:id", PostController.getPostById);

router.patch(
  "/:postId",
  upload.single("thumbnail"),
  PostController.updatePostById
);

router.delete("/:postId", PostController.deletePostById);

router.use(checkToken);

router.post("/", upload.single("thumbnail"), PostController.addPost);

router.get("/", PostController.getPostByUserId);

export default router;
