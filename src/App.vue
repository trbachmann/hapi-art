<template>
  <div id="app">
    <h1>HAPI Art</h1>
    <p class="App--p">It’s not everyday you can visit the Havard Art Museum. Here’s a peak inside.</p>
    <div class="App--div">
    <button 
      :disabled="isPrevDisabled" 
      v-on:click="moveToPrevImg"
    ><i class="fas fa-arrow-circle-left"       :disabled="isPrevDisabled" 
      v-on:click="moveToPrevImg"></i></button>
    
    <Art :key="paintings[currentImage].id" v-if="paintings.length" :art="paintings[currentImage]"/>
    <button 
    :disabled="isNextDisabled"
    v-on:click="moveToNextImg"
    ><i class="fas fa-arrow-circle-right"></i></button>
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
  margin-top: 60px;

  box-sizing: border-box;
}

h1 {
  font-size: 40px;
}

.App--p {
  font-size: 22px;
  font-weight: medium;
}

.App--div {
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  border: none;
  font-size: 25px;
  color: black;
  cursor: pointer;
}

button:hover, button:disabled {
  color: darkgray;
}

button:disabled {
  cursor: not-allowed;
}

</style>
