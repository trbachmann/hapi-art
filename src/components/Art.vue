<template>
  <div class="Art">
    <h3>{{ art.title }}</h3>
    <img v-if="art.imagecount" :src="art.images[0].baseimageurl" :alt="art.title" />
    <div v-for="person in art.people">
      <p>People:</p>
      <p :person="person">{{ person.displayname }}</p>
    </div>
    <p>Credit: {{ art.creditline }}</p>
  </div>
</template>

<script>
export default {
  name: 'Art',
  props: {
    art: Object
  }
}
</script>

<style scoped>
  .Art {
    display: inline-block;
    width: 500px;
  }

  h3 {
    width: 450px;
    height: 100px;
  }
 img {  
    object-fit: contain;
    height: 375px;
    width: 450px;
 }
</style>
