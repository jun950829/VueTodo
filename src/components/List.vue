<template>
    <div>
        <div class="list" v-for="(list,index) in todoList" v-bind:key="index">
            <div v-bind:class="{done:list.mode==='done'}">{{list.msg}}</div>
            <button v-if="list.mode ==='created'" @click="$emit('list-done',index, 'done')">Done</button>
            <button v-else @click="$emit('list-done',index,'created')">Recheck</button>
            <button @click="$emit('list-delete',index)">Delete</button>
            <button @click="listEdit(list.msg,index)">Edit</button>
        </div>
    </div>
</template>

<script>
import {eventBus} from "../main"

export default {
    props:["todoList"],
    methods:{
        listEdit(msg, index) {
            eventBus.$emit("list-edit",msg, index)
        }
    }
}
</script>

<style scoped lang="scss">
    .list {
        border-bottom: 1px solid #ddd;
        div {
            line-height: 50px;
            &.done{
                text-decoration: line-through;
            }
        }
        button {
            padding: 8px 15px;
            border: 1px solid #4fc08d;
            border-radius: 30px;
            background: white;
            margin:10px;
        }
    }
</style>