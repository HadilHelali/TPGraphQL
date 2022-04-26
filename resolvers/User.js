import {db} from "../data/db.js";

export const User = {
    todos: ({ id }, args, context, info) => {
      return db.todos.filter((todo) => todo.userId === id);
    },
  };