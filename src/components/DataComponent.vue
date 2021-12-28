<template>
  <div>
      Data Component 1
      {{routeText}}
      {{dataText}}
  </div>
</template>

<script>
export default {
name:'DataComponent',
props: ['dataText','routeText'],
created(){
    console.log(this.dataText);
    console.log(this.routeText);
}
}
</script>

<style>

</style>