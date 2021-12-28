<template>
  <div>
      This is a child component
      {{personName}}
      <button @click="sendDataToParent()">Child Button</button>
  </div>
</template>

<script>
export default {

name: 'ChildComponent',
props: ['personName'],
created() {
    console.log(this.personName);
},
data() {
    return {

    }
},

methods: {
    sendDataToParent() {
        this.$emit('getDataFromChild', 'Vue Training');
    }
}

}
</script>

<style>

</style>