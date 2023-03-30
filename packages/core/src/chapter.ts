import { ulid } from "ulid";
import { Entity, EntityItem } from "electrodb";
import { Dynamo } from "./dynamo";

export * as Chapter from "./chapter";

export const ChapterEntity = new Entity(
  {
    model: {
      version: "1",
      entity: "Chapter",
      service: "bookapp",
    },
    attributes: {
      bookID: {
        type: "string",
        required: true,
      },
      chapterID: {
        type: "string",
        required: true,
        readOnly: true,
      },
      chapterTitle: {
        type: "string",
        required: true,
      },
      theme: {
        type: "string",
        required: true,
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
          composite: ["chapterID"],
        },
      },      
      byChapterTitle: {
        index: 'gsi3',
        pk: {
          field: 'gsi3pk',
          composite: ['chapterTitle'],
        },
      },
      byTheme: {
        index: 'gsi3',
        pk: {
          field: 'gsi3pk',
          composite: ['theme'],
        },
      },
      byBookID: {
        index: 'gsi4',
        pk: {
          field: 'gsi4pk',
          composite: ['bookID'],
        },
      }
    }
  },
  Dynamo.Configuration
);

export type ChapterEntityType = EntityItem<typeof ChapterEntity>;

export async function create(bookID: string, chapterTitle: string, theme: string) {
  const result = await ChapterEntity.create({
    bookID,
    chapterID: ulid(),
    chapterTitle,
    theme,
  }).go();
  return result.data;
}

export async function get(chapterID: string) {
  const result = await ChapterEntity.get({ chapterID }).go();
  return result.data;
}

export async function list() {
  const result = await ChapterEntity.query.primary({}).go();
  return result.data;
}
export async function listByBookID(bookID: string) {
  const result = await ChapterEntity.query.byBookID({bookID}).go();
  return result.data;
}
export async function listByChapterTitle(chapterTitle: string) {
  const result = await ChapterEntity.query.byChapterTitle({chapterTitle}).go();
  return result.data;
}

export async function listByTheme(theme: string) {
  const result = await ChapterEntity.query.byTheme({theme}).go();
  return result.data;
}