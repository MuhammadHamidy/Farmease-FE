import { defineComponent, ref } from 'vue';
import Typography from '../../../components/ui/Typography';
import CustomInput from '../../../components/ui/Input';
import CustomSelect from '../../../components/ui/Select';

const ternakData = [
  { id: 'D-001', nama: 'Domba 001', jenis: 'Garut', umur: '2 thn', status: 'Sehat', berat: '42 kg' },
  { id: 'D-002', nama: 'Domba 002', jenis: 'Merino', umur: '3 thn', status: 'Hamil', berat: '38 kg' },
  { id: 'D-003', nama: 'Domba 003', jenis: 'Dorper', umur: '1 thn', status: 'Sehat', berat: '30 kg' },
  { id: 'D-004', nama: 'Domba 004', jenis: 'Garut', umur: '4 thn', status: 'Sakit', berat: '40 kg' },
  { id: 'D-005', nama: 'Domba 005', jenis: 'Merino', umur: '2 thn', status: 'Sehat', berat: '35 kg' },
  { id: 'D-006', nama: 'Domba 006', jenis: 'Garut', umur: '3 thn', status: 'Hamil', berat: '37 kg' },
];

const statusColor: Record<string, string> = {
  'Sehat': '#283618',
  'Hamil': '#DDA15E',
  'Sakit': '#BC6C25',
};

export default defineComponent({
  name: 'TernakView',
  setup() {
    const search = ref('');
    const filterStatus = ref('');

    const filtered = () => ternakData.filter(t => {
      const q = search.value.toLowerCase();
      const matchSearch = !q || t.nama.toLowerCase().includes(q) || t.id.toLowerCase().includes(q) || t.jenis.toLowerCase().includes(q);
      const matchStatus = !filterStatus.value || t.status === filterStatus.value;
      return matchSearch && matchStatus;
    });

    return () => (
      <div class="p-3 p-md-4 d-flex flex-column gap-4">

        {/* ── Search & filter ────────────────────────── */}
        <div class="row g-2 align-items-center">
          <div class="col-12 col-sm-7">
            <CustomInput
              modelValue={search.value}
              placeholder="Cari ternak (ID, nama, jenis)..."
              onUpdate:modelValue={(v: string) => search.value = v}
            />
          </div>
          <div class="col-12 col-sm-3">
            <CustomSelect
              modelValue={filterStatus.value}
              options={['Sehat', 'Hamil', 'Sakit']}
              placeholder="Semua Status"
              onUpdate:modelValue={(v: string) => filterStatus.value = v}
            />
          </div>
          <div class="col-12 col-sm-2">
            <button
              class="btn w-100 fw-bold rounded-3 text-white"
              style={{ backgroundColor: '#283618', fontFamily: "'Nunito', sans-serif" }}
              onClick={() => { search.value = ''; filterStatus.value = ''; }}
            >
              Reset
            </button>
          </div>
        </div>

        {/* ── Table/list ────────────────────────────── */}
        <div class="bg-white rounded-4 border shadow-sm overflow-hidden">
          {/* Header */}
          <div
            class="d-none d-md-grid px-4 py-2 fw-bold"
            style={{
              gridTemplateColumns: '80px 1fr 100px 80px 120px 80px',
              backgroundColor: '#FEFAE0',
              fontFamily: "'Nunito', sans-serif",
              fontSize: '0.8rem',
              color: '#606C38',
              letterSpacing: '0.03em',
              textTransform: 'uppercase',
            }}
          >
            <span>ID</span>
            <span>Nama</span>
            <span>Jenis</span>
            <span>Umur</span>
            <span>Status</span>
            <span>Berat</span>
          </div>

          {filtered().length === 0 ? (
            <div class="text-center py-5 text-secondary">
              <Typography variant="p" className="mb-0">Tidak ada data ditemukan.</Typography>
            </div>
          ) : (
            filtered().map((t, i) => (
              <div
                key={t.id}
                class="px-4 py-3 d-flex flex-column d-md-grid align-items-center border-bottom"
                style={{
                  gridTemplateColumns: '80px 1fr 100px 80px 120px 80px',
                  backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#FAFAFA',
                  transition: 'background 0.15s',
                }}
              >
                <Typography variant="span" size="text-sm" weight="bold" color="dark-olive-green" className="font-monospace">{t.id}</Typography>
                <Typography variant="span" size="text-sm" weight="semibold">{t.nama}</Typography>
                <Typography variant="span" size="text-sm" className="text-secondary">{t.jenis}</Typography>
                <Typography variant="span" size="text-sm" className="text-secondary">{t.umur}</Typography>
                <span>
                  <span
                    class="badge rounded-pill px-3 py-1"
                    style={{
                      backgroundColor: statusColor[t.status] + '22',
                      color: statusColor[t.status],
                      fontFamily: "'Nunito', sans-serif",
                      fontWeight: 700,
                      fontSize: '0.78rem',
                    }}
                  >
                    {t.status}
                  </span>
                </span>
                <Typography variant="span" size="text-sm" weight="semibold">{t.berat}</Typography>
              </div>
            ))
          )}
        </div>

        <Typography variant="p" size="text-xs" className="text-secondary text-end mb-0">
          Menampilkan {filtered().length} dari {ternakData.length} ternak
        </Typography>
      </div>
    );
  }
});
