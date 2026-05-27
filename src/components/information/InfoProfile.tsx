import { defineComponent } from 'vue';
import Typography from '@/components/ui/peternakan/Typography';

export default defineComponent({
  name: 'InfoProfile',
  setup() {
    const stats = [
      { label: 'Jumlah Ternak', value: '53' },
      { label: 'Jumlah Kawin', value: '15' },
      { label: 'Jumlah Jantan', value: '32' },
      { label: 'Jumlah Betina', value: '21' }
    ];

    const sheepTypes = [
      {
        title: 'Domba Dorper - Penghasil Daging Unggul',
        desc: 'Domba pedaging dari Afrika Selatan dengan pertumbuhan cepat, tahan cuaca, dan tidak perlu dicukur.',
        img: '/img/dorper.png'
      },
      {
        title: 'Domba Garut - Domba Lokal Bernilai Budaya',
        desc: 'Domba asli Indonesia dengan tubuh besar dan tanduk khas, sering digunakan dalam tradisi adu domba.',
        img: '/img/garut.png'
      },
      {
        title: 'Domba Cross Garut - Hasil Persilangan Unggul',
        desc: 'Perpaduan Garut dengan jenis lain untuk menghasilkan domba yang lebih produktif dan berkualitas.',
        img: '/img/cross_garut.png'
      },
      {
        title: 'Domba Merino - Penghasil Wol Berkualitas Tinggi',
        desc: 'Domba penghasil wol halus bernilai tinggi yang banyak digunakan di industri tekstil.',
        img: '/img/merino.png'
      }
    ];

    return () => (
      <div class="info-profile fade-in-up">
        {/* Banner Section */}
        <div class="text-center mb-5">
           <h1 class="fw-bold mb-3" style={{ color: 'var(--color-primary)' }}>Informasi Peternakan</h1>
           <p class="text-secondary">Menyajikan data dan informasi terkini seputar kondisi serta perkembangan peternakan kami.</p>
        </div>

        {/* Charts Side-by-Side */}
        <div class="row g-4 mb-5">
           <div class="col-12 col-md-6">
              <div class="bg-white p-4 rounded-4 shadow-sm border" style={{ height: '300px' }}>
                 <div class="w-100 h-100 d-flex align-items-center justify-content-center text-secondary border border-dashed rounded">
                    [ Line Chart Visualization 1 ]
                 </div>
              </div>
           </div>
           <div class="col-12 col-md-6">
              <div class="bg-white p-4 rounded-4 shadow-sm border" style={{ height: '300px' }}>
                 <div class="w-100 h-100 d-flex align-items-center justify-content-center text-secondary border border-dashed rounded">
                    [ Line Chart Visualization 2 ]
                 </div>
              </div>
           </div>
        </div>

        {/* Stats Row */}
        <div class="row g-3 mb-5">
           {stats.map(s => (
             <div class="col-6 col-md-3" key={s.label}>
                <div class="p-3 rounded-4 text-center text-white" style={{ backgroundColor: 'var(--color-secondary)' }}>
                   <div class="display-6 fw-bold mb-1">{s.value}</div>
                   <div class="small opacity-75">{s.label}</div>
                </div>
             </div>
           ))}
        </div>

        {/* Sheep Types */}
        <div class="mt-5">
           <div class="divider-title bg-beige-dark p-2 rounded-3 mb-4" style={{ backgroundColor: 'var(--color-secondary)' }}>
              <h2 class="fs-5 fw-bold text-white m-0 px-3">Mengenal Jenis Domba</h2>
           </div>

           <div class="d-flex flex-column gap-4">
              {sheepTypes.map(type => (
                <div class="sheep-card bg-beige-light p-4 rounded-4 d-flex flex-column flex-md-row align-items-center gap-4 shadow-sm" style={{ backgroundColor: 'var(--color-primary-fixed)' }} key={type.title}>
                   <div class="grow">
                      <h3 class="fs-5 fw-bold mb-2" style={{ color: 'var(--color-primary)' }}>{type.title}</h3>
                      <p class="m-0 text-secondary">{type.desc}</p>
                   </div>
                   <div class="sheep-img-box bg-white rounded-3 overflow-hidden shadow-sm" style={{ width: '100%', maxWidth: '200px', height: '120px' }}>
                      <img src={type.img} alt={type.title} class="w-100 h-100 object-fit-cover" />
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    );
  }
});
