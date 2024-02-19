<script>
import axios from 'axios';


export default {
    data() {
        return {
            username: null, 
            password: null, 
            firstName: null, 
            lastName: null, 
            date: null, 
            email: null, 
            numberPhone: null,
            error: false
        }
    },
    mounted() {
      
    },

    methods: {
        mainPage() {
        this.$router.push({
          name: 'main'
        })
      },

      async auth(evt) {
        evt.preventDefault()

        console.log(
                this.username,
                this.password, 
                 this.firstName, 
                this.lastName, 
                 this.date, 
                 this.email, 
                 this.numberPhone,)
        
        if(this.password && this.firstName && this.lastName && this.date && this.email && this.numberPhone) {
            await axios.post('/registeration', {
                username: this.username,
                password: this.password, 
                firstName: this.firstName, 
                lastName: this.lastName, 
                date: this.date, 
                email: this.email, 
                numberPhone: this.numberPhone,
            })

            this.$router.push({
                name: 'main'
            })
        } else {
            this.error = true
            return

        }

      }
    },
}
</script>


<template>
  <header>
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

</header>
<main class="bg">
    <div class="container">
        <h1 class="my-5">Регистрация</h1>
        <form @submit="auth">
            <div class="row row-cols-1 row-cols-md-4 g-3 mb-5">
                <div class="col">
                    <form>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Ник</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" v-model="username">
                        </div>
                    </form>
                </div>
                <div class="col">
                    <form>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Имя</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" v-model="firstName">
                        </div>
                    </form>
                </div>
                <div class="col">
                    <form>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Фамилия</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" v-model="lastName">
                        </div>
                    </form>
                </div>
                <div class="col">
                    <form>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Дата рождения</label>
                            <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="" v-model="date">
                        </div>
                    </form>
                </div>
                <div class="col">
                    <form>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Почта</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="test@mail.ru" v-model="email">
                        </div>
                    </form>
                </div>
                <div class="col">
                    <form>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Номер телефона</label>
                            <input type="" class="form-control" id="exampleFormControlInput1" placeholder="+7(999)999999" v-model="numberPhone">
                        </div>
                    </form>
                </div>
                <div class="col">
                    <form>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Пароль</label>
                            <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="*******" v-model="password">
                        </div>
                    </form>
                </div>
            </div>
            <div class="container">
                <div class="row g-3 mb-5">
                    <div class="col-md-8">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                                Подписаться на рассылки
                            </label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <button type="submit" class="btn btn-primary w-100">
                            Войти
                        </button>
                    </div>
                </div>
                <div class="alert alert-danger" v-if="error">Произошла ошибка, попробуйте ещё раз</div>
            </div>
        </form>
    </div>

</main>    
</template>