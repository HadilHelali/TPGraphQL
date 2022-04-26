import {db} from "../data/db.js";

export const Todo = {

    user: ({ userId },args,context,info) => {
        return db.users.find(
            (user) => user.id === userId
        );
    }
}