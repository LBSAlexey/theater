<script>
import axios from 'axios';

export default {
  data() {
    return {
      actors: [],
      loading: true
    }
  },
  methods: {
    async loadActors() {
      let response = await axios.get('/actors');
      
      this.actors = response.data
      this.loading = false
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
    }

  },
  mounted() {
    this.loadActors()
  }
}


</script>

<template>
        <!-- Первая страница сайта с логотипом, навигацией и картинкой -->
        <header class="top">
          <div class="actorspage_header_inner">
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
                        <!-- <li class="nav-item">
                          <a class="nav-link" href="#">О театре</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">Спектакли</a>
                        </li> -->
                      </ul>
  
                    </div>
                  </div>
                </nav>
              <div class="container ">
                  <h1 class="header_title_actors">
                      Наши актеры
                  </h1>
                  <center><p class="header_text">В нашем театре прекрасный актерский состав....Самые крутые и необыкновенные!</p></center>
              </div>
          </div>
      </header>
    
        <!-- Секция с актерами театра  -->

        <section class="actors_inner">
            <div class="container">
                <h2 class="actors_title" style="margin-bottom: 30px;">Актёры</h2>
                <div class="d-flex justify-content-center spinner" v-if="loading">
                  <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
                <div class="row row-cols-2 row-cols-md-4 row-actors ">
                    <div class="col actor mt-3 flex" v-for="(item, index) in actors">
                      
                        <img class="actor_img" :src="item.photo" alt="фото актера">
                        <div class="actor_name" @click="personalPage(item)">
                          {{ item.fullName }}
                        </div>
                    </div>
                </div>
            </div>
         </section>
</template>

<style>

.spinner {
  margin: 100px;
}

.actor {
  background-color: rgb(216, 216, 216);
}

</style>