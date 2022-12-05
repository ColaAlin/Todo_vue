const app = Vue.createApp({
  data() {
    return {
      newTodo: "",
      todos: [],
    };
  },
  methods: {
    addNewTodo() {
      this.todos.push({
        id: Date.now(),
        description: this.newTodo,
        done: false,
      });
    },
    resetInput() {
      this.newTodo = "";
    },
    changeDoneState(id) {
      const currentTodo = this.todos.find((todo) => todo.id === id);
      currentTodo.done = !currentTodo.done;
    },
    deleteAllDone() {
      this.todos = this.todos.filter((todo) => {
        return todo.done !== true;
      });
    },
  },
}).mount("#app");
