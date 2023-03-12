import { ulid } from "ulid";
import { Entity, EntityItem } from "electrodb";
import { Dynamo } from "./dynamo";

export * as Task from "./task";

export const TaskEntity = new Entity(
  {
    model: {
      version: "1",
      entity: "Task",
      service: "scratch",
    },
    attributes: {
      taskID: {
        type: "string",
        required: true,
        readOnly: true,
      },
      title: {
        type: "string",
        required: true,
      },
      taskState: {
        type: "string",
        required: true,
      },
      taskDate: {
        type: "string",
        required: true
      }
    },
    indexes: {
      primary: {
        pk: {
          field: "pk",
          composite: [],
        },
        sk: {
          field: "sk",
          composite: ["taskID"],
        },
      },
    },
  },
  Dynamo.Configuration
);

export type TaskEntityType = EntityItem<typeof TaskEntity>;

export async function create(title: string, taskState: string, taskDate: string) {
  const result = await TaskEntity.create({
    taskID: ulid(),
    title,
    taskState,
    taskDate
  }).go();

  return result.data;
}

export async function get(taskID: string) {
  const result = await TaskEntity.get({ taskID }).go();
  return result.data;
}

export async function list() {
  const result = await TaskEntity.query.primary({}).go();
  return result.data;
}

export async function listWithDate(taskDate: string) {
  const result = await TaskEntity.query.primary({taskDate}).go();
  return result.data;
}
