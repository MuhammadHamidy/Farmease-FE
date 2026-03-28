import { defineComponent } from 'vue'
import '../assets/css/Footer.css'

export default defineComponent({
  name: 'Footer',
  setup() {
    return () => (
      <footer class="footer-container pt-5 pb-4 px-3 w-100">
        <div class="container mb-5">
          <div class="row gy-5">
            {/* Brand Col */}
            <div class="col-12 col-md-6 col-lg-3">
              <div class="d-flex align-items-center gap-2 mb-4">
                <div class="footer-logo-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" class="text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                    <path d="M11 7h2v6h-2z" fill="white"/>
                    <path d="M11 15h2v2h-2z" fill="white"/>
                  </svg>
                </div>
                <span class="footer-brand font-weight-bold text-white text-uppercase">FARMease</span>
              </div>
              <p class="footer-text mb-4">
                Membangun masa depan peternakan yang lebih cerdas dan terintegrasi untuk keberlanjutan.
              </p>
            </div>

            {/* Quick Links */}
            <div class="col-12 col-md-6 col-lg-3">
              <h4 class="footer-title">Navigasi</h4>
              <ul class="list-unstyled footer-list">
                <li><a href="#">Beranda</a></li>
                <li><a href="#">Dasbor</a></li>
                <li><a href="#">Informasi</a></li>
                <li><a href="#">Kontak</a></li>
              </ul>
            </div>

            {/* Contact info */}
            <div class="col-12 col-md-6 col-lg-3">
              <h4 class="footer-title">Hubungi Kami</h4>
              <ul class="list-unstyled footer-list contact-list">
                <li class="d-flex align-items-start gap-2">
                  <svg width="20" height="20" class="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <span>Jl. Agro Farm No. 12, Tasikmalaya</span>
                </li>
                <li class="d-flex align-items-center gap-2">
                  <svg width="20" height="20" class="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  <span>info@farmease.com</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div class="col-12 col-md-6 col-lg-3">
              <h4 class="footer-title">Berita Terbaru</h4>
              <p class="footer-text small mb-4">Dapatkan update terkini tentang manajemen peternakan.</p>
              <div class="position-relative">
                <input type="text" placeholder="Email Anda" class="form-control rounded-pill bg-transparent text-white border-white-15 ps-3 pe-5 py-2 newsletter-input" />
                <button class="footer-newsletter-btn btn btn-primary rounded-pill position-absolute top-50 translate-middle-y end-0 me-1 py-1 px-3 fw-bold">OK</button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div class="container border-top border-white-10 pt-4 mt-2">
          <div class="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 footer-bottom-text">
            <p class="m-0">© 2024 FARMease Technology. All Rights Reserved.</p>
            <div class="d-flex gap-3">
              <a href="#" class="text-white text-decoration-none">Privacy Policy</a>
              <a href="#" class="text-white text-decoration-none">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
})
