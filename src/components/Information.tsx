import { defineComponent, ref } from 'vue'
import '../assets/css/Information.css'
import OrganizationStructure from './OrganizationStructure'

export default defineComponent({
  name: 'Information',
  setup() {
    const activeTab = ref('detail_peternakan')

    const tabs = [
      { id: 'detail_peternakan', label: 'Detail Peternakan' },
      { id: 'struktur_organisasi', label: 'Struktur Organisasi' },
      { id: 'lokasi_farm', label: 'Lokasi Farm' },
      { id: 'kontak', label: 'Hubungi Kami' }
    ]

    return () => (
      <div class="information-page bg-background flex-grow-1 d-flex flex-column" style={{ minHeight: 'calc(100vh - 80px)' }}>
        {/* Header Banner */}
        <div class="info-banner text-center py-5 position-relative overflow-hidden">
          <div class="position-absolute w-100 h-100 start-0 top-0 opacity-25" style={{ background: 'url("https://images.unsplash.com/photo-1516253593875-bd7ba053fbc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80") center/cover no-repeat' }}></div>
          <div class="container position-relative z-1 py-4 text-white">
            <h1 class="display-4 fw-bold mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>Informasi Peternakan</h1>
            <p class="lead mb-0 max-w-2xl mx-auto text-light">Kenali lebih dekat Sah Hai Agro Farm, mulai dari profil peternakan, akses peta, hingga struktur organisasi kami.</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div class="info-nav-container sticky-top bg-white shadow-sm border-bottom z-2" style={{ top: '70px' }}>
          <div class="container">
            <ul class="nav nav-pills info-nav py-3 flex-nowrap overflow-auto hide-scrollbar gap-2 justify-content-md-center">
              {tabs.map(tab => (
                <li class="nav-item flex-shrink-0" key={tab.id}>
                  <button 
                    class={["nav-link rounded-pill px-4 py-2 transition-all fw-medium border-0 cursor-pointer", activeTab.value === tab.id ? "active bg-primary text-white" : "bg-light text-secondary hover-bg-light"]}
                    style={activeTab.value === tab.id ? { backgroundColor: '#283618' } : {}}
                    onClick={() => activeTab.value = tab.id}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tab Content */}
        <div class="info-content-container container py-5 my-3 flex-grow-1">
          {activeTab.value === 'detail_peternakan' && (
            <div class="fade-in-up">
              <div class="row g-5 align-items-center mb-5">
                <div class="col-12 col-lg-6">
                  <h2 class="fw-bold mb-4" style={{ fontFamily: "'Outfit', sans-serif", color: '#283618' }}>Tentang Sah Hai Agro Farm</h2>
                  <p class="text-secondary mb-4" style={{ lineHeight: '1.8' }}>
                    Sah Hai Agro Farm adalah peternakan domba modern yang terintegrasi dengan perkebunan berbasis teknologi. 
                    Kami berfokus pada pembibitan, penggemukan, dan penyediaan pakan berkualitas secara cerdas. 
                    Dengan komitmen pada keberlanjutan dan kesehatan hewan, peternakan kami selalu terdepan dalam mutu.
                  </p>
                  <ul class="list-unstyled d-flex flex-column gap-4 mb-0">
                    <li class="d-flex align-items-start gap-3">
                      <div class="bg-primary-light rounded-circle p-2 mt-1" style={{ color: '#283618' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      </div>
                      <div>
                        <h6 class="fw-bold text-dark mb-1">Kapasitas Peternakan Besar</h6>
                        <p class="text-secondary m-0 text-sm">Fasilitas kandang luas dan modern untuk pemeliharaan populasi secara intensif dengan rekam medis digital.</p>
                      </div>
                    </li>
                    <li class="d-flex align-items-start gap-3">
                      <div class="bg-primary-light rounded-circle p-2 mt-1" style={{ color: '#283618' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      </div>
                      <div>
                        <h6 class="fw-bold text-dark mb-1">Manajemen Pakan Presisi</h6>
                        <p class="text-secondary m-0 text-sm">Menggunakan pakan campuran bernutrisi yang diformulasikan khusus (konsentrat & ampas pelengkap).</p>
                      </div>
                    </li>
                    <li class="d-flex align-items-start gap-3">
                      <div class="bg-primary-light rounded-circle p-2 mt-1" style={{ color: '#283618' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      </div>
                      <div>
                        <h6 class="fw-bold text-dark mb-1">Monitoring Kesehatan Rutin</h6>
                        <p class="text-secondary m-0 text-sm">Penjadwalan vaksin, vitamin, dan pemotongan kuku secara teratur yang tersinkronasi ke dalam sistem Farmease.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="col-12 col-lg-6">
                  <div class="position-relative rounded-4 justify-content-center d-flex overflow-hidden shadow-lg p-2 bg-white border">
                    <img src="https://images.unsplash.com/photo-1484069560501-87d72b0c3669?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Sah Hai Agro Farm Kandang" class="img-fluid rounded-3 object-fit-cover w-100" style={{ height: '420px' }} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab.value === 'struktur_organisasi' && (
            <div class="fade-in-up">
              <OrganizationStructure />
            </div>
          )}

          {activeTab.value === 'lokasi_farm' && (
            <div class="fade-in-up">
              <div class="text-center mb-5">
                <h2 class="fw-bold mb-3" style={{ fontFamily: "'Outfit', sans-serif", color: '#283618' }}>Lokasi & Peta Akses</h2>
                <p class="text-secondary max-w-2xl mx-auto">Posisi kandang dan fasilitas Sah Hai Agro Farm terpusat, memudahkan akses logistik maupun pemantauan.</p>
              </div>
              <div class="row g-4 mb-4">
                <div class="col-12 col-lg-8">
                  <div class="card border-0 shadow-sm rounded-4 overflow-hidden h-100 p-2">
                    <div class="bg-light rounded-3 w-100 h-100 d-flex align-items-center justify-content-center" style={{ minHeight: '400px', border: '1px dashed #ccc' }}>
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15862.61869818815!2d106.822815!3d-6.309033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1e018619bc5%3A0x86ea892b1a1ddf3!2sSouth%20Jakarta%2C%20South%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1711283627000!5m2!1sen!2sid"
                        width="100%" 
                        height="100%" 
                        style={{ border: 0, minHeight: '400px' }} 
                        allowfullscreen={false} 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                        class="rounded-3"
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-4 d-flex flex-column gap-4">
                  <div class="card border-0 shadow-sm rounded-4 p-4 h-100">
                    <h5 class="fw-bold mb-4 text-dark">Alamat Farm</h5>
                    <div class="d-flex align-items-start gap-3 mb-4">
                      <div class="bg-primary-light rounded-circle p-2" style={{ color: '#283618' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                      </div>
                      <div>
                        <h6 class="fw-bold text-dark mb-1">Kantor & Peternakan</h6>
                        <p class="text-secondary m-0 text-sm">Jl. Raya Hijau Agro No. 88, Kawasan Pertanian Terpadu, Jawa Barat, 40111</p>
                      </div>
                    </div>
                    <div class="d-flex align-items-start gap-3 mb-4">
                      <div class="bg-primary-light rounded-circle p-2" style={{ color: '#283618' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                      </div>
                      <div>
                        <h6 class="fw-bold text-dark mb-1">Jam Operasional</h6>
                        <p class="text-secondary m-0 text-sm">Senin - Jumat: 08:00 - 17:00<br/>Sabtu: 08:00 - 13:00</p>
                      </div>
                    </div>
                    <a href="https://maps.google.com" target="_blank" class="btn rounded-pill w-100 fw-medium mt-auto text-white" style={{ backgroundColor: '#283618' }}>Buka di Google Maps</a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab.value === 'kontak' && (
            <div class="fade-in-up max-w-4xl mx-auto">
              <div class="text-center mb-5">
                <h2 class="fw-bold mb-3" style={{ fontFamily: "'Outfit', sans-serif", color: '#283618' }}>Hubungi Kami</h2>
                <p class="text-secondary">Punya pertanyaan seputar peternakan, kemitraan, atau ingin mengunjungi farm kami secara langsung?</p>
              </div>
              <div class="row g-4 justify-content-center">
                <div class="col-12 col-md-4">
                  <div class="card border-0 shadow-sm rounded-4 p-4 text-center h-100 hover-card">
                    <div class="bg-primary-light rounded-circle p-3 d-inline-flex mx-auto mb-3" style={{ color: '#283618' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                    </div>
                    <h5 class="fw-bold text-dark mb-2">Pusat Bantuan</h5>
                    <p class="text-secondary mb-0">+62 811-2345-6789<br/>(Melayani chat & panggilan)</p>
                  </div>
                </div>
                <div class="col-12 col-md-4">
                  <div class="card border-0 shadow-sm rounded-4 p-4 text-center h-100 hover-card">
                    <div class="bg-primary-light rounded-circle p-3 d-inline-flex mx-auto mb-3" style={{ color: '#283618' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                    </div>
                    <h5 class="fw-bold text-dark mb-2">Email Bisnis</h5>
                    <p class="text-secondary mb-0">info@sahhaiagro.com<br/>partnership@sahhaiagro.com</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
})
