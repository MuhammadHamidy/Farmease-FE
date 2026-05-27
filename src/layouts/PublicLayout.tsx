import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default defineComponent({
  name: 'PublicLayout',
  setup() {
    return () => (
      <div class="min-h-screen bg-white font-sans flex flex-col w-full overflow-x-hidden selection:bg-primary selection:text-white">
        <Header />
        <main class="flex-grow pt-0" style={{ minHeight: 'calc(100vh - 144px)' }}>
          <RouterView />
        </main>
        <Footer />
      </div>
    )
  },
})
