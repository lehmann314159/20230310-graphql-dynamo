# 20230310-graphql-dynamo

simple POC of graphQL with SST, dynamoDB and electroDB

This is a graphQL implementation with a very simple model and a lot of moving
parts. To be honest, I wanted to use RDS instead of dynamoDB, since joins are
significantly easier, but SST just hit version 2 and... there's a lot dust yet
to settle on a few things. So instead I'm using dynamoDB with electroDB, in
order to implement a single-table design.

In order to run it locally, you'll need to install and use SST. Oh, and use
your own custom domain ;)

I generally have it running as an HTTP endpoint, accessible via
https://graphql-demo.api.verynormalserver.com/graphql

To interact with it, use the URL above, with POST and a body.

1. To create a task, the body should be similar to:
   - {"query":"mutation{createTask(title:\\"take over world again\\",taskState:\\"current\\",taskDate:\\"20230312\\"){title}}"}

2. To get a list of all tasks:
   - {"query": "query{tasks{title}}"}

3. To get a list of all tasks with a particular date:
   - {"query": "query{tasksWithDate(taskDate:\\"20230312\\"){title}}"}

4. To get a particular task:
   - {"query": "query{task(taskID:\"01GV93153GN6ERAKTD6EZKN6FP\"){title}}"}

Notes work similarly, but without a state.
