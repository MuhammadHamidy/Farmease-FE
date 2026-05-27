import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PublicInfo',
  setup() {
    // Static premium dashboard statistics for public view
    const stats = {
      total: 524,
      jantan: 122,
      betina: 286,
      cempe: 116,
    }

    const breeds = [
      { name: 'Domba Garut', percentage: 45, count: 236, color: 'var(--color-primary)' },
      { name: 'Domba Merino', percentage: 30, count: 157, color: 'var(--color-secondary)' },
      { name: 'Domba Dorper', percentage: 25, count: 131, color: 'var(--color-tertiary)' },
    ]

    const articles = [
      {
        id: 1,
        title: 'Manajemen Pakan Fermentasi Silase Hijauan',
        summary: 'Bagaimana Say Hi Agro Farm meramu pakan silase berkadar protein 16% untuk mendongkrak pertambahan bobot harian (ADG) domba hingga 150-250 gram per hari secara alami.',
        category: 'Pakan & Nutrisi',
        tag: 'Populer',
        icon: '/icon/catat_pakan.png'
      },
      {
        id: 2,
        title: 'Teknik Pemuliaan Presisi & Manajemen Breeding',
        summary: 'Metode sinkronisasi birahi indukan Garut dan perkawinan silang unggul (cross-breeding) dengan Dorper untuk menghasilkan keturunan yang tangguh berukuran super.',
        category: 'Reproduksi',
        tag: 'Terbaru',
        icon: '/icon/catat_kawin.png'
      },
      {
        id: 3,
        title: 'Desain Kandang Panggung Ramah Lingkungan',
        summary: 'Mengapa struktur kandang panggung setinggi 1.5 meter dengan ventilasi silang terbukti meminimalisir gas amonia, menekan stres domba, dan mempercepat panen kotoran.',
        category: 'Sanitasi & Kandang',
        tag: 'Penting',
        icon: '/icon/kandang.png'
      }
    ]

    return () => (
      <div class="public-info-wrapper min-vh-100 py-5 bg-light-cream animate-fade-in" style={{ backgroundColor: 'var(--color-background)', fontFamily: 'var(--font-sans)' }}>
        <div class="container py-4">
          
          {/* Header */}
          <div class="text-center mb-5 max-w-2xl mx-auto">
            <span class="badge px-3 py-2.5 rounded-pill bg-primary-fixed border border-primary-fixed-dim text-primary fw-bold text-xs" style={{ fontFamily: 'var(--font-outfit), sans-serif', letterSpacing: '0.5px' }}>
              📊 PUSAT TRANSPARANSI DATA PUBLIK
            </span>
            <h1 class="fw-black text-on-surface mt-3" style={{ fontSize: '2.5rem', fontFamily: 'var(--font-outfit), sans-serif', letterSpacing: '-0.02em' }}>
              Dasbor Informasi Peternakan
            </h1>
            <p class="text-on-surface-variant" style={{ fontSize: '1.05rem', lineHeight: 1.6 }}>
              Informasi data populasi aktual harian serta edukasi tata kelola peternakan modern di Say Hi Agro Farm.
            </p>
          </div>

          {/* Stats Cards Section */}
          <div class="row g-4 mb-5">
            {/* Total Population */}
            <div class="col-md-3">
              <div class="p-4 rounded-5 bg-white border border-outline-variant/60 shadow-sm hover-shadow transition-all d-flex align-items-center justify-content-between">
                <div>
                  <h5 class="text-on-surface-variant font-monospace text-xs mb-2 fw-semibold" style={{ letterSpacing: '0.05em' }}>TOTAL POPULASI</h5>
                  <div class="display-6 fw-extrabold text-primary" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
                    {stats.total} <span class="fs-6 text-on-surface-variant fw-bold font-sans">ekor</span>
                  </div>
                </div>
                <div class="p-1 rounded-3 bg-surface-container d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                  <img src="/icon/domba.png" alt="Total" style={{ height: '32px', width: 'auto', objectFit: 'contain' }} />
                </div>
              </div>
            </div>

            {/* Jantan */}
            <div class="col-md-3">
              <div class="p-4 rounded-5 bg-white border border-outline-variant/60 shadow-sm hover-shadow transition-all d-flex align-items-center justify-content-between">
                <div>
                  <h5 class="text-on-surface-variant font-monospace text-xs mb-2 fw-semibold" style={{ letterSpacing: '0.05em' }}>DOMBA JANTAN</h5>
                  <div class="display-6 fw-extrabold text-on-surface" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
                    {stats.jantan} <span class="fs-6 text-on-surface-variant fw-bold font-sans">ekor</span>
                  </div>
                </div>
                <div class="p-1 rounded-3 bg-surface-container d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                  <img src="/icon/catat_kawin.png" alt="Jantan" style={{ height: '32px', width: 'auto', objectFit: 'contain' }} />
                </div>
              </div>
            </div>

            {/* Betina */}
            <div class="col-md-3">
              <div class="p-4 rounded-5 bg-white border border-outline-variant/60 shadow-sm hover-shadow transition-all d-flex align-items-center justify-content-between">
                <div>
                  <h5 class="text-on-surface-variant font-monospace text-xs mb-2 fw-semibold" style={{ letterSpacing: '0.05em' }}>DOMBA BETINA</h5>
                  <div class="display-6 fw-extrabold text-on-surface" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
                    {stats.betina} <span class="fs-6 text-on-surface-variant fw-bold font-sans">ekor</span>
                  </div>
                </div>
                <div class="p-1 rounded-3 bg-surface-container d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                  <img src="/icon/domba.png" alt="Betina" style={{ height: '32px', width: 'auto', objectFit: 'contain', filter: 'hue-rotate(60deg)' }} />
                </div>
              </div>
            </div>

            {/* Cempe */}
            <div class="col-md-3">
              <div class="p-4 rounded-5 bg-white border border-outline-variant/60 shadow-sm hover-shadow transition-all d-flex align-items-center justify-content-between">
                <div>
                  <h5 class="text-on-surface-variant font-monospace text-xs mb-2 fw-semibold" style={{ letterSpacing: '0.05em' }}>ANAK (CEMPE)</h5>
                  <div class="display-6 fw-extrabold text-secondary" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
                    {stats.cempe} <span class="fs-6 text-on-surface-variant fw-bold font-sans">ekor</span>
                  </div>
                </div>
                <div class="p-1 rounded-3 bg-surface-container d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                  <img src="/icon/catat_lahir.png" alt="Cempe" style={{ height: '32px', width: 'auto', objectFit: 'contain' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Breed Composition & Chart Mock */}
          <div class="row g-4 mb-5">
            <div class="col-lg-6">
              <div class="p-4 p-md-5 h-100 rounded-5 bg-white border border-outline-variant/60 shadow-sm">
                <h3 class="fw-bold mb-4 text-on-surface" style={{ fontSize: '1.25rem', fontFamily: 'var(--font-outfit), sans-serif' }}>Komposisi Varietas Domba</h3>
                <p class="text-on-surface-variant text-sm mb-4" style={{ lineHeight: 1.65 }}>
                  Distribusi ras domba unggulan di area kandang modern Say Hi Agro Farm saat ini.
                </p>
                
                <div class="breed-bars flex-column d-flex gap-4">
                  {breeds.map((b, i) => (
                    <div key={i}>
                      <div class="d-flex justify-content-between text-sm fw-bold mb-2">
                        <span class="text-on-surface">{b.name}</span>
                        <span class="text-on-surface-variant font-monospace">{b.count} ekor ({b.percentage}%)</span>
                      </div>
                      <div class="progress rounded-pill bg-light" style={{ height: '12px' }}>
                        <div 
                          class="progress-bar rounded-pill" 
                          style={{ 
                            width: `${b.percentage}%`, 
                            backgroundColor: b.color,
                            transition: 'width 1s ease-in-out'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="p-4 p-md-5 h-100 rounded-5 bg-white border border-outline-variant/60 shadow-sm d-flex flex-column justify-content-between">
                <div>
                  <h3 class="fw-bold mb-4 text-on-surface" style={{ fontSize: '1.25rem', fontFamily: 'var(--font-outfit), sans-serif' }}>Tata Kelola Berbasis Edutourism</h3>
                  <p class="text-on-surface-variant mb-3 text-sm" style={{ lineHeight: 1.65 }}>
                    Kawasan Say Hi Agro Farm dirancang sebagai laboratorium hidup peternakan berkelanjutan. Siswa, mahasiswa, peneliti, dan masyarakat umum dapat berkunjung untuk mempelajari langsung:
                  </p>
                  <ul class="list-unstyled d-flex flex-column gap-2 mb-0">
                    <li class="d-flex align-items-start gap-2 text-on-surface-variant text-sm">
                      <span class="text-primary fw-bold">✔</span> Formulasi nutrisi pakan berkualitas tinggi.
                    </li>
                    <li class="d-flex align-items-start gap-2 text-on-surface-variant text-sm">
                      <span class="text-primary fw-bold">✔</span> Otomasi kebersihan kandang tanpa limbah bau.
                    </li>
                    <li class="d-flex align-items-start gap-2 text-on-surface-variant text-sm">
                      <span class="text-primary fw-bold">✔</span> Pencatatan harian presisi (OvisManage) untuk penelusuran (traceability) silsilah ternak.
                    </li>
                  </ul>
                </div>
                
                <div class="mt-4 p-3 bg-light rounded-4 border border-outline-variant/60 d-flex align-items-center gap-3">
                  <div class="p-2 bg-white rounded-3 border d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                    <img src="/icon/kandang.png" alt="Kunjungan" style={{ height: '30px', width: 'auto', objectFit: 'contain' }} />
                  </div>
                  <div>
                    <h5 class="mb-0 fw-bold text-xs text-on-surface" style={{ fontSize: '0.8rem', fontFamily: 'var(--font-outfit), sans-serif' }}>Jadwal Kunjungan Edukasi</h5>
                    <p class="mb-0 text-muted small mt-0.5">Setiap hari Sabtu & Minggu (Jam 09:00 - 15:00 WIB)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Educational Articles */}
          <div>
            <div class="d-flex align-items-center justify-content-between mb-4">
              <h3 class="fw-extrabold text-on-surface m-0" style={{ fontSize: '1.5rem', fontFamily: 'var(--font-outfit), sans-serif', letterSpacing: '-0.01em' }}>
                Artikel Edukasi Peternakan
              </h3>
              <span class="text-primary fw-bold text-xs font-monospace">SAY HI AGRO KNOWLEDGE BASE</span>
            </div>

            <div class="row g-4">
              {articles.map((art) => (
                <div class="col-lg-4" key={art.id}>
                  <div class="card h-100 border border-outline-variant/60 rounded-5 overflow-hidden shadow-sm bg-white hover-shadow transition-all">
                    <div class="card-body p-4 p-md-5 d-flex flex-column justify-content-between h-100">
                      <div>
                        <div class="d-flex justify-content-between align-items-center mb-4">
                          <span class="badge px-3 py-1 bg-light text-primary rounded-pill fw-bold text-xs">
                            {art.category}
                          </span>
                          <span class="badge px-2.5 py-1 bg-primary-fixed text-primary rounded-pill text-xs font-monospace font-bold">
                            {art.tag}
                          </span>
                        </div>
                        
                        <div class="d-flex align-items-center gap-3 mb-3">
                          <div class="p-2 bg-light rounded-3 d-flex align-items-center justify-content-center shadow-xs" style={{ width: '42px', height: '42px' }}>
                            <img src={art.icon} alt="Artikel" style={{ height: '24px', width: 'auto', objectFit: 'contain' }} />
                          </div>
                          <h4 class="fw-bold mb-0 text-on-surface" style={{ fontSize: '1.15rem', lineHeight: 1.35, fontFamily: 'var(--font-outfit), sans-serif' }}>
                            {art.title}
                          </h4>
                        </div>
                        
                        <p class="text-on-surface-variant mb-4 text-xs" style={{ lineHeight: 1.65, fontSize: '0.85rem' }}>
                          {art.summary}
                        </p>
                      </div>
                      
                      <a 
                        href="#" 
                        onClick={(e) => { e.preventDefault(); alert(`Artikel lengkap "${art.title}" segera hadir di Say Hi Agro Farm Knowledge Base!`); }} 
                        class="text-primary fw-bold text-xs text-decoration-none mt-auto hover-underline d-inline-flex align-items-center gap-1"
                        style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                      >
                        Baca Selengkapnya <span>→</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    )
  }
})
