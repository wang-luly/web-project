<script setup lang="ts">
    import { useRouter } from 'vue-router'
    const router = useRouter()
    import { useCounterStore } from '../stores/counter'
    const counterStore=useCounterStore()
</script>

<template>
    Home
    两种路由跳转方式
    <router-link to="/Home"></router-link>
    <button @click="router.push('/about')">go to about</button>

    <div>
        通过pinia管理状态
        {{counterStore.count}}
        <button @click="counterStore.increament">+1</button>
    </div>
</template>

<style scoped>

</style>