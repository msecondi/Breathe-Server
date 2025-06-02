import express from "express";
import * as fireFeedController from "../controllers/fire-feed-controller.js"
const fireFeedRouter = express.Router();

// middleware - to prevent users from spamming endpoint (uses unique IP address)
import rateLimit from "express-rate-limit";
const burnLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour window
  max: 3, // limit each IP to 3 requests per windowMs
  message: {
    error: "Too many logs. Breathe. Reflect. Try again in an hour.",
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

fireFeedRouter.route('/')
    .post( fireFeedController.burnWorries); // with limiter middleware

fireFeedRouter.route('/count')
    .get(fireFeedController.getCount);

export default fireFeedRouter;