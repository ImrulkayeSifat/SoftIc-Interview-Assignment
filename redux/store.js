import { createStore, action } from 'easy-peasy';

const store = createStore({
  todos: ['pk'],
  addTodo: action((state, payload) => {
    state.todos.push({ text: payload, done: false });
  }),
});

