import { defineComponent } from 'vue'
import '../assets/css/Features.css'

const featureItems = [
  {
    title: 'Terintegrasi',
    description: 'Seluruh data populasi, pakan, dan kesehatan dalam satu pintu.',
    icon: (
      <svg class="w-100 h-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
      </svg>
    )
  },
  {
    title: 'Real-time',
    description: 'Pantau perkembangan ternak Anda secara langsung tiap harinya.',
    icon: (
      <svg class="w-100 h-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    )
  },
  {
    title: 'Keamanan',
    description: 'Data peternakan Anda terlindungi dengan enkripsi standar industri.',
    icon: (
      <svg class="w-100 h-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
      </svg>
    )
  }
]

export default defineComponent({
  name: 'Features',
  setup() {
    return () => (
      <section class="features-section w-100 py-5">
        <div class="container py-lg-5">
          <div class="row g-4 g-lg-5 justify-content-center">
            {featureItems.map((item) => (
              <div key={item.title} class="col-12 col-md-6 col-lg-4">
                <div class="feature-card h-100 bg-white p-4 p-md-5 border shadow-sm transition-all group">
                  <div class="feature-icon-wrapper d-flex align-items-center justify-content-center mb-4 transition-colors">
                    <div class="feature-icon transition-colors">
                      {item.icon}
                    </div>
                  </div>
                  <h3 class="feature-title fw-bolder mb-3 text-dark">{item.title}</h3>
                  <p class="feature-desc text-secondary m-0">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
})
