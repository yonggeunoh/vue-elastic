<template>
<!-- eslint-disable vue/no-use-v-if-with-v-for, vue/no-confusing-v-for-v-if -->
  <div id="app" class="container">
      <br/>
      <div>
        <b-form-input v-model="query" size="sm" placeholder="Enter your Query"></b-form-input>
      </div>
      <br/>
      <div>
        <b-button variant="outline-primary" @click="search" size="sm">Search</b-button>
      </div>
      <br/>
      <div class="mt-2" size="sm">Find : {{ query }}</div>
      
    <div><Result /></div>
  </div>
</template>

<script>
import Result from "./components/layout/Result.vue";
export default {
  name:'App',
  components:{
    Result,
  },

  data() {
    return {
      query: '',
      data: [],
      items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ],
    }
  },
  methods: {
    search() {
        this.axios.get('http://localhost:5000/search?q='+this.query)
              .then(response => {
                this.data = response.data;
          })
    }
  }
}
</script>
