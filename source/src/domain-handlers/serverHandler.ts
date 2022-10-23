import express from "express";
import cors from "cors";
import HomeRoutes from "./routes/homeRoutes";
import ExampleRoutes from "./routes/exampleRoutes";

export default class ServerHandler {
  app = express();

  setup() {
    this.app
      .use(express.json())
      .use(cors({ origin: "*" }))
      .use("/", new HomeRoutes().router)
      .use("/example", new ExampleRoutes().router);
    //.use("/api/database", databaseRoutes);

    return this.app;
  }
  listen(port: number) {
    this.app.listen(port, () => {
      console.log(`sensor data api listening on port ${port}!`);
    });
  }
}
