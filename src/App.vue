<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <headers></headers>
      <gifs></gifs>
      <footers></footers>
  </div>
  </div>
</template>


<script>
  /* eslint-disable comma-dangle,comma-dangle,indent */

  import Headers from './components/Header.vue'
    import Gifs from './components/Gifs.vue'
  import Footers from './components/Footer.vue'
    export default {
      name: 'app',
      components: {Headers, Gifs, Footers}
    }
</script>

<style lang="scss" scoped>

</style>
