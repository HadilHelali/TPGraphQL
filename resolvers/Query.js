import { db } from "../data/db.js";

export const Query = {
    
    getToDos: () => {
        return db.todos;
    },
      getTodoById: (parent, { id }, context, info) => {
        const todo = db.todos.find((todo) => todo.id === id);
        if (!todo) {
          throw new Error(`Le todo d'id ${id} n'existe pas`);
        }
        return todo;
      },
      getUsers: (parent, args,context, info) => {
        return db.users;
      },
      getUserById: (parent, { id },context, info) => {
        const user = db.users.find((user) => user.id === id);
        if (!user) {
          throw new Error(`Le user d'id ${id} n'existe pas`);
        }
        return user;
      },
}