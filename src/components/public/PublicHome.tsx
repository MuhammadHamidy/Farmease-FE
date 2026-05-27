import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'PublicHome',
  setup() {
    const router = useRouter();
    return () => (
      <div class="public-home-wrapper min-vh-100 bg-light-cream animate-fade-in" style={{ backgroundColor: 'var(--color-background)', fontFamily: 'var(--font-sans)' }}>
        {/* Hero Section */}
        <section class="hero-section text-white d-flex align-items-center position-relative overflow-hidden py-5" style={{
          background: 'radial-gradient(circle at 80% 20%, rgba(212, 196, 176, 0.15), transparent 50%), linear-gradient(135deg, #3d2f24 0%, #291c0e 100%)',
          minHeight: '75vh',
          boxShadow: 'inset 0 -30px 60px rgba(0,0,0,0.15)'
        }}>
          {/* Farm Grid Accent Overlay */}
          <div class="position-absolute inset-0 opacity-5" style={{
            backgroundImage: 'radial-gradient(circle at 20% 30%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 70%, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            pointerEvents: 'none'
          }}></div>

          <div class="container py-5 z-2">
            <div class="row align-items-center g-5">
              <div class="col-lg-7 text-center text-lg-start">
                <div class="badge px-3 py-2.5 mb-3 rounded-pill text-primary-fixed border border-white/20 fw-extrabold tracking-wider" style={{
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-outfit), sans-serif',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(8px)',
                  letterSpacing: '1px'
                }}>
                  ✨ PELOPOR PETERNAKAN DOMBA PRESISI
                </div>
                
                <h1 class="display-3 fw-black mb-3 tracking-tight" style={{ 
                  fontFamily: 'var(--font-outfit), sans-serif', 
                  fontWeight: 900, 
                  fontSize: '3.75rem', 
                  lineHeight: 1.15,
                  textShadow: '0 2px 10px rgba(0,0,0,0.15)' 
                }}>
                  Say Hi <span style={{ 
                    background: 'linear-gradient(120deg, #d4c4b0 0%, #c4b0a0 100%)', 
                    WebkitBackgroundClip: 'text', 
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block'
                  }}>Agro Farm</span>
                </h1>
                
                <p class="lead mb-5 text-white/90" style={{ 
                  fontSize: '1.2rem', 
                  lineHeight: 1.65, 
                  maxWidth: '620px',
                  fontWeight: 500,
                  fontFamily: 'var(--font-sans)' 
                }}>
                  Kawasan edutourism dan pusat pembiakan domba unggul (Garut, Merino, Dorper) terintegrasi dengan teknologi pertanian organik ramah lingkungan.
                </p>
                
                <div class="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
                  <button 
                    onClick={() => router.push({ name: 'information' })} 
                    class="btn btn-lg px-4 py-3 rounded-pill fw-bold text-primary shadow hover-grow transition-all"
                    style={{ backgroundColor: 'var(--color-primary-fixed)', border: 'none', fontFamily: 'var(--font-outfit), sans-serif' }}
                  >
                    Pelajari Informasi Ternak →
                  </button>
                  <button 
                    onClick={() => router.push({ name: 'contact' })} 
                    class="btn btn-lg px-4 py-3 rounded-pill fw-bold text-white border-2 border-white/30 hover-bg-white/10 transition-all"
                    style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                  >
                    Hubungi Kami
                  </button>
                </div>
              </div>
              
              <div class="col-lg-5 text-center position-relative">
                {/* Floating Glass Mockup Card */}
                <div class="glass-farm-card p-4 p-md-5 rounded-5 border border-white/10 text-start shadow-2xl bg-white/5 backdrop-blur-xl animate-bounce-slow" style={{
                  boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.3)'
                }}>
                  <div class="d-flex align-items-center gap-3 mb-4">
                    <div class="p-2.5 bg-white/10 rounded-4 border border-white/20 d-flex align-items-center justify-content-center" style={{ width: '56px', height: '56px' }}>
                      <img src="/icon/domba.png" alt="Say Hi Agro" style={{ height: '36px', width: 'auto', objectFit: 'contain' }} />
                    </div>
                    <div>
                      <h4 class="mb-0 fw-bold" style={{ fontFamily: 'var(--font-outfit), sans-serif', fontSize: '1.25rem' }}>Say Hi Agro</h4>
                      <p class="mb-0 text-white/60 text-xs font-monospace">Modern Sheep Farming</p>
                    </div>
                  </div>
                  <blockquote class="fs-5 italic mb-4 text-white/90" style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, lineHeight: 1.5 }}>
                    "Mengawinkan tradisi peternakan lokal dengan pendekatan tata kelola berbasis presisi harian."
                  </blockquote>
                  <div class="d-flex justify-content-between align-items-center border-top border-white/10 pt-3">
                    <div class="text-white/80 text-xs fw-semibold">Kapasitas Kandang</div>
                    <span class="badge px-3 py-1.5 bg-white/10 border border-white/20 rounded-pill fw-bold text-primary-fixed" style={{ fontSize: '0.8rem' }}>500+ Ekor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Core Philosophy */}
        <section class="py-5" style={{ padding: '6rem 0' }}>
          <div class="container">
            <div class="text-center mb-5 max-w-2xl mx-auto">
              <h2 class="fw-black text-on-surface" style={{ fontSize: '2.5rem', fontFamily: 'var(--font-outfit), sans-serif', letterSpacing: '-0.02em' }}>
                Nilai Utama Peternakan Kami
              </h2>
              <p class="text-on-surface-variant mt-2" style={{ fontSize: '1.05rem', fontFamily: 'var(--font-sans)' }}>
                Kami membangun ekosistem pertanian berkelanjutan dengan tiga pilar utama yang kokoh.
              </p>
            </div>

            <div class="row g-4">
              <div class="col-md-4">
                <div class="p-4 p-md-5 h-100 rounded-5 bg-white border border-outline-variant/60 shadow-sm hover-shadow transition-all d-flex flex-column justify-content-between">
                  <div>
                    <div class="rounded-4 mb-4 d-flex align-items-center justify-content-center border border-outline-variant/20 shadow-xs" style={{ width: '64px', height: '64px', backgroundColor: 'var(--color-surface-container-low)' }}>
                      <img src="/icon/domba.png" alt="Genetik" style={{ height: '36px', width: 'auto', objectFit: 'contain' }} />
                    </div>
                    <h3 class="fw-bold mb-3 text-on-surface" style={{ fontSize: '1.35rem', fontFamily: 'var(--font-outfit), sans-serif' }}>Genetik Unggul</h3>
                    <p class="text-on-surface-variant mb-0" style={{ fontSize: '0.95rem', lineHeight: 1.65 }}>
                      Pemuliaan terarah untuk menghasilkan domba keturunan kualitas juara yang sehat, tahan penyakit, dan tumbuh cepat.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="p-4 p-md-5 h-100 rounded-5 bg-white border border-outline-variant/60 shadow-sm hover-shadow transition-all d-flex flex-column justify-content-between">
                  <div>
                    <div class="rounded-4 mb-4 d-flex align-items-center justify-content-center border border-outline-variant/20 shadow-xs" style={{ width: '64px', height: '64px', backgroundColor: 'var(--color-surface-container-low)' }}>
                      <img src="/icon/rumput.png" alt="Pakan" style={{ height: '36px', width: 'auto', objectFit: 'contain' }} />
                    </div>
                    <h3 class="fw-bold mb-3 text-on-surface" style={{ fontSize: '1.35rem', fontFamily: 'var(--font-outfit), sans-serif' }}>Pakan Fermentasi</h3>
                    <p class="text-on-surface-variant mb-0" style={{ fontSize: '0.95rem', lineHeight: 1.65 }}>
                      Formulasi konsentrat dan pakan silase hijau kaya nutrisi hasil budidaya organik mandiri untuk kesehatan domba yang prima.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="p-4 p-md-5 h-100 rounded-5 bg-white border border-outline-variant/60 shadow-sm hover-shadow transition-all d-flex flex-column justify-content-between">
                  <div>
                    <div class="rounded-4 mb-4 d-flex align-items-center justify-content-center border border-outline-variant/20 shadow-xs" style={{ width: '64px', height: '64px', backgroundColor: 'var(--color-surface-container-low)' }}>
                      <img src="/icon/kandang.png" alt="Eco Cycle" style={{ height: '36px', width: 'auto', objectFit: 'contain' }} />
                    </div>
                    <h3 class="fw-bold mb-3 text-on-surface" style={{ fontSize: '1.35rem', fontFamily: 'var(--font-outfit), sans-serif' }}>Zero-Waste Eco Cycle</h3>
                    <p class="text-on-surface-variant mb-0" style={{ fontSize: '0.95rem', lineHeight: 1.65 }}>
                      Pengolahan kotoran domba menjadi pupuk organik kascing premium untuk menyuburkan lahan hijauan pakan secara sirkular.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sheep Breeds Showcase */}
        <section class="py-5" style={{ backgroundColor: 'var(--color-surface-container-low)' }}>
          <div class="container py-4">
            <div class="text-center mb-5 max-w-2xl mx-auto">
              <h2 class="fw-black text-on-surface" style={{ fontSize: '2.5rem', fontFamily: 'var(--font-outfit), sans-serif', letterSpacing: '-0.02em' }}>
                Varietas Domba Say Hi Agro Farm
              </h2>
              <p class="text-on-surface-variant mt-2" style={{ fontSize: '1.05rem' }}>
                Kenali ras domba unggulan berlisensi yang dikembangkan di kawasan peternakan terpadu kami.
              </p>
            </div>

            <div class="row g-4">
              {/* Breed 1: Garut */}
              <div class="col-lg-4">
                <div class="card h-100 border border-outline-variant/60 rounded-5 overflow-hidden shadow-sm bg-white hover-shadow transition-all">
                  <div class="position-relative" style={{ height: '220px' }}>
                    <div class="w-100 h-100 d-flex align-items-center justify-content-center" style={{ background: 'linear-gradient(to bottom, var(--color-surface-container-lowest), var(--color-surface-container-low))' }}>
                      <img src="/icon/domba.png" alt="Domba Garut" style={{ height: '110px', width: 'auto', objectFit: 'contain' }} />
                    </div>
                    <span class="badge position-absolute top-3 end-3 px-3 py-1.5 rounded-pill bg-primary text-white font-monospace text-xs" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
                      Ras Lokal Juara
                    </span>
                  </div>
                  <div class="card-body p-4 d-flex flex-column justify-content-between">
                    <div>
                      <h4 class="fw-bold mb-2 text-on-surface" style={{ fontFamily: 'var(--font-outfit), sans-serif', fontSize: '1.25rem' }}>Domba Garut</h4>
                      <p class="text-on-surface-variant mb-4 text-sm" style={{ lineHeight: 1.65 }}>
                        Ras domba legendaris dengan ciri tanduk yang kekar melingkar anggun, postur dada bidang, serta ketahanan iklim yang luar biasa unggul.
                      </p>
                    </div>
                    <div class="d-flex justify-content-between text-xs border-top pt-3 text-on-surface-variant fw-semibold">
                      <span>Karakteristik</span>
                      <strong class="text-primary">Kuat & Tangguh</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Breed 2: Merino */}
              <div class="col-lg-4">
                <div class="card h-100 border border-outline-variant/60 rounded-5 overflow-hidden shadow-sm bg-white hover-shadow transition-all">
                  <div class="position-relative" style={{ height: '220px' }}>
                    <div class="w-100 h-100 d-flex align-items-center justify-content-center" style={{ background: 'linear-gradient(to bottom, var(--color-surface-container-lowest), var(--color-surface-container-low))' }}>
                      <img src="/icon/catat_kawin.png" alt="Domba Merino" style={{ height: '110px', width: 'auto', objectFit: 'contain' }} />
                    </div>
                    <span class="badge position-absolute top-3 end-3 px-3 py-1.5 rounded-pill bg-secondary text-white font-monospace text-xs" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
                      Premium Wool
                    </span>
                  </div>
                  <div class="card-body p-4 d-flex flex-column justify-content-between">
                    <div>
                      <h4 class="fw-bold mb-2 text-on-surface" style={{ fontFamily: 'var(--font-outfit), sans-serif', fontSize: '1.25rem' }}>Domba Merino</h4>
                      <p class="text-on-surface-variant mb-4 text-sm" style={{ lineHeight: 1.65 }}>
                        Terkenal dengan mantel bulu wool tebal, putih halus, dan lebat. Memiliki sifat jinak, mudah dikelola, dan sangat produktif menghasilkan anakan.
                      </p>
                    </div>
                    <div class="d-flex justify-content-between text-xs border-top pt-3 text-on-surface-variant fw-semibold">
                      <span>Karakteristik</span>
                      <strong class="text-secondary">Lembut & Subur</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Breed 3: Dorper */}
              <div class="col-lg-4">
                <div class="card h-100 border border-outline-variant/60 rounded-5 overflow-hidden shadow-sm bg-white hover-shadow transition-all">
                  <div class="position-relative" style={{ height: '220px' }}>
                    <div class="w-100 h-100 d-flex align-items-center justify-content-center" style={{ background: 'linear-gradient(to bottom, var(--color-surface-container-lowest), var(--color-surface-container-low))' }}>
                      <img src="/icon/catat_lahir.png" alt="Domba Dorper" style={{ height: '110px', width: 'auto', objectFit: 'contain' }} />
                    </div>
                    <span class="badge position-absolute top-3 end-3 px-3 py-1.5 rounded-pill bg-dark text-white font-monospace text-xs" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
                      Pedaging Super
                    </span>
                  </div>
                  <div class="card-body p-4 d-flex flex-column justify-content-between">
                    <div>
                      <h4 class="fw-bold mb-2 text-on-surface" style={{ fontFamily: 'var(--font-outfit), sans-serif', fontSize: '1.25rem' }}>Domba Dorper</h4>
                      <p class="text-on-surface-variant mb-4 text-sm" style={{ lineHeight: 1.65 }}>
                        Ras afrika dengan ciri khas tubuh putih tegap berkepala hitam pekat. Pertumbuhan berat badan harian (ADG) yang sangat cepat dan pakan yang efisien.
                      </p>
                    </div>
                    <div class="d-flex justify-content-between text-xs border-top pt-3 text-on-surface-variant fw-semibold">
                      <span>Karakteristik</span>
                      <strong class="text-dark">Pertumbuhan Cepat</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics CTA */}
        <section class="py-5 text-white" style={{
          background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-container) 100%)',
          boxShadow: 'inset 0 10px 30px rgba(0,0,0,0.1)'
        }}>
          <div class="container py-4 text-center">
            <h2 class="fw-black mb-3" style={{ fontFamily: 'var(--font-outfit), sans-serif', fontSize: '2rem' }}>Tertarik Melihat Dasbor Populasi Ternak Kami?</h2>
            <p class="lead mb-4 text-white/80 max-w-xl mx-auto" style={{ fontSize: '1.05rem', lineHeight: 1.6 }}>
              Kami menyediakan visualisasi data populasi domba jantan, betina, serta anakan (cempe) aktual yang terawat secara harian untuk publik.
            </p>
            <button 
              onClick={() => router.push({ name: 'information' })} 
              class="btn btn-lg px-4 py-3 rounded-pill fw-bold text-primary shadow hover-grow transition-all"
              style={{ backgroundColor: 'var(--color-primary-fixed)', border: 'none', fontFamily: 'var(--font-outfit), sans-serif' }}
            >
              Lihat Dasbor Informasi Publik →
            </button>
          </div>
        </section>
      </div>
    )
  }
})
