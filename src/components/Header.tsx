import { defineComponent, ref } from 'vue'
import '../assets/css/Header.css'
import { currentRoute } from '../store/navigation'

export default defineComponent({
  name: 'Header',
  setup() {
    const isMenuOpen = ref(false)

    const openLogin = () => {
      isMenuOpen.value = false
      currentRoute.value = 'login'
    }

    return () => (
      <>
        <header class="header-container d-flex align-items-center justify-content-between sticky-top w-100 px-3 px-md-4 py-3 shadow-sm border-bottom">
          <div class="d-flex align-items-center gap-2 logo-group" onClick={() => currentRoute.value = 'home'}>
            <div class="logo-icon transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="text-white" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                 <path d="M11 7h2v6h-2z" fill="white"/>
                 <path d="M11 15h2v2h-2z" fill="white"/>
              </svg>
            </div>
            <span class="logo-text m-0">
              FARMease<span class="text-primary-light">.</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav class="d-none d-md-flex align-items-center gap-2">
            <a href="#" class={["nav-btn", currentRoute.value === 'home' ? "btn-active" : "btn-ghost"]} onClick={(e) => { e.preventDefault(); currentRoute.value = 'home'; }}>Beranda</a>
            <a href="#" class={["nav-btn", currentRoute.value === 'dashboard' ? "btn-active" : "btn-ghost"]} onClick={(e) => { e.preventDefault(); currentRoute.value = 'dashboard'; }}>Dasbor</a>
            <a href="#" class={["nav-btn", currentRoute.value === 'information' ? "btn-active" : "btn-ghost"]} onClick={(e) => { e.preventDefault(); currentRoute.value = 'information'; }}>Informasi</a>
          </nav>

          {/* Actions */}
          <div class="d-flex align-items-center gap-2">
            <button class="d-none d-md-block header-login-btn transition-all" id="header-masuk-btn" onClick={openLogin}>
              Masuk
            </button>

            <button
              onClick={() => isMenuOpen.value = !isMenuOpen.value}
              class="d-md-none mobile-menu-btn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={isMenuOpen.value ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}/>
              </svg>
            </button>
          </div>

          {/* Mobile Nav Dropdown */}
          {isMenuOpen.value && (
            <div class="position-absolute top-100 start-0 w-100 bg-white border-bottom shadow-sm d-md-none p-3" style={{ zIndex: 99 }}>
              <nav class="d-flex flex-column gap-2 mb-3">
                <a href="#" class={["nav-btn d-block text-center py-2", currentRoute.value === 'home' ? "btn-active" : "btn-ghost"]} onClick={(e) => { e.preventDefault(); currentRoute.value = 'home'; isMenuOpen.value = false; }}>Beranda</a>
                <a href="#" class={["nav-btn d-block text-center py-2", currentRoute.value === 'dashboard' ? "btn-active" : "btn-ghost"]} onClick={(e) => { e.preventDefault(); currentRoute.value = 'dashboard'; isMenuOpen.value = false; }}>Dasbor</a>
                <a href="#" class={["nav-btn d-block text-center py-2", currentRoute.value === 'information' ? "btn-active" : "btn-ghost"]} onClick={(e) => { e.preventDefault(); currentRoute.value = 'information'; isMenuOpen.value = false; }}>Informasi</a>
              </nav>
              <button class="header-login-btn w-100 transition-all" onClick={openLogin}>
                Masuk
              </button>
            </div>
          )}
        </header>
      </>
    )
  }
})
