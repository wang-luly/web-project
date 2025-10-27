import {defineStore} from 'pinia';
import {ref} from 'vue';
export const useTaskStore=defineStore('task',()=>{
    const tasks=ref<Array<{id:number,name:string}>>([])
    const handleAdd=(taskName:string)=>{
        if(!taskName) return;
        tasks.value.push({
            id:tasks.value.length+1,
            name:taskName
        })
    }
    const handleDelete=(index:number)=>{
        tasks.value.splice(index,1)
    }
    return {
        tasks,
        handleAdd,
        handleDelete
    }
})