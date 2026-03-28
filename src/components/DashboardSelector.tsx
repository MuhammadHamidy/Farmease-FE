import { defineComponent } from 'vue'
import { currentRoute } from '../store/navigation'
import Typography from './ui/Typography'

export default defineComponent({
  name: 'DashboardSelector',
  setup() {
    return () => (
      <div class="container py-5 my-5 flex-grow-1 d-flex flex-column justify-content-center align-items-center">
        <div class="text-center mb-5">
          <Typography variant="h1" color="kombu-green" className="display-5 fw-bold mb-3">Pilih Dashboard Anda</Typography>
          <Typography variant="p" className="text-secondary lead max-w-2xl mx-auto">
            Pilih area operasional Anda di Sah Hai Agro Farm untuk memulai pemantauan dan manajemen harian.
          </Typography>
        </div>

        <div class="row g-4 justify-content-center w-100 max-w-4xl">
          {/* Peternakan Card */}
          <div class="col-12 col-md-6">
            <div 
              class="card h-100 border-0 shadow-sm rounded-4 cursor-pointer overflow-hidden transition-all bg-white"
              style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer' }}
              onClick={() => { alert('Navigating to Peternakan Dashboard...'); currentRoute.value = 'peternakan' }}
              onMouseover={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.transform = 'translateY(-10px)';
                target.style.boxShadow = '0 20px 25px -5px #2836181A, 0 8px 10px -6px #2836181A';
              }}
              onMouseout={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.transform = 'translateY(0)';
                target.style.boxShadow = '0 0.125rem 0.25rem #00000013';
              }}
            >
              <div class="p-4 p-lg-5 d-flex flex-column align-items-center text-center h-100">
                <div 
                  class="rounded-circle d-flex align-items-center justify-content-center mb-4" 
                  style={{ width: '80px', height: '80px', backgroundColor: '#606C38' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" viewBox="0 0 24 24">
                    <path d="M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm4 0h-2v-2h2v2z"/>
                  </svg>
                </div>
                <Typography variant="h3" color="kombu-green" className="fw-bold mb-3">Peternakan</Typography>
                <Typography variant="p" className="text-secondary mb-0">
                  Akses modul manajemen domba, pemantauan kesehatan, penjadwalan pakan, dan laporan populasi lengkap.
                </Typography>
                <div class="mt-auto pt-4">
                  <span class="custom-btn btn-primary-solid rounded-pill px-4" style={{ backgroundColor: '#283618', color: 'white' }}>Buka Modul</span>
                </div>
              </div>
            </div>
          </div>

          {/* Perkebunan Card */}
          <div class="col-12 col-md-6">
            <div 
              class="card h-100 border-0 shadow-sm rounded-4 cursor-pointer overflow-hidden transition-all bg-white"
              style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer' }}
              onClick={() => { alert('Navigating to Perkebunan Dashboard...'); currentRoute.value = 'perkebunan' }}
              onMouseover={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.transform = 'translateY(-10px)';
                target.style.boxShadow = '0 20px 25px -5px #2836181A, 0 8px 10px -6px #2836181A';
              }}
              onMouseout={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.transform = 'translateY(0)';
                target.style.boxShadow = '0 0.125rem 0.25rem #00000013';
              }}
            >
              <div class="p-4 p-lg-5 d-flex flex-column align-items-center text-center h-100">
                <div 
                  class="rounded-circle d-flex align-items-center justify-content-center mb-4" 
                  style={{ width: '80px', height: '80px', backgroundColor: '#DDA15E' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" viewBox="0 0 24 24">
                    <path d="M12 21.05C12 21.05 18 16 18 10C18 6.69 15.31 4 12 4C8.69 4 6 6.69 6 10C6 16 12 21.05 12 21.05ZM12 7C13.66 7 15 8.34 15 10C15 11.66 13.66 13 12 13C10.34 13 9 11.66 9 10C9 8.34 10.34 7 12 7Z"/>
                    <path d="M7 21H17V23H7Z"/>
                  </svg>
                </div>
                <Typography variant="h3" color="kombu-green" className="fw-bold mb-3">Perkebunan</Typography>
                <Typography variant="p" className="text-secondary mb-0">
                  Akses modul manajemen lahan, pantau panen cerdas, jadwal penyiraman, dan inventaris perkebunan.
                </Typography>
                <div class="mt-auto pt-4">
                  <span class="custom-btn btn-primary-solid rounded-pill px-4" style={{ backgroundColor: '#283618', color: 'white' }}>Buka Modul</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
