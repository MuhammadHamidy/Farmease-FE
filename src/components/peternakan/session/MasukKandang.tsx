import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { cageSession } from '@/store/navigation'

export default defineComponent({
  name: 'MasukKandang',
  setup() {
    const router = useRouter()
    const cageCode = ref('')
    const error = ref('')

    const handleConfirm = () => {
      const normalized = cageCode.value.trim().toUpperCase()
      if (!normalized) {
        error.value = 'Masukkan kode kandang.'
        return
      }

      if (normalized === 'A') {
        cageSession.value = {
          code: 'A',
          name: 'Kandang A (Breeding Area)',
          type: 'Domba Garut & Merino'
        }
      } else if (normalized === 'B') {
        cageSession.value = {
          code: 'B',
          name: 'Kandang B (Fattening Area)',
          type: 'Domba Dorper'
        }
      } else if (normalized === 'C') {
        cageSession.value = {
          code: 'C',
          name: 'Kandang C (Recovery Area)',
          type: 'Domba Perawatan'
        }
      } else {
        error.value = 'Kode kandang tidak dikenal. Gunakan A, B, atau C.'
        return
      }

      error.value = ''
      router.push({ name: 'peternakan' })
    }

    const goBack = () => {
      router.push({ name: 'login' })
    }

    return () => (
      <div class="masuk-kandang-wrapper min-vh-100 bg-light-cream d-flex align-items-center justify-content-center p-3 py-5" style={{
        background: 'linear-gradient(135deg, var(--color-surface-container-low) 0%, var(--color-surface-container-high) 100%)',
        fontFamily: 'var(--font-family)'
      }}>
        <div class="login-centered-card shadow-2xl rounded-5 bg-white border border-outline-variant p-4 p-md-5 position-relative" style={{
          maxWidth: '640px',
          width: '100%',
          boxShadow: '0 25px 50px -12px rgba(21, 66, 18, 0.08)'
        }}>
          {/* Card Accent Top Line */}
          <div class="position-absolute top-0 start-0 w-100" style={{ height: '6px', backgroundColor: 'var(--color-primary)', borderRadius: '4px 4px 0 0' }}></div>

          {/* Title */}
          <div class="text-center mb-4">
            <div class="d-inline-flex align-items-center justify-content-center mb-3">
              <img src="/icon/security.png" alt="Masuk Kandang" style={{ height: '48px', width: '48px', objectFit: 'contain' }} />
            </div>
            <h2 class="fw-extrabold text-on-surface mb-1" style={{ letterSpacing: '-0.02em', fontSize: '1.75rem', fontFamily: 'var(--font-outfit), sans-serif' }}>Masuk Kandang</h2>
            <p class="text-on-surface-variant small m-0">Masukkan kode kandang untuk masuk ke modul peternakan</p>
          </div>

          <hr class="my-4 border-outline-variant" />

          {/* Cage Code Input */}
          <div class="mb-5">
            <label class="form-label-custom mb-3 d-block fw-bold" style={{ fontSize: '1rem', fontFamily: 'var(--font-outfit), sans-serif' }}>Kode Kandang</label>
            <div class="position-relative">
              <img src="/icon/kandang.png" alt="Kode Kandang" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', width: '20px', height: '20px', objectFit: 'contain', opacity: 0.55 }} />
              <input
                type="text"
                class="form-control form-control-lg rounded-4 ps-5 py-3"
                placeholder="Masukkan kode kandang, contoh: A"
                value={cageCode.value}
                onInput={(e) => { cageCode.value = (e.target as HTMLInputElement).value; error.value = ''; }}
                style={{ backgroundColor: '#FCFBF8', borderColor: 'var(--color-outline-variant)' }}
              />
            </div>

            <div class="d-flex flex-wrap gap-2 mt-3">
              <span class="badge rounded-pill px-3 py-2" style={{ backgroundColor: 'var(--color-primary-fixed)', color: 'var(--color-primary)' }}>A = Breeding</span>
              <span class="badge rounded-pill px-3 py-2" style={{ backgroundColor: 'var(--color-primary-fixed)', color: 'var(--color-primary)' }}>B = Fattening</span>
              <span class="badge rounded-pill px-3 py-2" style={{ backgroundColor: 'var(--color-primary-fixed)', color: 'var(--color-primary)' }}>C = Recovery</span>
            </div>
          </div>

          {error.value && (
            <div class="alert alert-danger rounded-4 py-3 small mb-4 border-0" style={{ backgroundColor: '#FDECEC', color: '#8B1E1E' }}>
              {error.value}
            </div>
          )}

          {/* Confirm Button */}
          <div class="d-flex gap-3">
            <button 
              type="button" 
              class="btn flex-fill py-3 rounded-pill fw-bold text-secondary bg-light border hover-bg-light-cream transition-all"
              style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
              onClick={goBack}
            >
              Kembali
            </button>
            <button 
              type="button" 
              class="btn flex-fill py-3 rounded-pill fw-bold text-white shadow-md border-0 hover-grow transition-all"
              style={{ backgroundColor: 'var(--color-primary)', fontFamily: 'var(--font-outfit), sans-serif' }}
              onClick={handleConfirm}
            >
              Konfirmasi & Mulai Kerja →
            </button>
          </div>
        </div>
      </div>
    )
  }
})
