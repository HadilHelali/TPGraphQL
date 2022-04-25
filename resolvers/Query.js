import { db } from "../data/db.js";

export const Query = {
    
    getToDos: () => {
        return db.todos;
    },
    getTodosByUser: (_, {id}) => {
        return db.todos.find(
            (todo) => todo.id == id
        );
    },
    getUserByTodo: (_, {id}) => {
        return db.users.find(
        (user) => user.todo == id
        );
    }
}
