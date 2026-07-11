import express from 'express';
import { router as routerFromtally } from "./tally/routes.js";

const router = express.Router()
router.use("/tally", routerFromtally);;

export { router };