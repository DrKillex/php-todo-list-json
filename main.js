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

                const data = {
                    newTodo: this.newTodoText
                }
                axios.post('server.php',data , {
                    Headers: {'Content-type': 'multipart/form-data'}
                })
                .then((response) => {
                    console.log(response);
                    this.todoList = response.data
                })


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