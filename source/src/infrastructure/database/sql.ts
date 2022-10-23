import ExampleModel from "../../domain-contracts/models";
import IDatabase from "./idatabase";

export default class SQL implements IDatabase {
  connect(path: string): Promise<void> {
    console.log("Connected to SQL database, path: ", path);
    return Promise.resolve();
  }
  async getData(): Promise<ExampleModel[]> {
    console.log("Getting data from SQL database");
    const exampleModel = new ExampleModel("Hello World", 123);
    const exampleModel2 = new ExampleModel("Hello World", 123);

    return await new Array<ExampleModel>(exampleModel, exampleModel2);
  }
  setData(data: ExampleModel): Promise<void> {
    console.log("Saving data to SQL database, " + data);
    return Promise.resolve();
  }
  disconnect(): Promise<void> {
    console.log("Disconnected from SQL database: ");
    return Promise.resolve();
  }
}
