import { defineComponent } from 'vue';
import '../assets/css/components/Features.css';
import '../assets/css/components/SectionLayout.css';
import Typography from '@/components/ui/peternakan/Typography';

const featureItems = [
  {
    title: 'Terintegrasi',
    description: 'Seluruh data populasi, pakan, dan kesehatan dalam satu pintu.',
    icon: (
      <img src="/icon/statistic.png" class="w-100 h-100" style={{ objectFit: 'contain' }} alt="Integrasi" />
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
      <img src="/icon/security.png" class="w-100 h-100" style={{ objectFit: 'contain' }} alt="Keamanan" />
    )
  }
];

export default defineComponent({
  name: 'Features',
  setup() {
    return () => (
      <section class="features-section w-100 py-5">
        <div class="container px-md-5">
          {/* Header Bar */}
          <div class="section-header-bar text-center">
            <h2 class="fs-4 fw-bold m-0">Manfaat FarmEase</h2>
          </div>
          
          <div class="section-container-beige">
            <div class="row g-4 justify-content-center">
              {featureItems.map((item) => (
                <div key={item.title} class="col-12 col-md-6 col-lg-4">
                  <div class="white-card-rounded text-center">
                    <div class="feature-icon mb-4 mx-auto d-flex align-items-center justify-content-center" style={{ width: '64px', height: '64px', backgroundColor: 'var(--color-surface-container-low)', borderRadius: '12px', border: '1px solid var(--color-outline-variant)' }}>
                      {item.icon}
                    </div>
                    <h3 class="fw-bold mb-3 fs-5" style={{ color: 'var(--color-primary)' }}>
                      {item.title}
                    </h3>
                    <p class="text-secondary m-0 lh-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
});
