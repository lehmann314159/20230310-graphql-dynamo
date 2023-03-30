import { StackContext, Table } from "sst/constructs";

export function Database({ stack }: StackContext) {
  const table = new Table(stack, "db", {
    fields: {
      pk: "string",
      sk: "string",
      gsi1pk: "string",
      gsi1sk: "string",
      gsi2pk: "string",
      gsi3pk: "string",
      gsi4pk: "string",
      gsi5pk: "string",
    },
    primaryIndex: {
      partitionKey: "pk",
      sortKey: "sk",
    },
    globalIndexes: {
      gsi1: {
        partitionKey: "gsi1pk",
        sortKey: "gsi1sk",
      },
      gsi2: {
        partitionKey: "gsi2pk",
      },
      gsi3: {
        partitionKey: "gsi3pk",
      },
      gsi4: {
        partitionKey: "gsi4pk",
      },
      gsi5: {
        partitionKey: "gsi5pk",
      },
    },
  });

  return table;
}
