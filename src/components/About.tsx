import { defineComponent } from 'vue';
import '../assets/css/components/About.css';
import '../assets/css/components/SectionLayout.css';
import Typography from '@/components/ui/peternakan/Typography';

export default defineComponent({
  name: 'About',
  setup() {
    return () => (
      <section class="about-section w-100 py-5">
        <div class="container px-md-5">
          {/* Header Bar */}
          <div class="section-header-bar text-center">
            <h2 class="fs-4 fw-bold m-0">Apa Itu FarmEase?</h2>
          </div>

          {/* Card Container */}
          <div class="section-container-beige">
            <div class="row align-items-center g-5">
              {/* Left: Logo Card */}
              <div class="col-12 col-lg-4">
                <div class="white-card-rounded d-flex align-items-center justify-content-center">
                  <img src="/icon/logo_farmease.png" alt="FarmEase Logo" class="w-100" style={{ maxWidth: '240px' }} />
                </div>
              </div>
              
              {/* Right: Text content */}
              <div class="col-12 col-lg-8 ps-lg-5">
                <p class="fs-4 lh-lg m-0 text-dark" style={{ fontWeight: '500' }}>
                  FARMease adalah solusi manajemen peternakan domba terintegrasi perkebunan untuk <span class="fw-bold">Sah Hi Agro Farm</span> yang menghadirkan efisiensi melalui data yang akurat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
});
