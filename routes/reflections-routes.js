import express from "express";
import * as reflectionController from "../controllers/reflections-controller.js"

const reflectionRouter = express.Router();

reflectionRouter.route('/')
    .get(reflectionController.getAll)
    .post(reflectionController.post);

reflectionRouter.route('/default')
    .get(reflectionController.getDefault);


export default reflectionRouter;