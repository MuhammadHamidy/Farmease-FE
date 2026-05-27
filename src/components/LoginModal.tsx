import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import '../assets/css/components/LoginModal.css'

export default defineComponent({
  name: 'LoginPage',
  setup() {
    const router = useRouter()

    const goBack = () => {
      router.push({ name: 'home' })
    }

    const goToCageLogin = () => {
      router.push({ name: 'masuk-kandang' })
    }

    const goToAdmin = () => {
      router.push({ name: 'admin-login' })
    }

    return () => (
      <div class="login-page-centered min-vh-100 w-100 d-flex align-items-center justify-content-center bg-light-cream p-3" style={{
        background: 'linear-gradient(135deg, var(--color-surface-container-low) 0%, var(--color-surface-container-high) 100%)',
        fontFamily: 'var(--font-family)'
      }}>
        {/* Soft Background Botanical Graphics */}
        <div class="position-absolute opacity-10" style={{ top: '10%', left: '10%', fontSize: '8rem', pointerEvents: 'none', userSelect: 'none' }}>🌿</div>
        <div class="position-absolute opacity-10" style={{ bottom: '10%', right: '10%', fontSize: '8rem', pointerEvents: 'none', userSelect: 'none' }}>🐏</div>

        {/* Center Card */}
        <div class="login-centered-card shadow-2xl rounded-5 bg-white border border-outline-variant p-4 p-md-5 position-relative overflow-hidden" style={{
          maxWidth: '480px',
          width: '100%',
          boxShadow: '0 25px 50px -12px rgba(21, 66, 18, 0.08)'
        }}>
          {/* Card Accent Top Line */}
          <div class="position-absolute top-0 start-0 w-100" style={{ height: '6px', backgroundColor: 'var(--color-primary)' }}></div>

          {/* Logo & Platform Name */}
          <div class="text-center mb-4">
            <div class="d-inline-flex align-items-center justify-content-center mb-3">
              <img src="/icon/logo_farmease.png" alt="Say Hi Agro Logo" style={{ height: '48px', width: 'auto', objectFit: 'contain' }} />
            </div>
            <h2 class="fw-extrabold text-on-surface mb-1" style={{ letterSpacing: '-0.02em', fontSize: '1.75rem', fontFamily: 'var(--font-outfit), sans-serif' }}>OvisManage</h2>
            <p class="text-on-surface-variant small m-0">Sistem Manajemen Peternakan Say Hi Agro Farm</p>
          </div>

          <hr class="my-4 border-outline-variant" />

          {/* Quick Access */}
          <div class="d-grid gap-3">
            <button
              type="button"
              class="btn w-100 py-3 rounded-pill fw-bold text-white shadow-sm border-0 d-flex align-items-center justify-content-center gap-2"
              style={{ backgroundColor: 'var(--color-primary)' }}
              onClick={goToCageLogin}
            >
              <img src="/icon/kandang.png" alt="Masuk Kandang" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
              Masuk Kandang
            </button>

            <button
              type="button"
              class="btn w-100 py-3 rounded-pill fw-bold border d-flex align-items-center justify-content-center gap-2"
              style={{ backgroundColor: '#F7F3ED', color: 'var(--color-primary)' }}
              onClick={goToAdmin}
            >
              <img src="/icon/admin/grey-20.svg" alt="Admin" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
              Masuk Admin Farm
            </button>
          </div>

          {/* Back Button */}
          <button type="button" class="btn btn-link w-100 mt-3 text-secondary text-xs text-decoration-none" onClick={goBack}>
            ← Kembali ke Portal Publik
          </button>
        </div>
      </div>
    )
  }
})
