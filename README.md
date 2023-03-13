# 20230310-graphql-dynamo
simple POC of graphQL with SST, dynamoDB and electroDB

This is a graphQL implementation with a very simple model and a lot of
moving parts.  To be honest, I wanted to use RDS instead of dynamoDB,
since joins are significantly easier, but SST just hit version 2 and...
there's a lot dust yet to settle on a few things.

So instead I'm using dynamoDB with electroDB, in order to implement a
single-table design.  My #1 TODO is figuring out how to understand the
GSI mechanism in order to create a query that accepts a date and returns
tasks and notes associated with that date.

In order to run it locally, you'll need to install and use SST.

I generally have a local copy running, accessible via
https://graphql-demo.api.verynormalserver.com/graphql

To interact with it, use the URL above, using POST.

To create a task, the body should be like:
{
  "query":"mutation{createTask(title:\"take over world again\",taskState:\"current\",taskDate:\"20230312\"){title}}"
}

To get a particular task:
{
  "query": "query{task(taskID:\"01GV93153GN6ERAKTD6EZKN6FP\"){title}}"
}

To get a list of all tasks:
{
  "query": "query{tasks{title}}"
}

Notes work similarly, but without a state.
