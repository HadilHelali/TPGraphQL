
export const Mutation = {
    addTodo: (parent, { addTodoInput }, { db , pubsub }, info) => {
            const exist = db.users.some((elt)=> elt["id"]== addTodoInput.userId);
        if (!exist) {
        throw new Error("le user n'existe pas");
        } else {
            const newTodo = { id: db.todos.length ? db.todos[db.todos.length - 1].id + 1 : 1, status: "WAITING",...addTodoInput};
            db.todos.push(newTodo);
            pubsub.publish("persistTodo",{ persistTodo: { todo: newTodo , mutation: "ADD"} });
            return newTodo ;
        }
    },

    modifTodo: (parent, { id , modifTodoInput }, { db , pubsub }, info) => {
        const exist = db.users.some((elt)=> elt["id"]== modifTodoInput.userId);
        if (modifTodoInput.userId && !exist){
            throw new Error(`Le user modifié n'existe pas`);  
            }else {
                const todo = db.todos.find((todo) => todo.id === id);
                if(!todo){
                throw new Error(`Ce todo n'existe pas`);
                    }else {
                for(let key in modifTodoInput) {
                    todo[key]= modifTodoInput[key];
                }
                pubsub.publish("persistTodo",{ persistTodo: { todo: todo, mutation: "UPDATE"} });
                return todo;
                }
            }
    },
    
    deleteTodo:(parent, { TodoId }, { db , pubsub }, info) => {
        const indexTodo = db.todos.findIndex((todo)=> todo.id=== id);
        if(indexTodo === -1){
            throw new Error("Todo innexistant");
        }else {
        const [todo] = db.todos.splice(indexTodo,1);
        pubsub.publish("persistTodo",{ persistTodo: { todo: todo, mutation: "DELETE"} });
        return todo;
        }
    }
}