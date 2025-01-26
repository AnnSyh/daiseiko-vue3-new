// import { createPinia } from 'pinia';
import { createApp } from 'vue'
import App from '@/App.vue'
import '@/assets/main.css'
import router from '@/router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import store from './store/store';


const app = createApp(App)
// const pinia = createPinia();

app.use(router)
// app.use(pinia)
app.use(store)

app.mount('#app')
AOS.init({
  // опции для настройки
  offset: 120,  // смещение
  delay: 100,   // задержка анимации
  duration: 400 // длительность анимации
})
