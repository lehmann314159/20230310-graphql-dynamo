
var Article_possibleTypes = ['Article']
export var isArticle = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isArticle"')
  return Article_possibleTypes.includes(obj.__typename)
}



var Mutation_possibleTypes = ['Mutation']
export var isMutation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMutation"')
  return Mutation_possibleTypes.includes(obj.__typename)
}



var Note_possibleTypes = ['Note']
export var isNote = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isNote"')
  return Note_possibleTypes.includes(obj.__typename)
}



var Query_possibleTypes = ['Query']
export var isQuery = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



var Task_possibleTypes = ['Task']
export var isTask = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTask"')
  return Task_possibleTypes.includes(obj.__typename)
}
