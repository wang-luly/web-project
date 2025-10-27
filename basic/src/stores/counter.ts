import {defineStore} from 'pinia'
import { ref } from 'vue'
export const useCounterStore = defineStore('counter',()=>{
    const count = ref(0)
    function increament(){
        count.value++
    }
    return {count,increament}
})