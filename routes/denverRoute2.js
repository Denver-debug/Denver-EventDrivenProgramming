import express from "express";
import { denverPage1 } from "../controllers/denver1Controller.js";
const router = express.Router();
router.get("/", denverPage1);

export default router;
