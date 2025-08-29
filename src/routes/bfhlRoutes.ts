import { Router } from "express";
import { handleBfhlPost } from "../controllers/bfhlController";

const router = Router();

router.post("/bfhl", handleBfhlPost);

export default router;
