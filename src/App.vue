<template>
  <div id="app">
    <h1>HAPI Art</h1>
    <h3>It’s not everyday you can visit the Havard Art Museum, so here’s a peak inside</h3>
    <button 
      :disabled="isPrevDisabled" 
      v-on:click="moveToPrevImg"
    >Previous</button>
    <Art :key="paintings[currentImage].id" v-if="paintings.length" :art="paintings[currentImage]"/>
    <button 
    :disabled="isNextDisabled"
    v-on:click="moveToNextImg"
    >Next</button>
  </div>
</template>

<script>
import Art from './components/Art';

export default {
  name: 'app',
  components: {
    Art
  },
  data() {
    return {
      paintings: [],
      error: '',
      currentImage: 0,
    }
  },
  computed: {
    isPrevDisabled() {
      return this.currentImage === 0 ? true : false;
    },
    isNextDisabled() {
      return this.currentImage === this.paintings.length - 1 ? true : false;
    }
  },
  methods: {
    moveToNextImg() {
      this.currentImage += 1;
    },
    moveToPrevImg(e) {
      this.currentImage -= 1;
    }
  },
  created() {
    const url =
    'https://api.harvardartmuseums.org/object?apikey=' + process.env.VUE_APP_KEY + '&classification=Paintings&size=50';
    
    fetch(url)
    .then(response => response.json())
    .then(result => {
      return result.records.filter(
        record => record.primaryimageurl !== null
      )
    })
    .then(filteredResult => {
      return filteredResult.filter(record => record.images)
    })
    .then(paintingRecords => this.paintings = [...this.paintings, ...paintingRecords])
    .catch(error => this.error = error.message)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  box-sizing: border-box;
}
</style>
