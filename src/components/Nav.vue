<template>
  <div>
    <button :disabled="paintingDisabled" @click="$emit('update-view')">Paintings</button>
    <button :disabled="photoDisabled" @click="$emit('update-view')">Photographs</button>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    photoDisabled: Boolean,
    paintingDisabled: Boolean
  }
}
</script>

<style scoped>
  button {
    background-color: #f1ebe7;
    border: none;
    border-bottom: 1px solid transparent;
    cursor: pointer;
    font-size: 20px;
    margin: 5px 20px 0px;
    padding-bottom: 10px;
  }

  button:hover{
    border-bottom: 1px solid black;
  }

  button:disabled {
    border-bottom: 1px solid black;
    color: black;
    cursor: not-allowed;
  }
</style>