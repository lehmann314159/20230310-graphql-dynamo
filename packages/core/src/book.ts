import { ulid } from "ulid";
import { Entity, EntityItem } from "electrodb";
import { Dynamo } from "./dynamo";

export * as Book from "./book";

export const BookEntity = new Entity(
  {
    model: {
      version: "1",
      entity: "Book",
      service: "bookapp",
    },
    attributes: {
      bookID: {
        type: "string",
        required: true,
        readOnly: true,
      },
      bookTitle: {
        type: "string",
        required: true,
      },
    },
    indexes: {
      primary: {
        pk: {
          field: "pk",
          composite: [],
        },
        sk: {
          field: "sk",
          composite: ["bookID"],
        },
      },
      byBookTitle: {
        index: "gsi5",
        pk: {
          field:"gsi5pk",
          composite: ["bookTitle"]}
      },      
      byChapterTitle: {
        collection: "bookcollection",
        index: "gsi4",
        pk: {
          field: "gsi4pk",
          composite: ['bookTitle'],},
        sk: {
          field: "gsi4sk",
          composite: [""]
        }
      }
    }
    
  },
  Dynamo.Configuration
);

export type BookEntityType = EntityItem<typeof BookEntity>;

export async function create(bookTitle: string) {
  const result = await BookEntity.create({
    bookID: ulid(),
    bookTitle,
  }).go();
  return result.data;
}

export async function get(bookID: string) {
  const result = await BookEntity.get({ bookID }).go();
  return result.data;
}

export async function list() {
  const result = await BookEntity.query.primary({}).go();
  return result.data;
}

export async function listByBookTitle(bookTitle: string) {
  const result = await BookEntity.query.byBookTitle({bookTitle}).go();
  return result.data;
}
