<template>
    <div class="col-md-12 contein">
        <!--<div class="col-md-2">-->
            <!--<button class="check"> </button>-->
        <!--</div>-->
        <div class="row content_ch">
        <div class="col-md-3 clears "  v-for="item in results_gif.data" >
                        <img :src="item.images.original.url" class="image_c" >
            </div>

            <div v-if="results_gif.data == 0 " class="col-md-12">
                <img src="../assets/notFound.gif" class="image_c img_not_found">
                <p class="not_found_text">Not Found</p>
            </div>
            <div class="col-md-12 show">
                <div class="row ">
                <div class="col-md-4"></div>
                <div class="col-md-1"><button class="btn prev" @click="searchPrev()" ><--</button></div>
                <div class="col-md-2 counter"><i><b class="counter_tiker">1</b></i> из <i><b class="total_count">{{parseInt(results_gif.pagination.total_count / 24)+1}}</b></i></div>
                <div class="col-md-1"><button class="btn next" @click="searchNext()">--></button></div>
                </div>
            </div>
        </div>

    </div>


</template>

<script>
    /* eslint-disable space-in-parens,no-undef,no-labels,no-trailing-spaces,no-unused-vars */
    import debounce from 'debounce/index'
    import $ from 'jquery'
    export default {
      name: 'app-gifs',

      computed: {
        results_gif () {
          return this.$store.getters.gifs
        }
      },
      methods: {
        searchNext: debounce(function (e) {
          var count = parseInt($('.counter_tiker').text())
          var totalCount = parseInt($('.total_count').text())
          count++
          var myq = $('#input_s').val()
          $('.counter_tiker').text(count)
          if (count <= totalCount) {
            $('.clears').fadeOut(500)
            this.$store.dispatch('searchNext', myq).then(function (data) {
              $('.clears').fadeIn(2500)
            }, function (error) {
              console.log(error)
            })
          } else {
            $('.counter_tiker').text(totalCount)
          }
        }, 600),
        searchPrev: debounce(function (e) {
          var count = parseInt($('.counter_tiker').text())
          count--
          var myq = $('#input_s').val()
          $('.counter_tiker').text(count)
          if (count > 0) {
            $('.clears').fadeOut(500)
            this.$store.dispatch('searchPrev', myq).then(function (data) {
              $('.clears').fadeIn(2500)
            }, function (error) {
              console.log(error)
            })
          } else {
            $('.counter_tiker').text('1')
          }
        }, 600)

      }
    }

</script>

<style  scoped>
    .content_ch {
        background-color: rgb(24, 24, 26);
    }
    img.image_c {
        margin-top: 10px;
        margin-bottom: 10px;
        width: 100%;
        height: 250px;
    }

    .image_c:hover{
        position: absolute;
        z-index: 9;
        top: -5%;
        left: 0;
        height: 300px;
        border: 5px solid lightseagreen;
        border-radius: 15px;
    }
    img.img_not_found{
        width: 100%;
        height: 600px;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        opacity: 0
    }
    .not_found_text{
        position: absolute;
        top: 40%;
        left:40%;
        color:red;
        font-size: 5vw;
    }
    .prev{
     width: 100%;
        margin: 10px 10px 10px 0px;
    }
    .prev:hover{
        background-color: brown;
        color: white;
    }
    .next{
     width: 100%;
        margin: 10px;
        margin-left: 0px;
    }
    .next:hover{
        background-color: brown;
        color: white;
    }

    .counter{
        text-align: center;
        color: white;
        line-height: 50px;
        font-size: 25px;
    }
    .show{
        display: none;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .check{
        width: 50px;
        height: 50px;
        margin: 10px;
        background-image: url("../assets/menu.png");
        background-size: 100%;
        background-color: rgb(24, 24, 26);
        border:none;
    }
    .check:hover{
        background-position: center;
        background-size: 102%;
    }
    .contein{
        background-color: rgb(24, 24, 26);
    }

</style>