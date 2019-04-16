<template>
  <div id="app">
    <header>
      <h1>HAPI Art</h1>
      <p class="App--p">It’s not everyday you can visit the Havard Art Museum. Here’s a peak inside.</p>
    </header>
    <Art 
      :key="paintings[currentImage].id" 
      v-if="paintings.length" 
      :art="paintings[currentImage]"
      v-on:move-prev="moveToPrevImg"
      v-on:move-next="moveToNextImg"
      :prevDisabled="isPrevDisabled"
      :nextDisabled="isNextDisabled"
    />
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
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, 'Font Awesome\ 5 Free', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    box-sizing: border-box;
    margin: 0;
  }

  body {
    margin: 0;
  }

  h1 {
    font-size: 40px;
    margin: 0;
  }

  header {
    box-shadow: -11px -9px 2px 0px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0, 0, 0, 0.06);
    height: 140px;
    padding-top: 10px;
    background-color: #f1ebe7;
    margin-bottom: 20px;
  }

  .App--p {
    font-size: 20px;
    font-weight: medium;
  }
</style>
