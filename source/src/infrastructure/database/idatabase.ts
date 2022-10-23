import ExampleModel from "../../domain-contracts/models";
export default interface IDatabase {
  // Connect to the database
  connect(path: string): Promise<void>;

  getData(): Promise<ExampleModel[]>;

  setData(data: ExampleModel): Promise<void>;

  // Disconnect from the database
  disconnect(): Promise<void>;
}
