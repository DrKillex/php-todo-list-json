'use strict'

const { createApp } = Vue

createApp({
    data() {
        return {
            todoList: [
                {
                    text: 'testo 1',
                    done: false
                },
                {
                    text: 'testo 2',
                    done: true
                }
            ],
            newTodoText: '',
        }
    },
    methods: {
        //rimuove l elemento selezionato dalla lista
        remover(index){
            this.todoList.splice(this.todoList[index],1)
            console.log(index)
        },
        // aggiunge nuovo elemento alla lista
        addNewTodo(){
            if(this.newTodoText.trim() !== ''){
                this.todoList.push({text: this.newTodoText, done: false})
                this.newTodoText = ''
            } else {
                this.todoList.push({text: 'forse se scrivi qualcosa magari è meglio eh...che dici?', done: false})
                this.newTodoText = ''
            }
        },
        //inverte done true con false e viceversa
        doneCheck(index){
            this.todoList[index].done = !this.todoList[index].done
        }
    }
}).mount('#app')