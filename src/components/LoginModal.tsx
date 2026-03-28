import { defineComponent, ref } from 'vue'
import '../assets/css/LoginModal.css'
import { currentRoute, type RouteType } from '../store/navigation'

// ─────────────────────────────────────────────────────────────
// TODO: Ganti fungsi ini dengan API call ke backend.
// Backend akan menerima `code`, memvalidasi, dan mengembalikan
// { module: 'peternakan' | 'perkebunan' } atau error.
// ─────────────────────────────────────────────────────────────
function mockAuth(code: string): Promise<{ module: RouteType }> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const c = code.trim().toUpperCase()
      // Kode mock: awalan P → peternakan, awalan K → perkebunan
      if (c.startsWith('P')) resolve({ module: 'peternakan' })
      else if (c.startsWith('K')) resolve({ module: 'perkebunan' })
      else reject(new Error('Kode pengguna tidak ditemukan.'))
    }, 800)
  })
}

export default defineComponent({
  name: 'LoginPage',
  setup() {
    const userCode = ref('')
    const error = ref('')
    const loading = ref(false)

    const handleSubmit = async () => {
      if (!userCode.value.trim()) {
        error.value = 'Mohon masukkan kode pengguna.'
        return
      }
      error.value = ''
      loading.value = true
      try {
        const { module } = await mockAuth(userCode.value)
        currentRoute.value = module
      } catch (e: unknown) {
        error.value = e instanceof Error ? e.message : 'Terjadi kesalahan.'
      } finally {
        loading.value = false
      }
    }

    return () => (
      <div class="login-page">
        {/* Back button */}
        <button class="login-page-back" onClick={() => currentRoute.value = 'home'} id="login-back-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          Kembali
        </button>

        <div class="login-form-wrapper">
          {/* Header */}
          <div class="login-form-header">
            <div class="login-form-logo-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                <path d="M11 7h2v6h-2z" fill="white"/>
                <path d="M11 15h2v2h-2z" fill="white"/>
              </svg>
            </div>
            <h2 class="login-form-title">DASHBOARD UTAMA</h2>
            <p class="login-form-subtitle">Pilih modul untuk melanjutkan operasional</p>
          </div>

          {/* Info/input card */}
          <div class="login-info-card">
            <p class="login-info-card-title">Akses Cepat Modul</p>
            <div class="login-input-row">
              <input
                id="login-code-input"
                class="login-code-input"
                type="text"
                placeholder="Masukkan kode (P atau K)..."
                value={userCode.value}
                disabled={loading.value}
                onInput={(e) => {
                  userCode.value = (e.target as HTMLInputElement).value
                  error.value = ''
                }}
                onKeydown={(e: KeyboardEvent) => { if (e.key === 'Enter') handleSubmit() }}
              />
              <button
                class="login-submit-btn"
                onClick={handleSubmit}
                id="login-masuk-btn"
                disabled={loading.value}
                style={{ opacity: loading.value ? 0.7 : 1, cursor: loading.value ? 'not-allowed' : 'pointer' }}
              >
                {loading.value
                  ? <span class="login-spinner" />
                  : 'Masuk'
                }
              </button>
            </div>
            {error.value && (
              <p style={{ color: '#FEFAE0', fontSize: '0.78rem', marginTop: '0.5rem', fontFamily: "'Nunito', sans-serif" }}>
                ⚠ {error.value}
              </p>
            )}
          </div>

          {/* Hint for dev/demo */}
          <p class="login-footer-note" style={{ marginTop: '1rem' }}>
            <strong style={{ color: '#DDA15E' }}>Demo:</strong> kode awalan <strong>P</strong> → Peternakan &nbsp;|&nbsp; awalan <strong>K</strong> → Perkebunan
          </p>
        </div>
      </div>
    )
  }
})

