import Vue from 'vue'
import ExampleComponent from "./components/ExampleComponent.vue";
import PostComponent from "./components/PostComponent.vue";

require('./bootstrap');

const app = new Vue({
    el: '#app',
    components: {
        ExampleComponent: ExampleComponent,
        PostComponent: PostComponent,

    }
});



