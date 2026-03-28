import { defineComponent, ref } from 'vue'
import { currentRoute } from '../store/navigation'

export default defineComponent({
  name: 'Dashboard',
  setup() {
    // 'peternakan' | 'perkebunan'
    const activeTab = ref('peternakan')

    return () => (
      <div class="container py-5 my-4 flex-grow-1">
        {/* Header & Tabs */}
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-center mb-5 gap-4">
          <div>
            <h1 class="display-6 fw-bold mb-2" style={{ fontFamily: "'Outfit', sans-serif", color: '#283618' }}>
              Dasbor Utama
            </h1>
            <p class="text-secondary m-0">Pantau performa operasional Sah Hai Agro Farm secara real-time.</p>
          </div>
          
          <div class="bg-white p-1 rounded-pill shadow-sm border d-inline-flex">
            <button 
              onClick={() => activeTab.value = 'peternakan'}
              class={["btn rounded-pill px-4 py-2 fw-bold transition-all border-0", activeTab.value === 'peternakan' ? 'text-white shadow-sm' : 'text-secondary']}
              style={activeTab.value === 'peternakan' ? { backgroundColor: '#283618' } : {}}
            >
              Peternakan
            </button>
            <button 
              onClick={() => activeTab.value = 'perkebunan'}
              class={["btn rounded-pill px-4 py-2 fw-bold transition-all border-0", activeTab.value === 'perkebunan' ? 'text-white shadow-sm' : 'text-secondary']}
              style={activeTab.value === 'perkebunan' ? { backgroundColor: '#283618' } : {}}
            >
              Perkebunan
            </button>
          </div>
        </div>

        {/* Dashboard Content */}
        <div class="bg-white rounded-4 shadow-sm border p-4 p-md-5">
          {activeTab.value === 'peternakan' ? (
            <div class="dashboard-peternakan fade-in">
              <div class="d-flex justify-content-between align-items-center mb-4">
                <h3 class="fw-bold m-0" style={{ color: '#283618' }}>Statistik Populasi Domba</h3>
                <div class="d-flex gap-2">
                  <button 
                    class="btn btn-sm fw-bold px-3 rounded-pill text-white" 
                    style={{ backgroundColor: '#606C38' }}
                    onClick={() => currentRoute.value = 'peternakan'}
                  >
                    Buka Modul Pencatatan →
                  </button>
                  <span class="badge rounded-pill px-3 py-2 fw-medium" style={{ backgroundColor: '#2836181A', color: '#283618' }}>Bulan Ini</span>
                </div>
              </div>
              
              {/* Mockup Chart Area */}
              <div class="chart-mockup w-100 rounded-3 d-flex align-items-end justify-content-around p-4 border" style={{ height: '350px', backgroundColor: '#FEFAE0' }}>
                {/* CSS Bar Chart */}
                <div class="d-flex flex-column align-items-center gap-2 h-100 justify-content-end">
                  <div class="rounded-top w-100 transition-all" style={{ width: '40px', height: '40%', backgroundColor: '#606C38' }}></div>
                  <span class="text-xs fw-bold text-secondary">Jan</span>
                </div>
                <div class="d-flex flex-column align-items-center gap-2 h-100 justify-content-end">
                  <div class="rounded-top w-100 transition-all" style={{ width: '40px', height: '55%', backgroundColor: '#283618' }}></div>
                  <span class="text-xs fw-bold text-secondary">Feb</span>
                </div>
                <div class="d-flex flex-column align-items-center gap-2 h-100 justify-content-end">
                  <div class="rounded-top w-100 transition-all" style={{ width: '40px', height: '35%', backgroundColor: '#606C38' }}></div>
                  <span class="text-xs fw-bold text-secondary">Mar</span>
                </div>
                <div class="d-flex flex-column align-items-center gap-2 h-100 justify-content-end">
                  <div class="rounded-top w-100 transition-all" style={{ width: '40px', height: '80%', backgroundColor: '#283618' }}></div>
                  <span class="text-xs fw-bold text-secondary">Apr</span>
                </div>
                <div class="d-flex flex-column align-items-center gap-2 h-100 justify-content-end">
                  <div class="rounded-top w-100 transition-all" style={{ width: '40px', height: '65%', backgroundColor: '#DDA15E' }}></div>
                  <span class="text-xs fw-bold text-secondary">Mei</span>
                </div>
                <div class="d-flex flex-column align-items-center gap-2 h-100 justify-content-end">
                  <div class="rounded-top w-100 transition-all" style={{ width: '40px', height: '90%', backgroundColor: '#283618' }}></div>
                  <span class="text-xs fw-bold text-secondary">Jun</span>
                </div>
              </div>

              <div class="row g-4 mt-2">
                <div class="col-md-4">
                  <div class="p-4 rounded-4 border bg-white shadow-sm text-center">
                    <p class="text-secondary mb-1 fw-bold">Total Populasi</p>
                    <h2 class="fw-bolder m-0" style={{ color: '#283618' }}>1,240 <span class="fs-6 text-success">↑ 12%</span></h2>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="p-4 rounded-4 border bg-white shadow-sm text-center">
                    <p class="text-secondary mb-1 fw-bold">Domba Sehat</p>
                    <h2 class="fw-bolder m-0" style={{ color: '#283618' }}>1,180 <span class="fs-6 text-success">↑ 5%</span></h2>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="p-4 rounded-4 border bg-white shadow-sm text-center">
                    <p class="text-secondary mb-1 fw-bold">Dalam Perawatan</p>
                    <h2 class="fw-bolder m-0" style={{ color: '#DDA15E' }}>60 <span class="fs-6 text-danger">↓ 2%</span></h2>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div class="dashboard-perkebunan fade-in">
              <div class="d-flex justify-content-between align-items-center mb-4">
                <h3 class="fw-bold m-0" style={{ color: '#283618' }}>Pemantauan Panen Lahan</h3>
                <div class="d-flex gap-2">
                  <button 
                    class="btn btn-sm fw-bold px-3 rounded-pill text-white disabled" 
                    style={{ backgroundColor: '#BC6C25', opacity: 0.6 }}
                  >
                    Segera Hadir
                  </button>
                  <span class="badge rounded-pill px-3 py-2 fw-medium" style={{ backgroundColor: '#DDA15E26', color: '#DDA15E' }}>Kuartal Ini</span>
                </div>
              </div>
              
              {/* Mockup Line Chart Image / Area */}
              <div class="chart-mockup position-relative w-100 rounded-3 d-flex align-items-center justify-content-center overflow-hidden border" style={{ height: '350px', backgroundColor: '#FEFAE0' }}>
                {/* We use an image as a graphic line chart mockup */}
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                  <path d="M0,150 L0,80 Q50,40 100,70 T200,60 T300,90 T400,30 T500,50 L500,150 Z" style={{ fill: 'rgba(221, 161, 94, 0.2)' }}></path>
                  <path d="M0,80 Q50,40 100,70 T200,60 T300,90 T400,30 T500,50" style={{ fill: 'none', stroke: '#DDA15E', strokeWidth: '4' }}></path>
                  
                  {/* Data points */}
                  <circle cx="100" cy="70" r="4" fill="#283618" />
                  <circle cx="200" cy="60" r="4" fill="#283618" />
                  <circle cx="300" cy="90" r="4" fill="#283618" />
                  <circle cx="400" cy="30" r="4" fill="#283618" />
                </svg>
              </div>

              <div class="row g-4 mt-2">
                <div class="col-md-4">
                  <div class="p-4 rounded-4 border bg-white shadow-sm text-center">
                    <p class="text-secondary mb-1 fw-bold">Estimasi Panen</p>
                    <h2 class="fw-bolder m-0" style={{ color: '#283618' }}>4.5 Ton <span class="fs-6 text-success">↑ 8%</span></h2>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="p-4 rounded-4 border bg-white shadow-sm text-center">
                    <p class="text-secondary mb-1 fw-bold">Curah Hujan</p>
                    <h2 class="fw-bolder m-0" style={{ color: '#283618' }}>Normal</h2>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="p-4 rounded-4 border bg-white shadow-sm text-center">
                    <p class="text-secondary mb-1 fw-bold">Status Lahan</p>
                    <h2 class="fw-bolder m-0" style={{ color: '#283618' }}>Optimal</h2>
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
