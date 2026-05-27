import { defineComponent } from 'vue';
import Hero from './Hero';
import About from './About'
import Features from './Features'

export default defineComponent({
  name: 'MainSection',
  setup() {
    return () => (
      <main class="main-content w-100 d-flex flex-column align-items-center grow">
        <Hero />
        <About />
        <Features />
      </main>
    )
  }
})
