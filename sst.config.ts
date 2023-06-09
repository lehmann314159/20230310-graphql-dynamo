import { SSTConfig } from "sst";
import { Api } from "./stacks/Api";
import { Database } from "./stacks/Database";

export default {
  config(_input) {
    return {
      name: "20230310-graphql-dynamo",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app
      .stack(Database)
      .stack(Api)
  }
} satisfies SSTConfig;
