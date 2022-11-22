import { createStore, action } from 'easy-peasy';

export const store = createStore({
  todos: [],
  addTodo: action((state, payload) => {
    state.todos.length=0;
    state.todos.push({ text: payload, done: false });
  }),
  comment:[],
  addComment: action((state,payload)=>{
    state.comment.length=0;
    state.comment.push({text:payload,done:false})
  })
});

