import express from "express";
import * as reflectionController from "../controllers/reflections-controller.js"

const reflectionRouter = express.Router();

reflectionRouter.route('/')
    .get(reflectionController.getAllReflections);

reflectionRouter.route('/default')
    .get(reflectionController.getDefaultReflection);


export default reflectionRouter;