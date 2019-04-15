<template>
  <div id="app">
    <h1>HAPI Art</h1>
    <h3>It’s not everyday you can visit the Havard Art Museum, so here’s a peak inside</h3>
    <div v-bind:key="art.id" v-for="art in paintings">
      <Art v-bind:art="art"/>
    </div>
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
      error: ''
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
    .then(paintingRecords => this.paintings = [...this.paintings, ...paintingRecords])
    .catch(error => this.error = error)
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
}
</style>
