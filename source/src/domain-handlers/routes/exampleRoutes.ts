import { Request, Response } from "express";
import express from "express";
import ExampleModel from "../../domain-contracts/models";

export default class ExampleRoutes {
  router: express.Router;

  constructor() {
    this.router = express.Router();
    this.routes();
  }

  routes() {
    this.router.get("/", this.getExample);
  }

  getExample(req: Request, res: Response) {
    const exampleModel = new ExampleModel("exampleString", 1);

    res.send(exampleModel);
  }
}
