/******************************************
* KAWASAKI TODO LIST
******************************************/

const root = new Vue({
    el: '#root',
    data: {
        todos: [
            {
                text: 'Fit the drain',
                completed: false,
            },
            {
                text: 'Fit the light',
                completed: false,
            },
            {
                text: 'To refuel',
                completed: false,
            },
            {
                text: 'Check the oil',
                completed: false,
            },
        ],
        newTodo: '',
    },

    methods: {
        // Add Todo on the list
        addTodo() {
            if (this.newTodo !== '' && this.newTodo.trim()) {
                this.todos.push({
                    text: this.newTodo,
                    completed: false,
                })
    
                this.newTodo = '';
            }
        },

        // Remove ToDo on the list
        removeTodo(index) {
            this.todos.splice(index, 1);
        },

        // Update ToDo on the list
        updateTodo(index) {
            this.todos[index].completed = ! this.todos[index].completed
        }
    }
})