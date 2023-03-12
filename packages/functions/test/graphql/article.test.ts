import { Api } from "sst/constructs";
import { expect, it } from "vitest";
import { createClient } from "@20230310-graphql-dynamo/graphql/genql";
import { Article } from "@20230310-graphql-dynamo/core/article";
import { Task } from "@20230310-graphql-dynamo/core/task";

it("create an article", async () => {
  const client = createClient({
    url: Api.api.url + "/graphql",
  });

  const article = await client.mutation({
    createArticle: [
      { title: "Hello world", url: "https://example.com" },
      {
        id: true,
      },
    ],
  });
  const list = await Article.list();
  expect(
    list.find((a) => a.articleID === article.createArticle.id)
  ).not.toBeNull();
});

it("create a task", async () => {
  const client = createClient({
    url: Api.api.url + "/graphql",
  });

  const task = await client.mutation({
    createTask: [
      { title: "Rise and Grind", taskState: "current", taskDate: "2023-03-10" },
      {
        id: true,
      },
    ],
  });
  const list = await Task.list();
  expect(list.find((a) => a.taskID === task.createTask.id)).not.toBeNull();
});
