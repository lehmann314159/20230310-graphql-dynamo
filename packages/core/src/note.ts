import { ulid } from "ulid";
import { Entity, EntityItem } from "electrodb";
import { Dynamo } from "./dynamo";

export * as Note from "./note";

export const NoteEntity = new Entity(
  {
    model: {
      version: "6",
      entity: "Note",
      service: "scratch",
    },
    attributes: {
      noteID: {
        type: "string",
        required: true,
        readOnly: true,
      },
      title: {
        type: "string",
        required: true,
      },
      noteDate: {
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
          composite: ["noteID"],
        },
      },
      withNoteDate: {
        index: 'gsi2',
        pk: {
          field: 'gsi2pk',
          composite: ['noteDate'],
        },
      }
    },
  },
  Dynamo.Configuration
);

export type NoteEntityType = EntityItem<typeof NoteEntity>;

export async function create(title: string, noteDate: string) {
  const result = await NoteEntity.create({
    noteID: ulid(),
    title,
    noteDate
  }).go();

  return result.data;
}

export async function get(noteID: string) {
  const result = await NoteEntity.get({ noteID }).go();
  return result.data;
}

export async function list() {
  const result = await NoteEntity.query.primary({}).go();
  return result.data;
}

export async function listWithDate(noteDate: string) {
  const result = await NoteEntity.query.withNoteDate({noteDate}).go();
  return result.data;
}
