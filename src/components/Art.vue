<template>
  <div class="Art">
    <p>{{ art.title }}</p>
    <img :src="art.images[0].baseimageurl" :alt="art.title" />
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
 img {
   height: 150px;
   width: 200px;
 }
</style>
