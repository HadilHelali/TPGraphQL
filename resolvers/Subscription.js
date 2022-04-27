export const Subscription = {
    persistTodo: {
        subscribe(parent, args, { pubsub }, info) {
            return pubsub.asyncIterator('persistTodo');
        }
    }
}