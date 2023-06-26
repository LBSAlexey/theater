<script>
import axios from 'axios';

export default {
    data() {
        return {
            performance: [],
            loading: true,
        }
    },

    mounted() {
        this.loadPerformance();
    },

    methods: {
        actorsPage() {
            this.$router.push({
                name: 'actors'
            });
        },

        performancePage(item) {
            this.$router.push({
                name: 'performance',
                params: {
                    title: item.title
                }
            })
        },

        async loadPerformance() {
            let response = await axios.get('/performance');

            this.performance = response.data;
            this.loading = false;
        },
    },

}


</script>

<template>

<!-- Первая страница сайта с логотипом, навигацией и картинкой -->
<header>
    <div class="top">
        <div class="mainpage_header_inner">
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
                        <a class="nav-link" href="#" onclick="slowScroll('.main_inner')">О театре</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#" onclick="slowScroll('.perf_inner')">Спектакли</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#" @click="actorsPage">Актеры</a>
                      </li>
                    </ul>

                  </div>
                </div>
              </nav>
            <div class="container">
                <div class="row row-cols-md-1 row-cols-1">


                <!-- Навигация -->
                <!-- <div class="col">
                    <div class="nav_menu">
                    <div class="logo_img">
                            <a href="">
                                <img src="/src/assets/img/mainPage/header/logo_main_new_1.png
                        " alt="логотип">
                        </a>
                    </div>
                    <nav class="nav_header">
                        <ul class="navbar_menu">
                            <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#" onclick="slowScroll('#top')">Главная</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#" onclick="slowScroll('.main_inner')">О театре</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#" onclick="slowScroll('.perf_inner')">Спектакли</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="actors.html" onclick="slowScroll('.actors_inner')">Актеры</a>
                            </li>
                        </ul>
                    </nav>
                    </div>
                </div> -->
            <div class="col">
                <!-- Надпись с названием театра -->
                <section class="info">
                    <h1>
                        Новошахтинский драматический театр
                    </h1>
                </section>
            </div>
            </div>
        </div>
    </div>
</div>
</header>

<!-- Секция с информацией о театре и фото -->
 <main class="main_inner">
    <section class="main_info">
        <div class="container">
            <div class="row">
                <div class="col">
                    <img class="info_img" src="/src/assets/img/mainPage/main/main.jpg" alt="">
                </div>
                <div class="col info_text">

                    Театр Любви! Театр Мечты! Театр для людей!  «Театральная жемчужина», «Театр, о котором с любовью говорят зрители и критики» 

                    - такие отзывы о Новошахтинском драматическом театре Вы можете услышать в самых разных театральных кругах. <br> 

                    Восьмой профессиональный театр Дона, созданный в 1996 году с целью социальной защиты в шахтерском регионе.

                    Театр вырос на базе народного театра, в небольшом<br> шахтерском городе Новошахтинске, в городе с непростой судьбой, где были закрыты все шахты, 
                    
                    где основная масса населения одномоментно осталась без работы. Вопреки всем экономическим реалиям руководство города и области приняло решение создавать театр, 
                    
                    как средство социальной поддержки населения. <br>И все время своего существования театр не отступает от этой миссии.

                    Девиз театра – Театр мечты! Театр любви! Театр для людей! Для всех людей в равной степени.

                    На сегодняшний день в репертуаре театра 9 спектаклей с прямым тифлокомментированием: "Ассоль", "Алиса в стране чудес", "Ася", "Волшебник изумрудного города", 
                    
                    "Стойкий оловянный солдатик", "Волшебная лампа Аладдина", "Черный монах", "Отпуск с привидением", "В ночь лунного затмения».          

                    Театр любит и ждёт вас!
                </div>
            </div>
        </div>
    </section>
 </main>
 
 <!-- Секция со спектаклями -->
 <section class="perf_inner">
    <div class="container">
        <h2 class="perf_title">Спектакли</h2>
        <div class="row">
            <div class="col perf" v-for="(item, index) in performance" @click="performancePage(item)">
                <img class="perf_img" :src="item.photo[0]" alt="Фото спектакля">
                <a class="perf_label">{{ item.title }}</a>
            </div>
        </div>
    </div>
 </section>



</template>

<style>
    .perf_label {
        cursor: pointer;
    }
</style>