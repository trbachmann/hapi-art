<template>
  <div id="app">
    <header>
      <h1>HAPI Art</h1>
      <p class="App--p">It’s not everyday you can visit the Havard Art Museum. Here’s a peak inside.</p>
      <Nav 
        v-on:update-view="updateView"
        :photoDisabled="isPhotoDisabled"
        :paintingDisabled="isPaintingDisabled"  
      />
    </header>
    <Art 
      :key="paintings[currentImage].id" 
      v-if="viewPaintings" 
      :art="paintings[currentImage]"
      v-on:move-prev="moveToPrevImg"
      v-on:move-next="moveToNextImg"
      :prevDisabled="isPrevDisabled"
      :nextDisabled="isNextDisabled"
    />
    <Art 
      :key="photos[currentImage].id" 
      v-else-if="viewPhotos" 
      :art="photos[currentImage]"
      v-on:move-prev="moveToPrevImg"
      v-on:move-next="moveToNextImg"
      :prevDisabled="isPrevDisabled"
      :nextDisabled="isNextDisabled"
    />
  </div>
</template>

<script>
import Art from './components/Art';
import Nav from './components/Nav';

export default {
  name: 'app',
  components: {
    Art,
    Nav
  },
  data() {
    return {
      paintings: [],
      photos: [],
      error: '',
      currentImage: 0,
      viewPhotos: false,
      viewPaintings: false,
    }
  },
  computed: {
    isPrevDisabled() {
      return this.currentImage === 0 ? true : false;
    },
    isNextDisabled() {
      let lengthToCheck;
      if(this.viewPaintings === true) {
        lengthToCheck = this.paintings.length;
      } else {
        lengthToCheck = this.photos.length;
      }
      return this.currentImage === lengthToCheck - 1 ? true : false;
    },
    isPhotoDisabled() {
      return (this.viewPhotos === true) ? true : false;
    },
    isPaintingDisabled() {
      return (this.viewPaintings === true) ? true : false;
    }
  },
  methods: {
    moveToNextImg() {
      this.currentImage += 1;
    },
    moveToPrevImg() {
      this.currentImage -= 1;
    },
    updateArtView() {
      this.view = 'painting'
    },
    updateView() {
      this.currentImage = 0;
      this.viewPhotos = !this.viewPhotos
      this.viewPaintings = !this.viewPaintings
    },
    getPhotos() {
      const url = 'https://api.harvardartmuseums.org/object?apikey=' + process.env.VUE_APP_KEY + '&classification=Photographs&size=50';
      fetch(url)
      .then(response => response.json())
      .then(result => {
        const filteredResult = this.filterByImageUrl(result.records)
        return this.filterByImages(filteredResult)
      })
      .then(photoRecords => this.photos = [...this.photos, ...photoRecords])
      .catch(error => this.error = error.message)
    },
    filterByImageUrl(arr) {
      return arr.filter(item => item.primaryimageurl !== null)
    },
    filterByImages(arr) {
      return arr.filter(record => record.images)
    }
  },
  created() {
    const url =
    'https://api.harvardartmuseums.org/object?apikey=' + process.env.VUE_APP_KEY + '&classification=Paintings&size=30';
    
    fetch(url)
    .then(response => response.json())
    .then(result => {
      const filteredResult = this.filterByImageUrl(result.records)
      return this.filterByImages(filteredResult)
    })
    .then(paintingRecords => this.paintings = [...this.paintings, ...paintingRecords])
    .then(() => {
      this.viewPaintings = !this.viewPaintings
      this.getPhotos()
    })
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
    padding-top: 10px;
    background-color: #f1ebe7;
    margin-bottom: 20px;
  }

  .App--p {
    font-size: 20px;
    font-weight: medium;
  }
</style>
