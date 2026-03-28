import { defineComponent } from 'vue'
import Header from './components/Header'
import MainSection from './components/MainSection'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import Information from './components/Information'
import LoginPage from './components/LoginModal'
import PeternakanPage from './modules/peternakan/views/PeternakanPage'
import { currentRoute } from './store/navigation'

export default defineComponent({
  name: 'App',
  setup() {
    return () => {
      const route = currentRoute.value

      // Full-screen pages (No Header/Footer)
      if (route === 'login') return <LoginPage />
      if (route === 'peternakan') return <PeternakanPage />
      
      if (route === 'perkebunan') {
        return (
          <div class="perkebunan-placeholder p-5 text-center min-h-screen flex flex-col justify-center align-items-center">
            <h2 style={{ color: '#283618', fontWeight: 800 }}>MODUL PERKEBUNAN</h2>
            <p class="text-secondary">Modul ini sedang dalam tahap pengembangan.</p>
            <button class="btn btn-primary rounded-pill px-4 mt-3" onClick={() => currentRoute.value = 'home'}>Kembali ke Beranda</button>
          </div>
        )
      }

      // Shell layout pages (With Header/Footer)
      return (
        <div class="min-h-screen bg-background font-sans flex flex-col w-full overflow-x-hidden selection:bg-primary selection:text-white">
          <Header />
          <main class="flex-grow pt-16">
            {route === 'home' && <MainSection />}
            {route === 'dashboard' && <Dashboard />}
            {route === 'information' && <Information />}
          </main>
          <Footer />
        </div>
      )
    }
  }
})

