import { defineComponent } from 'vue';
import StatCard from '../../../components/ui/StatCard';
import Typography from '../../../components/ui/Typography';
import '../../../assets/css/ui/StatCard.css';

export default defineComponent({
  name: 'DasborView',
  setup() {
    const jenisData = [
      { label: 'Garut', jumlah: 20, color: '#283618' },
      { label: 'Merino', jumlah: 12, color: '#BC6C25' },
      { label: 'Dorper', jumlah: 17, color: '#DDA15E' },
    ];
    const maxJumlah = Math.max(...jenisData.map(d => d.jumlah));

    return () => (
      <div class="p-3 p-md-4 d-flex flex-column gap-4">

        {/* ── Stat cards ─────────────────────────────── */}
        <div class="row g-3">
          <div class="col-12 col-sm-4">
            <StatCard label="Jumlah Domba" value="49" color="primary" />
          </div>
          <div class="col-12 col-sm-4">
            <StatCard label="Domba Sehat" value="43" sub="↑ dari bulan lalu" color="light" />
          </div>
          <div class="col-12 col-sm-4">
            <StatCard label="Dalam Perawatan" value="6" sub="3 sakit · 3 hamil" color="accent" />
          </div>
        </div>

        {/* ── Bar chart: Jenis Domba ─────────────────── */}
        <div class="bg-white rounded-4 border p-4 shadow-sm">
          <Typography variant="h3" weight="bold" color="kombu-green" className="mb-4 fs-5">
            Jenis Domba
          </Typography>
          <div class="d-flex align-items-end gap-4 justify-content-center" style={{ height: '180px' }}>
            {jenisData.map(item => (
              <div key={item.label} class="d-flex flex-column align-items-center gap-2 flex-fill">
                <Typography variant="span" size="text-xs" weight="bold" className="text-secondary">
                  {item.jumlah}
                </Typography>
                <div
                  class="rounded-top w-100 transition-all"
                  style={{
                    height: `${(item.jumlah / maxJumlah) * 140}px`,
                    backgroundColor: item.color,
                    maxWidth: '56px',
                    margin: '0 auto',
                  }}
                />
                <Typography variant="span" size="text-xs" weight="semibold" className="text-secondary text-center">
                  {item.label}
                </Typography>
              </div>
            ))}
          </div>
          <div class="d-flex align-items-center gap-2 mt-3">
            <div style={{ width:'12px', height:'12px', backgroundColor:'#283618', borderRadius:'2px'}} />
            <Typography variant="span" size="text-xs" className="text-secondary">Jumlah</Typography>
          </div>
        </div>

        {/* ── Kehamilan ringkasan ────────────────────── */}
        <div class="bg-white rounded-4 border p-4 shadow-sm">
          <Typography variant="h3" weight="bold" color="kombu-green" className="mb-3 fs-5">
            Jumlah Kehamilan
          </Typography>
          <div class="row g-3">
            {[
              { fase: 'Trimester 1', count: 2, color: '#DDA15E' },
              { fase: 'Trimester 2', count: 1, color: '#BC6C25' },
              { fase: 'Siap Melahirkan', count: 0, color: '#606C38' },
            ].map(item => (
              <div key={item.fase} class="col-4 text-center">
                <div class="rounded-3 p-3" style={{ backgroundColor: item.color + '22' }}>
                  <Typography variant="h4" weight="extrabold" size="text-3xl" className="m-0" style={{ color: item.color }}>
                    {item.count}
                  </Typography>
                  <Typography variant="p" size="text-xs" weight="semibold" className="mb-0 text-secondary">
                    {item.fase}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    );
  }
});
