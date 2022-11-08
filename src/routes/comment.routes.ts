import { Router } from "express";
import { CommentController } from "../controllers/CommentController";
import { checkToken } from "../middlewares/checkToken";

const router = Router({ mergeParams: true });

router.get("/", CommentController.getAllCommentByBlogId);
router.patch("/:commentId", CommentController.editComment);
router.delete("/:commentId", CommentController.deleteComment);
router.use(checkToken);

router.post("/", CommentController.addComment);

export default router;
