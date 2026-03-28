import { defineComponent } from 'vue'
import '../assets/css/Hero.css'
import NewsSlider from './NewsSlider'

export default defineComponent({
  name: 'Hero',
  setup() {
    return () => (
      <section class="hero-section w-100 py-5 px-3">
        <div class="container py-lg-5">
          <div class="row align-items-center gy-5 flex-column-reverse flex-lg-row">
            {/* Hero Text */}
            <div class="col-12 col-lg-6 text-center text-lg-start pe-lg-5">
              <div class="hero-badge d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill mb-4">
                <span class="hero-pulse-dot rounded-circle" style={{ backgroundColor: '#283618' }}></span>
                <span class="hero-badge-text text-uppercase fw-bold">Berita Baru</span>
              </div>
              
              <h1 class="hero-title fw-bolder text-dark mb-4 lh-tight">
                Kelola Ternak <br class="d-none d-md-block" />
                <span class="hero-text-gradient">Lebih Cerdas.</span>
              </h1>
              
              <p class="hero-subtitle text-secondary mb-5 fw-medium mx-auto mx-lg-0">
                Transformasi bisnis peternakan Anda dengan sistem terintegrasi yang memudahkan manajemen harian hingga laporan strategis.
              </p>
              
              <div class="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                <button class="btn btn-lg hero-btn-main rounded-pill fw-bold shadow-sm transition-all border-0 text-white">
                  Mulai Gratis
                </button>
                <button class="btn btn-lg hero-btn-outline rounded-pill fw-bold transition-all bg-white mb-0 mt-2 mt-sm-0">
                  Cek Fitur
                </button>
              </div>
            </div>

            {/* Hero Image Group - Now a News Slider */}
            <div class="col-12 col-lg-6 hero-slider-col ps-lg-4">
              <div class="hero-slider-wrapper position-relative w-100">
                {/* Glow Decoration */}
                <div class="hero-glow position-absolute"></div>
                
                {/* Slider Container */}
                <div class="hero-slider-container position-relative bg-white p-2 p-md-3 p-lg-4 shadow border border-white">
                  <NewsSlider />
                  
                  {/* Fixed Metric Overlay */}
                  <div class="hero-metric-overlay position-absolute px-3 py-2 px-md-4 py-md-3 rounded-pill shadow-sm border border-light">
                    <div class="d-flex align-items-center gap-2">
                      <span class="hero-pulse-dot bg-success rounded-circle"></span>
                      <p class="hero-metric-text m-0 fw-bold text-uppercase" style={{ color: '#283618' }}>Sistem Aktif</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
})
