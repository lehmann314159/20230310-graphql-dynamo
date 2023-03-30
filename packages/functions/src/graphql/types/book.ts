import { Book } from "@20230310-graphql-dynamo/core/book";
import { builder } from "../builder";

const BookType = builder.objectRef<Book.BookEntityType>("Book").implement({
  fields: (t) => ({
    id: t.exposeID("bookID"),
    title: t.exposeString("bookTitle"),
  }),
});

builder.queryFields((t) => ({
  book: t.field({
    type: BookType,
    args: {
      bookID: t.arg.string({ required: true }),
    },
    resolve: async (_, args) => {
      const result = await Book.get(args.bookID);
      if (!result) {
        throw new Error("Book not found");
      }
      return result;
    },
  }),
  books: t.field({
    type: [BookType],
    resolve: async () => Book.list(),
  }),
  booksByBookTitle: t.field({
    type: [BookType],
    args: {
      bookTitle: t.arg.string({ required: true }),
    },
    resolve: async (_, args) => {
      const result = await Book.listByBookTitle(args.bookTitle);
      if (!result) {
        throw new Error("Book not found");
      }
      return result;
    },
  }),
}));

builder.mutationFields((t) => ({
  createBook: t.field({
    type: BookType,
    args: {
      bookTitle: t.arg.string({ required: true }),
    },
    resolve: async (_, args) => await Book.create(args.bookTitle),
  }),
}));
