<script>
import axios from 'axios';
import dayjs from 'dayjs';

export default {
    data() {
        return {
            actor: [],

        }
    },
    mounted() {
        this.loadActor()
    },

    methods: {
        async loadActor() {
            console.log(this.$route.params)

            let response = await axios.get('/actors/personal', {
                params: {
                    id: this.$route.params.id
                }
            });
            try {
                this.actor = response.data
            } catch (e) {
                console.log(e)
            }
        },

        getDate(date) {
            let day = dayjs(date);
            return day.format('DD.MM.YYYY');
        },

        mainPage() {
      this.$router.push({
        name: 'main'
      })
    },

    },

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
                            <a href="">
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
                      <li class="nav-item">
                        <a class="nav-link" href="#">Актеры</a>
                      </li>
                    </ul>

                  </div>
                </div>
              </nav>

                <h1 class="header_title_personal">
                    {{ actor.fullName }}
                </h1>
        </div>
    </header>

    <section class="main_inner">
        <div class="main_info">
            <div class="container">
                <div class="row">
                    <div class="col actor_block">
                        <img class="actor_img" :src="actor.photo" alt="">
                    </div>
                    <div class="col actor_info">
                        <div class="spec_inner">
                            <h4 class="actor_spec">Дата рождения</h4>
                            <p class="actor_spec">{{ getDate(actor.birthdate) }}</p>
                        </div>
                        <div class="spec_inner">
                            <h4 class="actor_spec">Увлечения</h4>
                            <p class="actor_spec">{{ actor.info}}</p>
                        </div>
                        <div class="spec_inner">
                            <h4 class="actor_spec">Комментарии</h4>
                            <p class="actor_spec">{{ actor.info }}</p>
                        </div>
                        <div class="spec_inner">
                            <h4 class="actor_spec">Роли</h4>
                            <p class="actor_spec">{{ actor.info }}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>


</template>