import { Router } from "express";
import { handleBfhlPost } from "../controllers/bfhlController";

const router = Router();

router.get("/", (req, res) => {
  res.send("Gautam Arora - 22BDS0010");
});

router.post("/bfhl", handleBfhlPost);

export default router;
