<template>
  <div class="hello">
    <button @click="navigateToRoute()">Click Me</button>
    <child-component :personName="'Sahil Narula'" @getDataFromChild="getDataFromChild"/>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    'child-component': ChildComponent,
  },
  methods: {
    navigateToRoute(){
      this.$router.push({path:'/data-component/routeText/dataText', params: { routeText: 'Vue Route Param', dataText: 'This is sample Data' }});
    }, 
    getDataFromChild(childData){
      console.log(childData);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #0c0f0e;
}
</style>
