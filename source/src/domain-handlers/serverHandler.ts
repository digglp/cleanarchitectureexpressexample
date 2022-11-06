import express from "express";
import cors from "cors";
import HomeRoutes from "./routes/homeRoutes";
import ExampleRoutes from "./routes/exampleRoutes";

export default class ServerHandler {
  private app = express();

  constructor() {
    this.setup();
  }

  listen(port: number) {
    //this.setup();
    this.app.listen(port, () => {
      console.log(`sensor data api listening on port ${port}!`);
    });
  }

  setup() {
    this.app
      .use(express.json())
      .use(cors({ origin: "*" }))
      .use("/", new HomeRoutes().router)
      .use("/example", new ExampleRoutes().router);
    //.use("/api/database", databaseRoutes);

    return this.app;
  }
}
