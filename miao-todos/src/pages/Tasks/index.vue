<script setup lang="ts">
    import { ref } from 'vue';
    import { useTaskStore } from '../../stores/task';

    const inputRef=ref<HTMLInputElement|null>(null)
    const taskStore=useTaskStore()


</script>

<template>
    tasks
    <div>
        <input type="text" ref="inputRef" >
        <button @click="taskStore.handleAdd(inputRef?.value ?? '')" >添加</button>
    </div>
    <div v-for="(task,i) in taskStore.tasks"  :key="task.id">
        <div>
            <router-link :to="`/task/${task.id}`">
                {{ task.id }}
                {{ task.name }}
            </router-link>
            
            <button @click="taskStore.handleDelete(i)">删除</button>
        </div>
    </div>
</template>

<style scoped>

</style>