import {FieldsSelection,Observable} from '@genql/runtime'

export type Scalars = {
    ID: string,
    String: string,
    Boolean: boolean,
}

export interface Article {
    id: Scalars['ID']
    title: Scalars['String']
    url: Scalars['String']
    __typename: 'Article'
}

export interface Mutation {
    createArticle: Article
    createNote: Note
    createTask: Task
    __typename: 'Mutation'
}

export interface Note {
    date: Scalars['String']
    id: Scalars['ID']
    title: Scalars['String']
    __typename: 'Note'
}

export interface Query {
    article: Article
    articles: Article[]
    note: Note
    notes: Note[]
    notesWithDate: Note[]
    task: Task
    tasks: Task[]
    tasksWithDate: Task[]
    __typename: 'Query'
}

export interface Task {
    date: Scalars['String']
    id: Scalars['ID']
    state: Scalars['String']
    title: Scalars['String']
    __typename: 'Task'
}

export interface ArticleRequest{
    id?: boolean | number
    title?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MutationRequest{
    createArticle?: [{title: Scalars['String'],url: Scalars['String']},ArticleRequest]
    createNote?: [{noteDate: Scalars['String'],title: Scalars['String']},NoteRequest]
    createTask?: [{taskDate: Scalars['String'],taskState: Scalars['String'],title: Scalars['String']},TaskRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface NoteRequest{
    date?: boolean | number
    id?: boolean | number
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryRequest{
    article?: [{articleID: Scalars['String']},ArticleRequest]
    articles?: ArticleRequest
    note?: [{noteID: Scalars['String']},NoteRequest]
    notes?: NoteRequest
    notesWithDate?: [{noteDate: Scalars['String']},NoteRequest]
    task?: [{taskID: Scalars['String']},TaskRequest]
    tasks?: TaskRequest
    tasksWithDate?: [{taskDate: Scalars['String']},TaskRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TaskRequest{
    date?: boolean | number
    id?: boolean | number
    state?: boolean | number
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


const Article_possibleTypes: string[] = ['Article']
export const isArticle = (obj?: { __typename?: any } | null): obj is Article => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isArticle"')
  return Article_possibleTypes.includes(obj.__typename)
}



const Mutation_possibleTypes: string[] = ['Mutation']
export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
  return Mutation_possibleTypes.includes(obj.__typename)
}



const Note_possibleTypes: string[] = ['Note']
export const isNote = (obj?: { __typename?: any } | null): obj is Note => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isNote"')
  return Note_possibleTypes.includes(obj.__typename)
}



const Query_possibleTypes: string[] = ['Query']
export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



const Task_possibleTypes: string[] = ['Task']
export const isTask = (obj?: { __typename?: any } | null): obj is Task => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isTask"')
  return Task_possibleTypes.includes(obj.__typename)
}


export interface ArticlePromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    title: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    url: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface ArticleObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    title: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    url: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface MutationPromiseChain{
    createArticle: ((args: {title: Scalars['String'],url: Scalars['String']}) => ArticlePromiseChain & {get: <R extends ArticleRequest>(request: R, defaultValue?: FieldsSelection<Article, R>) => Promise<FieldsSelection<Article, R>>}),
    createNote: ((args: {noteDate: Scalars['String'],title: Scalars['String']}) => NotePromiseChain & {get: <R extends NoteRequest>(request: R, defaultValue?: FieldsSelection<Note, R>) => Promise<FieldsSelection<Note, R>>}),
    createTask: ((args: {taskDate: Scalars['String'],taskState: Scalars['String'],title: Scalars['String']}) => TaskPromiseChain & {get: <R extends TaskRequest>(request: R, defaultValue?: FieldsSelection<Task, R>) => Promise<FieldsSelection<Task, R>>})
}

export interface MutationObservableChain{
    createArticle: ((args: {title: Scalars['String'],url: Scalars['String']}) => ArticleObservableChain & {get: <R extends ArticleRequest>(request: R, defaultValue?: FieldsSelection<Article, R>) => Observable<FieldsSelection<Article, R>>}),
    createNote: ((args: {noteDate: Scalars['String'],title: Scalars['String']}) => NoteObservableChain & {get: <R extends NoteRequest>(request: R, defaultValue?: FieldsSelection<Note, R>) => Observable<FieldsSelection<Note, R>>}),
    createTask: ((args: {taskDate: Scalars['String'],taskState: Scalars['String'],title: Scalars['String']}) => TaskObservableChain & {get: <R extends TaskRequest>(request: R, defaultValue?: FieldsSelection<Task, R>) => Observable<FieldsSelection<Task, R>>})
}

export interface NotePromiseChain{
    date: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    title: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface NoteObservableChain{
    date: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    title: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface QueryPromiseChain{
    article: ((args: {articleID: Scalars['String']}) => ArticlePromiseChain & {get: <R extends ArticleRequest>(request: R, defaultValue?: FieldsSelection<Article, R>) => Promise<FieldsSelection<Article, R>>}),
    articles: ({get: <R extends ArticleRequest>(request: R, defaultValue?: FieldsSelection<Article, R>[]) => Promise<FieldsSelection<Article, R>[]>}),
    note: ((args: {noteID: Scalars['String']}) => NotePromiseChain & {get: <R extends NoteRequest>(request: R, defaultValue?: FieldsSelection<Note, R>) => Promise<FieldsSelection<Note, R>>}),
    notes: ({get: <R extends NoteRequest>(request: R, defaultValue?: FieldsSelection<Note, R>[]) => Promise<FieldsSelection<Note, R>[]>}),
    notesWithDate: ((args: {noteDate: Scalars['String']}) => {get: <R extends NoteRequest>(request: R, defaultValue?: FieldsSelection<Note, R>[]) => Promise<FieldsSelection<Note, R>[]>}),
    task: ((args: {taskID: Scalars['String']}) => TaskPromiseChain & {get: <R extends TaskRequest>(request: R, defaultValue?: FieldsSelection<Task, R>) => Promise<FieldsSelection<Task, R>>}),
    tasks: ({get: <R extends TaskRequest>(request: R, defaultValue?: FieldsSelection<Task, R>[]) => Promise<FieldsSelection<Task, R>[]>}),
    tasksWithDate: ((args: {taskDate: Scalars['String']}) => {get: <R extends TaskRequest>(request: R, defaultValue?: FieldsSelection<Task, R>[]) => Promise<FieldsSelection<Task, R>[]>})
}

export interface QueryObservableChain{
    article: ((args: {articleID: Scalars['String']}) => ArticleObservableChain & {get: <R extends ArticleRequest>(request: R, defaultValue?: FieldsSelection<Article, R>) => Observable<FieldsSelection<Article, R>>}),
    articles: ({get: <R extends ArticleRequest>(request: R, defaultValue?: FieldsSelection<Article, R>[]) => Observable<FieldsSelection<Article, R>[]>}),
    note: ((args: {noteID: Scalars['String']}) => NoteObservableChain & {get: <R extends NoteRequest>(request: R, defaultValue?: FieldsSelection<Note, R>) => Observable<FieldsSelection<Note, R>>}),
    notes: ({get: <R extends NoteRequest>(request: R, defaultValue?: FieldsSelection<Note, R>[]) => Observable<FieldsSelection<Note, R>[]>}),
    notesWithDate: ((args: {noteDate: Scalars['String']}) => {get: <R extends NoteRequest>(request: R, defaultValue?: FieldsSelection<Note, R>[]) => Observable<FieldsSelection<Note, R>[]>}),
    task: ((args: {taskID: Scalars['String']}) => TaskObservableChain & {get: <R extends TaskRequest>(request: R, defaultValue?: FieldsSelection<Task, R>) => Observable<FieldsSelection<Task, R>>}),
    tasks: ({get: <R extends TaskRequest>(request: R, defaultValue?: FieldsSelection<Task, R>[]) => Observable<FieldsSelection<Task, R>[]>}),
    tasksWithDate: ((args: {taskDate: Scalars['String']}) => {get: <R extends TaskRequest>(request: R, defaultValue?: FieldsSelection<Task, R>[]) => Observable<FieldsSelection<Task, R>[]>})
}

export interface TaskPromiseChain{
    date: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    state: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    title: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface TaskObservableChain{
    date: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    state: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    title: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}