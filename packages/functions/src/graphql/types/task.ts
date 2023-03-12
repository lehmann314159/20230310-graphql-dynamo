import { Task } from "@20230310-graphql-dynamo/core/task";
import { builder } from "../builder";

const TaskType = builder.objectRef<Task.TaskEntityType>("Task").implement({
  fields: (t) => ({
    id: t.exposeID("taskID"),
    state: t.exposeString("taskState"),
    date: t.exposeString("taskDate"),
    title: t.exposeString("title"),
  }),
});

builder.queryFields((t) => ({
  task: t.field({
    type: TaskType,
    args: {
      taskID: t.arg.string({ required: true }),
    },
    resolve: async (_, args) => {
      const result = await Task.get(args.taskID);

      if (!result) {
        throw new Error("Task not found");
      }

      return result;
    },
  }),
  tasks: t.field({
    type: [TaskType],
    resolve: () => Task.list(),
  }),
  tasksWithDate: t.field({
    type: [TaskType],
    args: {
      taskDate: t.arg.string({ required: true }),
    },
    resolve: async (_, args) => {
      const result = await Task.listWithDate(args.taskDate);

      if (!result) {
        throw new Error("Task not found");
      }

      return result;
    },
  }),
}));

builder.mutationFields((t) => ({
  createTask: t.field({
    type: TaskType,
    args: {
      title: t.arg.string({ required: true }),
      taskState: t.arg.string({ required: true }),
      taskDate: t.arg.string({ required: true }),
    },
    resolve: (_, args) =>
      Task.create(args.title, args.taskState, args.taskDate),
  }),
}));
