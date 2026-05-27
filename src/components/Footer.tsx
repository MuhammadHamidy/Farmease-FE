import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import '../assets/css/components/Footer.css';
import Typography from './ui/peternakan/Typography';

export default defineComponent({
  name: 'Footer',
  setup() {
    const router = useRouter();
    return () => (
      <footer class="footer-container pt-5 pb-3 px-3 w-100" style={{ backgroundColor: 'var(--color-secondary)' }}>
        <div class="container mb-5">
          <div class="row gy-5 justify-content-between">
            {/* 1. Brand Col */}
            <div class="col-12 col-md-6 col-lg-2">
              <div class="footer-logo-box bg-white p-2 rounded-3 mb-4 d-inline-block">
                <img src="/icon/logo_farmease.png" alt="FARMease" style={{ height: '40px', width: 'auto' }} />
              </div>
              <h2 class="text-white fs-4 fw-bold mb-0">FARMease</h2>
            </div>

            {/* 2. Navigasi */}
            <div class="col-6 col-md-3 col-lg-2">
              <h3 class="text-white fs-4 fw-bold mb-4">Navigasi</h3>
              <ul class="list-unstyled d-flex flex-column gap-3">
                <li><a href="#" class="text-white text-decoration-none hover-opacity-70 transition-all fs-5" onClick={(e) => { e.preventDefault(); router.push({ name: 'home' }) }}>Beranda</a></li>
                <li><a href="#" class="text-white text-decoration-none hover-opacity-70 transition-all fs-5" onClick={(e) => { e.preventDefault(); router.push({ name: 'information' }) }}>Informasi</a></li>
                <li><a href="#" class="text-white text-decoration-none hover-opacity-70 transition-all fs-5" onClick={(e) => { e.preventDefault(); router.push({ name: 'contact' }) }}>Hubungi Kami</a></li>
              </ul>
            </div>

            {/* 3. Hubungi Kami */}
            <div class="col-6 col-md-3 col-lg-3">
              <h3 class="text-white fs-4 fw-bold mb-4">Hubungi Kami</h3>
              <ul class="list-unstyled d-flex flex-column gap-4">
                <li class="d-flex align-items-start gap-3">
                  <div class="text-white mt-1">
                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <span class="text-white fs-5 lh-sm">Jl. Agro Farm No. 12, Tasikmalaya</span>
                </li>
                <li class="d-flex align-items-center gap-3">
                  <div class="text-white">
                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002 0V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <span class="text-white fs-5">info@farmease.com</span>
                </li>
              </ul>
            </div>

            {/* 4. Lokasi (Map) */}
            <div class="col-12 col-lg-4">
              <h3 class="text-white fs-4 fw-bold mb-4">Lokasi</h3>
              <div class="footer-map-container rounded-3 overflow-hidden shadow-sm border border-white-10" style={{ height: '180px' }}>
                <img src="/img/map_placeholder.png" alt="Map Location" class="w-100 h-100" style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div class="container border-top border-white-10 pt-4 mt-2">
          <div class="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
            <span class="text-white-50 small font-monospace">@ 2026 FARMEASE RIGHTS RESERVED</span>
            <div class="d-flex gap-4">
              <a href="#" class="text-white-50 text-decoration-none small hover-white">PRIVACY POLICY</a>
              <a href="#" class="text-white-50 text-decoration-none small hover-white">TERMS OF SERVICE</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
});
