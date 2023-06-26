<script>
import axios from 'axios';

export default {
  data() {
    return {
      play: [],
    }
  },

  mounted() {
    this.loadPlay();
  },


  methods: {
    async loadPlay() {
      let response = await axios.get('/performance/play', { params: {
        title: this.$route.params.title
      }})

      this.play = response.data;
      console.log(response)
    },


    mainPage() {
      this.$router.push({
        name: 'main'
      })
    },

    personalPage(item) {
      this.$router.push({
        name: 'personal',
        params: {
          id: item._id
        }
      })
    },

    actorsPage() {
      this.$router.push({
        name: 'actors'
      });
    }
  }
}

</script>


<template>
    <header class="top">
        <div class="performancepage_header_inner">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">                   
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a href="" @click="mainPage">
                                    <img src="/src/assets/img/mainPage/header/logo_main_new_1.png
                            " alt="логотип" class="logo_img">
                            </a>

                        </li>
                      <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#" @click="mainPage">Главная</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#" @click="actorsPage">Актеры</a>
                      </li>
                    </ul>

                  </div>
                </div>
              </nav>
              <h1 class="perf_name">
                {{ play.title }}
            </h1>
        </div>
    </header>

    <!-- Секция с фотографиями спектакля -->
     <section class="photos_inner">
        <div class="container">
            <h2 class="photos_title">Галерея</h2>
            <div class="row rows-cols-2">
              <div class="col" v-for="(item, index) in play.photo">
                <img class="photo" :src="item" alt="Фото спектакля">
              </div>
            </div>
        </div>
     </section>


    <!-- Секция с описанием спектакля  -->
    <section class="info_inner">
        <div class="container">
            <h2 class="info_title">О спектакле</h2>
            <p class="perf_info">
              {{ play.description }}
            </p>
            
        </div>
     </section>

     <!-- Секция с актерами спектакля -->
     <section class="actors_inner">
        <div class="container">
            <h2 class="actors_title" style="margin-bottom: 30px;">Актёры</h2>
            <div class="row row-cols-md-6 row-cols-2 row-actors">
                <div class="col actor" v-for="(item, index) in play.actors" @click="personalPage(item)">
                    <img class="actor_img" :src="item.photo" alt="фото актера">
                    <a  class="actor_name">{{ item.fullName }}</a>
                </div>
            </div>
        </div>
     </section>
</template>

<style>



</style>