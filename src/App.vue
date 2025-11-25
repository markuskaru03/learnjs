<script setup>
import { computed, ref } from 'vue';

let message = ref('Hello Vue!');
let isDanger = ref(false);
let newItem = ref('Kaitseväe Ressursside Amet');
let i = 0;
let items = ref([
    {id: i++, name: 'Riided',isDone: false},
    {id: i++, name: 'Kott',isDone: true},
    {id: i++, name: 'Kiiver',isDone: true},
    {id: i++, name: 'NATO väed',isDone: false},
    {id: i++, name: 'Heleni Canoni kaamera', isDone: false},
]);

function add(){
    if(newItem.value.trim() !== ''){
        items.value.push({id: i++, name: newItem.value, isDone: false});
    }
    newItem.value = '';
}

function inputUpdate(event){
    console.log(event)
    newItem.value = event.target.value;
}

let doneItems = computed(() => items.value.filter(item => item.isDone));

</script>

<template>
    <div class="container mt-2">
        <div class="content">
            <button class="button is-primary" @click="message = 'Hello VM24'">Click me!</button>
            <h1>{{ message }}</h1>
            <button class="button" :class="{ 'is-danger': isDanger, 'is-warning': !isDanger }"
                @click="isDanger = !isDanger">
                Cool button</button>

            <div class="field has-addons mt-2">
                <div class="control is-expanded">
                    <input v-model="newItem" @keydown.enter="add" class="input" type="text" placeholder="Add item">
                </div>
                <div class="control">
                    <button class="button is-info" @click="add">
                        Add item
                    </button>
                </div>
            </div>



        </div>
        <h1>{{ newItem.split('').reverse().join('') }}</h1>

        <h1>All items</h1>

        <ul>
            <li v-for="item in items">
                {{ item.name }}
                <input type = "checkbox" v-model="item.isDone">
            </input>

            </li>
        </ul>
        <h1>Done items</h1>

        <ul>
            <li v-for="item in doneItems">
                {{ item.name }}
                <input type = "checkbox" v-model="item.isDone">
            </input>

            </li>
        </ul>
    </div>
</template>