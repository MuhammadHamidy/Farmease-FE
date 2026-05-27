import { defineComponent, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import '../assets/css/components/Header.css';
import Typography from './ui/peternakan/Typography';
import Button from './ui/peternakan/Button';

export default defineComponent({
  name: 'Header',
  setup() {
    const router = useRouter();
    const route = useRoute();
    const isMenuOpen = ref(false);

    const openLogin = () => {
      isMenuOpen.value = false;
      router.push({ name: 'login' });
    };

    const NavItems = () => (
      <>
        <a href="#" class={["nav-btn", route.name === 'home' ? "btn-active" : "btn-ghost"]} onClick={(e) => { e.preventDefault(); router.push({ name: 'home' }); isMenuOpen.value = false; }}>
          Beranda
        </a>
        <a href="#" class={["nav-btn", route.name === 'information' ? "btn-active" : "btn-ghost"]} onClick={(e) => { e.preventDefault(); router.push({ name: 'information' }); isMenuOpen.value = false; }}>
          Informasi
        </a>
        <a href="#" class={["nav-btn", route.name === 'contact' ? "btn-active" : "btn-ghost"]} onClick={(e) => { e.preventDefault(); router.push({ name: 'contact' }); isMenuOpen.value = false; }}>
          Hubungi Kami
        </a>
      </>
    );

    return () => (
      <header class="header-container d-flex align-items-center justify-content-between sticky-top w-100 px-3 px-md-5 py-2 shadow-sm border-bottom bg-white" style={{ height: '72px' }}>
        {/* Logo - Left (flex 1) */}
        <div class="logo-side d-flex align-items-center gap-3" onClick={() => router.push({ name: 'home' })} style={{ cursor: 'pointer', flex: '1' }}>
          <img src="/icon/logo_farmease.png" alt="Say Hi Agro" style={{ height: '42px', width: 'auto', objectFit: 'contain' }} />
          <span class="fw-extrabold fs-4" style={{ color: 'var(--color-primary)', fontFamily: "var(--font-outfit), sans-serif", letterSpacing: '-0.5px' }}>
            Say Hi <span style={{ color: 'var(--color-secondary)' }}>Agro</span>
          </span>
        </div>

        {/* Desktop Nav - Centered (flex 2) */}
        <nav class="d-none d-md-flex align-items-center justify-content-center gap-4" style={{ flex: '2' }}>
          <NavItems />
        </nav>

        {/* Actions - Far Right (flex 1) */}
        <div class="action-side d-flex align-items-center justify-content-end" style={{ flex: '1' }}>
          <Button 
            variant="primary" 
            shape="pill" 
            onClick={openLogin}
            class="d-none d-md-flex align-items-center gap-1 shadow-sm px-4 py-2 hover-grow text-xs"
            style={{ fontSize: '0.8rem', backgroundColor: 'var(--color-primary)', border: 'none' }}
          >
            Masuk Sistem →
          </Button>

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
          <div class="position-absolute top-100 start-0 w-100 bg-white border-bottom shadow-sm d-md-none p-3 animate-fade-in" style={{ zIndex: 99 }}>
            <nav class="d-flex flex-column gap-2 mb-3">
              <NavItems />
            </nav>
            <Button variant="solid" onClick={openLogin} class="w-100">
              Masuk Sistem
            </Button>
          </div>
        )}
      </header>
    );
  }
});
