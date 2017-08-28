<template>
    <div class="col-md-12 header">
        <div class="row">
            <div class="col-md-3 ">
                <img src="../assets/giphyseriesc.gif" class="image_logo">
            </div>
    <div class="col-md-9 gifsearch">
        <input type = "text" autocomplete="on" id="input_s" v-model="query"  @input="search()"  >
    </div>

        </div>
    </div>
</template>

<script>
  import debounce from 'debounce/index'
  import $ from 'jquery'
  /* eslint-disable indent */

    export default {
      name: 'app-header',
      data () {
        return {
          query: ''
        }
      },
      methods: {
        search: debounce(function (e) {
          if (this.query) {
            $('.show').show()
            $('.counter_tiker').text('1')
            $('.clears').fadeOut(500)
            this.$store.dispatch('search', this.query).then(function (data) {
              $('.clears').fadeIn(2500)
            }, function (error) {
              console.log(error)
            })
          } else {
            $('.show').hide()
            $('.counter_tiker').text('1')
            $('.clears').fadeOut(500)
            this.$store.dispatch('randomgif').then(function (data) {
              $('.clears').fadeIn(2500)
            }, function (error) {
              console.log(error)
            })
          }
        }, 600)
      },
      beforeCreate: function () {
        this.$store.dispatch('randomgif')
      }
    }
</script>

<style  scoped>
    .header {
        background-color: rgb(24, 24, 26);
    }

    .image_logo {
        width: 200px;
        height: 100px;
    }
    #input_s {
        margin-top: 30px;
        width: 100%;
        height: 40px;
        padding-left: 20px;
    }
</style>