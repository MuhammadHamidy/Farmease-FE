import { defineComponent } from 'vue'
import '../assets/css/MainSection.css'
import Hero from './Hero'
import About from './About'
import Features from './Features'
import OrganizationStructure from './OrganizationStructure'

export default defineComponent({
  name: 'MainSection',
  setup() {
    return () => (
      <main class="main-content w-100 d-flex flex-column align-items-center flex-grow-1">
        <Hero />
        <About />
        <Features />
        <OrganizationStructure />
      </main>
    )
  }
})
