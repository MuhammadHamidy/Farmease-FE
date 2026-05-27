import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import '../assets/css/components/Hero.css';
import Button from '@/components/ui/peternakan/Button';

export default defineComponent({
  name: 'Hero',
  setup() {
    const router = useRouter();
    return () => (
      <section class="hero-section w-100 py-4 px-3 bg-white">
        <div class="hero-container container py-5 px-lg-5 rounded-5" style={{ backgroundColor: 'var(--color-primary-fixed)' }}>
          <div class="row align-items-center gy-5">
            {/* Left Side: Hero Image Container */}
            <div class="col-12 col-lg-5 hero-image-col">
              <div class="bg-white p-3 rounded-5 shadow-sm mx-auto" style={{ maxWidth: '440px' }}>
                 <img 
                   src="/img/sheep_hero.png" 
                   alt="Kelola Ternak" 
                   class="hero-main-image w-100 h-100 rounded-5"
                   style={{ objectFit: 'cover', aspectRatio: '1.1 / 1' }} 
                 />
              </div>
            </div>

            {/* Right Side: Hero Content */}
            <div class="col-12 col-lg-7 text-center ps-lg-5">
              <h1 class="hero-title-refined fw-bold mb-4" style={{ fontFamily: "'Outfit', sans-serif", fontSize: '4rem', lineHeight: '1.2' }}>
                <span class="d-block" style={{ color: 'var(--color-primary)' }}>Kelola Ternak</span>
                <span class="d-block" style={{ color: 'var(--color-secondary)' }}>Lebih Cerdas</span>
              </h1>

              <p class="hero-subtitle mb-5 text-secondary fs-5 mx-auto" style={{ maxWidth: '540px' }}>
                Transformasi bisnis peternakan Anda dengan sistem terintegrasi yang memudahkan manajemen harian hingga laporan strategis.
              </p>

              <div class="d-flex justify-content-center">
                <Button 
                   variant="solid" 
                   class="hero-action-btn px-5 py-3 rounded-3 fs-5"
                   style={{ backgroundColor: 'var(--color-primary)', border: 'none' }}
                   onClick={() => router.push({ name: 'information' })}
                >
                  Jelajahi
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
});
