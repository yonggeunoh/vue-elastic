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
      items: [],
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
