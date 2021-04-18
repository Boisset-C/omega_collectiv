import { createApp } from 'vue'
import App from './App.vue'
import HeaderNav from './components/HeaderNav.vue'
import HeroComponent from './components/HeroComponent.vue'

const app = createApp(App)

app.component('header-nav', HeaderNav)
app.component('hero-component', HeroComponent)
app.mount('#app')

