import { defineComponent } from 'vue'
import '../assets/css/About.css'

export default defineComponent({
  name: 'About',
  setup() {
    return () => (
      <section class="about-section w-100 py-5 px-3">
        <div class="container text-center pt-5 pb-5">
          <h2 class="about-title text-white mb-4 fw-bolder">
            Apa itu FARMease?
          </h2>
          <div class="about-divider mx-auto mb-5 rounded-pill"></div>
          <p class="about-text text-white-50 lh-lg fw-medium mx-auto m-0">
            FARMease adalah solusi manajemen peternakan domba terintegrasi perkebunan untuk <span class="about-highlight d-inline-block position-relative">Sah Hi Agro Farm</span> yang menghadirkan efisiensi melalui data yang akurat.
          </p>
        </div>
      </section>
    )
  }
})
