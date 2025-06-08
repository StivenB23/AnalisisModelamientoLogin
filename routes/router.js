import { Router } from "express";
import { dashboard, index, register } from "../controllers/indexController.js";
const router = Router();
router.get('/', index)
router.get('/registro', register)
router.get('/dashboard', dashboard)


export default router;
