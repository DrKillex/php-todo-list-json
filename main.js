'use strict'

const { createApp } = Vue

createApp({
    data() {
        return {
            todoList: [],
            newTodoText: '',
        }
    },
    methods: {
        //rimuove l elemento selezionato dalla lista
        remover(index) {
            this.todoList.splice(this.todoList[index], 1)
            console.log(index)
        },
        // aggiunge nuovo elemento alla lista
        addNewTodo() {
            if (this.newTodoText.trim() !== '') {
                const newTodo = {
                    newTodo: this.newTodoText
                }
                axios.post('server.php', newTodo , {
                    headers:{'Content-Type': 'multipart/form-data'}                   
                })
                .then((response) => {
                    this.todoList = response.data
                })
                this.newTodoText = ''
            }
        },
        //inverte done true con false e viceversa
        doneCheck(index) {
            this.todoList[index].done = !this.todoList[index].done
        }
    },
    created() {
        axios.get('server.php')
            .then((response) => {
                console.log(response);
                this.todoList = response.data
            })

    }
}).mount('#app')