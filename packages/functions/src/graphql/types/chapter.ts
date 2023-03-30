import { Chapter } from "@20230310-graphql-dynamo/core/chapter";
import { builder } from "../builder";

const ChapterType = builder
  .objectRef<Chapter.ChapterEntityType>("Chapter")
  .implement({
    fields: (t) => ({
      id: t.exposeID("chapterID"),
      title: t.exposeString("chapterTitle"),
      theme: t.exposeString("theme"),
    }),
  });

builder.queryFields((t) => ({
  chapter: t.field({
    type: ChapterType,
    args: {
      chapterID: t.arg.string({ required: true }),
    },
    resolve: async (_, args) => {
      const result = await Chapter.get(args.chapterID);
      if (!result) {
        throw new Error("Chapter not found");
      }
      return result;
    },
  }),
  chapters: t.field({
    type: [ChapterType],
    resolve: async () => Chapter.list(),
  }),
  chaptersByBookID: t.field({
    type: [ChapterType],
    args: {
      bookID: t.arg.string({ required: true }),
    },
    resolve: async (_, args) => {
      const result = await Chapter.listByBookID(args.bookID);
      if (!result) {
        throw new Error("Chapter not found");
      }
      return result;
    },
  }),
  chaptersByChapterTitle: t.field({
    type: [ChapterType],
    args: {
      chapterTitle: t.arg.string({ required: true }),
    },
    resolve: async (_, args) => {
      const result = await Chapter.listByChapterTitle(args.chapterTitle);
      if (!result) {
        throw new Error("Chapter not found");
      }
      return result;
    },
  }),
}));

builder.mutationFields((t) => ({
  createChapter: t.field({
    type: ChapterType,
    args: {
      bookID: t.arg.string({ required: true }),
      chapterTitle: t.arg.string({ required: true }),
      theme: t.arg.string({ required: true }),
    },
    resolve: async (_, args) =>
      await Chapter.create(args.bookID, args.chapterTitle, args.theme),
  }),
}));
