import { defineComponent, ref } from 'vue';
import Typography from '../../../components/ui/Typography';
import CustomSelect from '../../../components/ui/Select';

const riwayatData = [
  { id: 'C-001', tanggal: '2026-03-25', ternak: 'D-004', kategori: 'Kesehatan', deskripsi: 'Vaksinasi PMK dosis ke-2', petugas: 'Dr. Hendra' },
  { id: 'C-002', tanggal: '2026-03-24', ternak: 'Semua', kategori: 'Pakan', deskripsi: 'Pemberian rumput segar 80kg sesi pagi', petugas: 'Adi' },
  { id: 'C-003', tanggal: '2026-03-23', ternak: 'D-002', kategori: 'Reproduksi', deskripsi: 'Konfirmasi hamil trimester 2, estimasi lahir 20 April', petugas: 'Dr. Hendra' },
  { id: 'C-004', tanggal: '2026-03-22', ternak: 'D-006', kategori: 'Reproduksi', deskripsi: 'Kawin alam dengan D-010', petugas: 'Budi' },
  { id: 'C-005', tanggal: '2026-03-20', ternak: 'D-001', kategori: 'Produksi', deskripsi: 'Penjualan 1 ekor, berat 42kg', petugas: 'Sari' },
  { id: 'C-006', tanggal: '2026-03-19', ternak: 'D-004', kategori: 'Kesehatan', deskripsi: 'Pengobatan diare: antibiotik + oralit', petugas: 'Dr. Hendra' },
];

const kategoriColor: Record<string, string> = {
  Kesehatan: '#283618',
  Pakan:     '#606C38',
  Reproduksi:'#DDA15E',
  Produksi:  '#BC6C25',
};

export default defineComponent({
  name: 'RiwayatView',
  setup() {
    const filterKategori = ref('');

    const filtered = () => riwayatData.filter(r =>
      !filterKategori.value || r.kategori === filterKategori.value
    );

    return () => (
      <div class="p-3 p-md-4 d-flex flex-column gap-4">

        {/* Filter */}
        <div class="d-flex gap-3 align-items-center flex-wrap">
          <Typography variant="span" weight="semibold" size="text-sm" color="kombu-green">
            Filter Kategori:
          </Typography>
          <div style={{ width: '200px' }}>
            <CustomSelect
              modelValue={filterKategori.value}
              options={['Kesehatan', 'Pakan', 'Reproduksi', 'Produksi']}
              placeholder="Semua Kategori"
              onUpdate:modelValue={(v: string) => filterKategori.value = v}
            />
          </div>
          {filterKategori.value && (
            <button
              class="btn btn-sm"
              style={{ fontFamily: "'Nunito', sans-serif", color: '#BC6C25', border: '1px solid #DDA15E', borderRadius: '0.5rem' }}
              onClick={() => filterKategori.value = ''}
            >
              ✕ Reset
            </button>
          )}
        </div>

        {/* List */}
        <div class="d-flex flex-column gap-3">
          {filtered().map(item => (
            <div
              key={item.id}
              class="bg-white rounded-4 border shadow-sm p-3 p-md-4 d-flex gap-3 align-items-start"
              style={{ borderLeft: `4px solid ${kategoriColor[item.kategori]}` }}
            >
              {/* Badge */}
              <div class="flex-shrink-0 pt-1">
                <span
                  class="badge rounded-pill px-2 py-1"
                  style={{
                    backgroundColor: kategoriColor[item.kategori] + '22',
                    color: kategoriColor[item.kategori],
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.72rem',
                  }}
                >
                  {item.kategori}
                </span>
              </div>
              {/* Content */}
              <div class="flex-fill">
                <Typography variant="p" size="text-sm" weight="semibold" className="mb-1">
                  {item.deskripsi}
                </Typography>
                <div class="d-flex flex-wrap gap-3">
                  <Typography variant="span" size="text-xs" className="text-secondary">
                    🐑 Ternak: <strong>{item.ternak}</strong>
                  </Typography>
                  <Typography variant="span" size="text-xs" className="text-secondary">
                    👤 Petugas: {item.petugas}
                  </Typography>
                </div>
              </div>
              {/* Date */}
              <div class="flex-shrink-0 text-end">
                <Typography variant="span" size="text-xs" weight="semibold" className="text-secondary">
                  {item.tanggal}
                </Typography>
              </div>
            </div>
          ))}

          {filtered().length === 0 && (
            <div class="text-center py-5 text-secondary">
              <Typography variant="p">Tidak ada riwayat ditemukan.</Typography>
            </div>
          )}
        </div>

        <Typography variant="p" size="text-xs" className="text-secondary text-end mb-0">
          {filtered().length} dari {riwayatData.length} catatan ditampilkan
        </Typography>
      </div>
    );
  }
});
