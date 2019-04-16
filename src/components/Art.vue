<template>
  <div class="Art">    
    <h3>{{ art.title }}</h3>
    <div class="Art--div--flex">
      <button 
        :disabled="prevDisabled" 
        @click="$emit('move-prev')">
        <i class="fas fa-arrow-circle-left"></i>
      </button>
      <img v-if="art.imagecount" :src="art.images[0].baseimageurl" :alt="art.title" />
      <button 
        :disabled="nextDisabled"
        @click="$emit('move-next')">
        <i class="fas fa-arrow-circle-right"></i>
      </button>
    </div>
    <div v-for="person in art.people">
      <p class="App--p--margin">People:</p>
      <p :person="person">{{ person.displayname }}</p>
    </div>
    <p class="App--p--margin">Credit:</p>
    <p>{{ art.creditline }}</p>
  </div>
</template>

<script>
export default {
  name: 'Art',
  props: {
    art: Object,
    prevDisabled: Boolean,
    nextDisabled: Boolean,
  }
}
</script>

<style scoped>
  .Art {
    display: inline-block;
    width: 500px;
  }

  .Art--div--flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .App--p--margin {
    margin: 12px 0 0;
    font-weight: bolder;
  }

  h3 {
    height: 50px;
  }

  img {  
    object-fit: contain;
    height: 375px;
    width: 450px;
  }

  button {
    border: none;
    font-size: 25px;
    color: black;
    cursor: pointer;
    margin: 0 15px;
  }

  button:hover, button:disabled {
    color: darkgray;
  }

  button:disabled {
    cursor: not-allowed;
  }
</style>
