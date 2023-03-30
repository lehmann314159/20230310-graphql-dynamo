import { builder } from "./builder";

import "./types/book";
import "./types/chapter";
import "./types/note";
import "./types/task";

export const schema = builder.toSchema({});
