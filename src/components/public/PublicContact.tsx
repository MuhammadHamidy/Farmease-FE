import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'PublicContact',
  setup() {
    const name = ref('')
    const email = ref('')
    const wa = ref('')
    const message = ref('')
    const success = ref(false)

    const handleSubmit = (e: Event) => {
      e.preventDefault()
      if (!name.value || !email.value || !message.value) {
        alert('Mohon lengkapi nama, email, dan pesan Anda.')
        return
      }
      success.value = true
      setTimeout(() => {
        success.value = false
        name.value = ''
        email.value = ''
        wa.value = ''
        message.value = ''
      }, 3500)
    }

    return () => (
      <div class="public-contact-wrapper min-vh-100 py-5 bg-light-cream animate-fade-in" style={{ backgroundColor: 'var(--color-background)', fontFamily: 'var(--font-sans)' }}>
        <div class="container py-4">
          
          {/* Header */}
          <div class="text-center mb-5 max-w-2xl mx-auto">
            <span class="badge px-3 py-2.5 rounded-pill bg-primary-fixed border border-primary-fixed-dim text-primary fw-bold text-xs" style={{ fontFamily: 'var(--font-outfit), sans-serif', letterSpacing: '0.5px' }}>
              📞 LAYANAN TERBUKA & INFORMASI
            </span>
            <h1 class="fw-black text-on-surface mt-3" style={{ fontSize: '2.5rem', fontFamily: 'var(--font-outfit), sans-serif', letterSpacing: '-0.02em' }}>
              Hubungi Say Hi Agro Farm
            </h1>
            <p class="text-on-surface-variant" style={{ fontSize: '1.05rem', lineHeight: 1.6 }}>
              Ada pertanyaan seputar edutourism, pembelian anakan bibit, atau pemesanan pupuk organik? Tim kami siap melayani Anda.
            </p>
          </div>

          <div class="row g-5">
            {/* Left Side: Contact details and Map Mockup */}
            <div class="col-lg-6">
              <div class="d-flex flex-column gap-4 h-100">
                {/* Official Contacts Cards */}
                <div class="p-4 p-md-5 rounded-5 bg-white border border-outline-variant/60 shadow-sm">
                  <h3 class="fw-bold mb-4 text-on-surface" style={{ fontSize: '1.25rem', fontFamily: 'var(--font-outfit), sans-serif' }}>Kontak Resmi</h3>
                  
                  <div class="d-flex flex-column gap-3">
                    <div class="d-flex align-items-center gap-3">
                      <div class="p-2 rounded-3 bg-surface-container d-flex align-items-center justify-content-center" style={{ width: '46px', height: '46px' }}>
                        <img src="/icon/location.png" alt="Lokasi" style={{ height: '24px', width: 'auto', objectFit: 'contain' }} />
                      </div>
                      <div>
                        <h6 class="mb-0 fw-bold text-xs text-on-surface" style={{ fontSize: '0.85rem', fontFamily: 'var(--font-outfit), sans-serif' }}>Alamat Farm</h6>
                        <p class="mb-0 text-on-surface-variant small mt-1">
                          Jl. Raya Say Hi Agro, Kec. Cilawu, Kabupaten Garut, Jawa Barat 44181
                        </p>
                      </div>
                    </div>

                    <hr class="my-2 border-outline-variant/40" />

                    <div class="d-flex align-items-center gap-3">
                      <div class="p-2 rounded-3 bg-surface-container d-flex align-items-center justify-content-center" style={{ width: '46px', height: '46px' }}>
                        <img src="/icon/mail.png" alt="WhatsApp" style={{ height: '24px', width: 'auto', objectFit: 'contain', filter: 'hue-rotate(60deg)' }} />
                      </div>
                      <div>
                        <h6 class="mb-0 fw-bold text-xs text-on-surface" style={{ fontSize: '0.85rem', fontFamily: 'var(--font-outfit), sans-serif' }}>WhatsApp Business</h6>
                        <p class="mb-0 text-on-surface-variant small mt-1">
                          <a href="https://wa.me/6281234567890" target="_blank" class="text-primary fw-bold text-decoration-none">+62 812-3456-7890</a>
                        </p>
                      </div>
                    </div>

                    <hr class="my-2 border-outline-variant/40" />

                    <div class="d-flex align-items-center gap-3">
                      <div class="p-2 rounded-3 bg-surface-container d-flex align-items-center justify-content-center" style={{ width: '46px', height: '46px' }}>
                        <img src="/icon/mail.png" alt="Email" style={{ height: '24px', width: 'auto', objectFit: 'contain' }} />
                      </div>
                      <div>
                        <h6 class="mb-0 fw-bold text-xs text-on-surface" style={{ fontSize: '0.85rem', fontFamily: 'var(--font-outfit), sans-serif' }}>Alamat Email</h6>
                        <p class="mb-0 text-on-surface-variant small mt-1">
                          info@sayhiagrofarm.com
                        </p>
                      </div>
                    </div>

                    <hr class="my-2 border-outline-variant/40" />

                    <div class="d-flex align-items-center gap-3">
                      <div class="p-2 rounded-3 bg-surface-container d-flex align-items-center justify-content-center" style={{ width: '46px', height: '46px' }}>
                        <img src="/icon/clock.png" alt="Operasional" style={{ height: '24px', width: 'auto', objectFit: 'contain' }} />
                      </div>
                      <div>
                        <h6 class="mb-0 fw-bold text-xs text-on-surface" style={{ fontSize: '0.85rem', fontFamily: 'var(--font-outfit), sans-serif' }}>Jam Operasional</h6>
                        <p class="mb-0 text-on-surface-variant small mt-1">
                          Senin - Minggu (08:00 - 17:00 WIB)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Mockup Container */}
                <div class="p-4 rounded-5 bg-white border border-outline-variant/60 shadow-sm overflow-hidden flex-grow-1" style={{ minHeight: '300px' }}>
                  <h3 class="fw-bold mb-3 text-on-surface" style={{ fontSize: '1.15rem', fontFamily: 'var(--font-outfit), sans-serif' }}>Lokasi di Google Maps</h3>
                  
                  {/* Google Map Mock Frame */}
                  <div class="w-100 rounded-4 position-relative overflow-hidden border border-outline-variant/60" style={{ height: '240px', backgroundColor: 'var(--color-outline-variant)' }}>
                    <div class="w-100 h-100 d-flex flex-column align-items-center justify-content-center p-4 text-center" style={{
                      background: 'radial-gradient(circle, #f4f4ee 10%, #e3e3de 90%)'
                    }}>
                      <div class="p-2.5 bg-white/80 backdrop-blur-md rounded-circle border shadow-sm mb-2 animate-bounce-slow" style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src="/icon/location.png" alt="Pin" style={{ height: '26px', width: 'auto', objectFit: 'contain' }} />
                      </div>
                      <h6 class="fw-bold mt-1 mb-0 text-on-surface" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>Say Hi Agro Farm (Garut)</h6>
                      <p class="mb-0 text-muted small mt-1">Samping Balai Desa Cilawu, Garut, Jawa Barat</p>
                      
                      {/* Grid road layout visual inside mock map */}
                      <div class="position-absolute w-100 h-2 bg-white/40 top-50 start-0 transform -translate-y-50"></div>
                      <div class="position-absolute h-100 w-2 bg-white/40 start-50 top-0 transform -translate-x-50"></div>

                      <div class="position-absolute bottom-3 start-3 d-flex gap-2">
                        <button type="button" class="btn btn-sm btn-white py-1 px-2 border rounded shadow-sm fw-bold text-xs" style={{ backgroundColor: 'white' }}>+</button>
                        <button type="button" class="btn btn-sm btn-white py-1 px-2 border rounded shadow-sm fw-bold text-xs" style={{ backgroundColor: 'white' }}>-</button>
                      </div>

                      <a 
                        href="https://maps.google.com" 
                        target="_blank" 
                        class="btn btn-sm btn-white position-absolute bottom-3 end-3 px-3 py-1.5 border rounded-pill shadow-sm fw-bold text-xs text-primary"
                        style={{ fontSize: '0.65rem', backgroundColor: 'white', fontFamily: 'var(--font-outfit), sans-serif' }}
                      >
                        Buka Maps ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Message & Booking Form */}
            <div class="col-lg-6">
              <div class="p-4 p-md-5 rounded-5 bg-white border border-outline-variant/60 shadow-sm h-100">
                <h3 class="fw-bold mb-2 text-on-surface" style={{ fontSize: '1.25rem', fontFamily: 'var(--font-outfit), sans-serif' }}>Kirim Pesan / Reservasi</h3>
                <p class="text-on-surface-variant text-sm mb-4" style={{ lineHeight: 1.65 }}>
                  Gunakan formulir di bawah ini untuk mengirim pertanyaan atau reservasi kunjungan kelompok/sekolah minimal H-3.
                </p>

                {success.value ? (
                  <div class="alert alert-success p-4 rounded-4 border-0 mb-0 animate-fade-in shadow-xs" style={{ backgroundColor: 'var(--color-primary-fixed)', color: 'var(--color-primary)', border: '1px solid var(--color-primary-fixed-dim) !important' }}>
                    <h5 class="fw-bold mb-2">🎉 Pesan Berhasil Terkirim!</h5>
                    <p class="mb-0 small">
                      Terima kasih atas pesan Anda. Tim OvisManage & Say Hi Agro Farm akan segera menghubungi Anda kembali melalui Whatsapp atau Email dalam waktu 1x24 jam.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} class="d-flex flex-column gap-3">
                    <div>
                      <label class="form-label-custom mb-1 text-xs fw-bold text-on-surface-variant" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>Nama Lengkap</label>
                      <input 
                        type="text" 
                        class="form-control rounded-4 border-light bg-light py-3 px-4 text-sm" 
                        placeholder="Masukkan nama Anda"
                        value={name.value}
                        onInput={(e) => name.value = (e.target as HTMLInputElement).value}
                        required 
                      />
                    </div>

                    <div>
                      <label class="form-label-custom mb-1 text-xs fw-bold text-on-surface-variant" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>Alamat Email</label>
                      <input 
                        type="email" 
                        class="form-control rounded-4 border-light bg-light py-3 px-4 text-sm" 
                        placeholder="nama@email.com"
                        value={email.value}
                        onInput={(e) => email.value = (e.target as HTMLInputElement).value}
                        required 
                      />
                    </div>

                    <div>
                      <label class="form-label-custom mb-1 text-xs fw-bold text-on-surface-variant" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>Nomor WhatsApp (Opsional)</label>
                      <input 
                        type="tel" 
                        class="form-control rounded-4 border-light bg-light py-3 px-4 text-sm" 
                        placeholder="Contoh: 081234567890"
                        value={wa.value}
                        onInput={(e) => wa.value = (e.target as HTMLInputElement).value}
                      />
                    </div>

                    <div>
                      <label class="form-label-custom mb-1 text-xs fw-bold text-on-surface-variant" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>Isi Pesan / Reservasi Kunjungan</label>
                      <textarea 
                        class="form-control rounded-4 border-light bg-light py-3 px-4 text-sm" 
                        rows={5} 
                        placeholder="Tuliskan pesan Anda secara lengkap (sertakan jumlah peserta & perkiraan tanggal jika reservasi kunjungan)..."
                        value={message.value}
                        onInput={(e) => message.value = (e.target as HTMLTextAreaElement).value}
                        required
                      ></textarea>
                    </div>

                    <div class="p-3 bg-light rounded-4 border text-on-surface-variant text-xs mt-1">
                      ⚠️ <strong>Informasi Reservasi:</strong> Kunjungan rombongan edukasi sekolah atau instansi wajib menyertakan detail jumlah rombongan pada formulir ini.
                    </div>

                    <button 
                      type="submit" 
                      class="btn py-3 px-4 rounded-pill fw-bold text-white shadow-sm mt-2 border-0 hover-grow transition-all"
                      style={{ backgroundColor: 'var(--color-primary)', fontFamily: 'var(--font-outfit), sans-serif' }}
                    >
                      Kirim Pesan Sekarang
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
})
