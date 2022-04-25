import {db} from "../data/db.js";

export const Todo = {
    user: ( todo ) => {
        return db.user.find(
            (user) => user.id == todo.user
        );
    }
}