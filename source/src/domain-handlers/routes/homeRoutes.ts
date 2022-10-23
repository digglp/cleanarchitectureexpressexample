import { Request, Response } from "express";
import express from "express";

export default class HomeRoutes {
  router: express.Router;

  constructor() {
    this.router = express.Router();
    this.routes();
  }

  routes() {
    this.router.get("/", this.getHome);
  }

  getHome(req: Request, res: Response) {
    res.send("Hello World!");
  }
}
