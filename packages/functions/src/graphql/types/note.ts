import { Note } from "@20230310-graphql-dynamo/core/note";
import { builder } from "../builder";

const NoteType = builder.objectRef<Note.NoteEntityType>("Note").implement({
  fields: (t) => ({
    id: t.exposeID("noteID"),
    date: t.exposeString("noteDate"),
    title: t.exposeString("title"),
  }),
});

builder.queryFields((t) => ({
  note: t.field({
    type: NoteType,
    args: {
      noteID: t.arg.string({ required: true }),
    },
    resolve: async (_, args) => {
      const result = await Note.get(args.noteID);

      if (!result) {
        throw new Error("Note not found");
      }

      return result;
    },
  }),
  notes: t.field({
    type: [NoteType],
    resolve: async () => Note.list(),
  }),
  notesWithDate: t.field({
    type: [NoteType],
    args: {
      noteDate: t.arg.string({ required: true }),
    },
    resolve: async (_, args) => {
      const result = await Note.listWithDate(args.noteDate);
      if (!result) {
        throw new Error("Note not found");
      }
      return result;
    },
  }),
}));

builder.mutationFields((t) => ({
  createNote: t.field({
    type: NoteType,
    args: {
      title: t.arg.string({ required: true }),
      noteDate: t.arg.string({ required: true }),
    },
    resolve: async (_, args) => await Note.create(args.title, args.noteDate),
  }),
}));
