<script setup lang="ts">
    import {useRoute} from 'vue-router'
    import { useTaskStore } from '../../stores/task';

    const taskStore=useTaskStore()
    const route=useRoute()
    const taskId=route.params.id
    console.log("taskId:",taskId);
    
</script>

<template>
    task
    {{ $route.params.id }}
</template>
