import { defineComponent, ref, computed, onMounted } from 'vue';
import Typography from '@/shared/ui/Typography';
import Badge from '@/shared/ui/Badge';
import { userSession, cageSession } from '@/store/navigation';

export default defineComponent({
  name: 'RiwayatView',
  setup() {
    const filterCategory = ref<string>('SEMUA');
    const searchVal = ref<string>('');
    const listRecords = ref<any[]>([]);

    const exporting = ref(false);
    const exportProgress = ref(0);
    const exportSuccess = ref(false);

    const categories = ['SEMUA', 'PAKAN', 'KAWIN', 'LAHIR', 'SEHAT', 'KOTORAN'];

    const loadRecords = () => {
      try {
        const stored = localStorage.getItem('ovis_riwayat_records');
        if (stored) {
          listRecords.value = JSON.parse(stored);
        } else {
          const defaults = [
            {
              id: 'R-4091',
              date: new Intl.DateTimeFormat('id-ID', { dateStyle: 'short' }).format(new Date()),
              time: '08:15 WIB',
              category: 'PAKAN',
              operator: 'Muhammad Hamidy',
              details: JSON.stringify({ ternakId: 'KELOMPOK KANDANG A', jenis: 'Silase Hijauan', qty: '12', unit: 'kg', note: 'Pakan pagi bernutrisi tinggi.' })
            },
            {
              id: 'R-3021',
              date: new Intl.DateTimeFormat('id-ID', { dateStyle: 'short' }).format(new Date()),
              time: '09:30 WIB',
              category: 'SEHAT',
              operator: 'Muhammad Hamidy',
              details: JSON.stringify({ ternakId: 'D-004', diagnosis: 'Pencegahan cacingan', obat: 'Pemberian Obat Cacing', note: 'Diberikan secara oral dosis 5ml.' })
            },
            {
              id: 'R-9012',
              date: new Intl.DateTimeFormat('id-ID', { dateStyle: 'short' }).format(new Date(Date.now() - 86400000)),
              time: '14:20 WIB',
              category: 'KAWIN',
              operator: 'Siti Aminah',
              details: JSON.stringify({ betinaId: 'D-002', pejantanId: 'D-001', jenisPerkawinan: 'Alami (Intra-kandang)', note: 'Pengawasan sukses.' })
            },
            {
              id: 'R-7023',
              date: new Intl.DateTimeFormat('id-ID', { dateStyle: 'short' }).format(new Date(Date.now() - 172800000)),
              time: '10:00 WIB',
              category: 'LAHIR',
              operator: 'Muhammad Hamidy',
              details: JSON.stringify({ indukId: 'D-006', jumlahCempe: 'Kembar Dua (2 Ekor)', kondisi: 'Sehat & Lincah', note: 'Berat lahir rata-rata 2.1kg.' })
            },
            {
              id: 'R-5044',
              date: new Intl.DateTimeFormat('id-ID', { dateStyle: 'short' }).format(new Date(Date.now() - 259200000)),
              time: '16:00 WIB',
              category: 'KOTORAN',
              operator: 'Muhammad Hamidy',
              details: JSON.stringify({ kandangCode: 'A', volume: '3 Karung (approx 45kg)', kondisi: 'Kering/Normal (Bagus)', note: 'Siap difermentasi untuk pupuk.' })
            }
          ];
          localStorage.setItem('ovis_riwayat_records', JSON.stringify(defaults));
          listRecords.value = defaults;
        }
      } catch (err) {
        console.error('Failed to load history:', err);
      }
    };

    onMounted(loadRecords);

    const filteredRecords = computed(() => listRecords.value.filter(rec => {
      const matchesCategory = filterCategory.value === 'SEMUA' || rec.category === filterCategory.value;
      const q = searchVal.value.toLowerCase().trim();
      const matchesSearch = !q || rec.id.toLowerCase().includes(q) || rec.operator.toLowerCase().includes(q) || rec.details.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    }));

    const summaryCards = computed(() => [
      { label: 'Total Log', value: listRecords.value.length, tone: 'primary' },
      { label: 'Kandang Aktif', value: cageSession.value?.code || 'A', tone: 'success' },
      { label: 'Operator Aktif', value: userSession.value?.name || 'Muhammad Hamidy', tone: 'warning' },
      { label: 'Filter Aktif', value: filterCategory.value, tone: 'light' },
    ]);

    const triggerExport = () => {
      exporting.value = true;
      exportProgress.value = 0;
      exportSuccess.value = false;

      const interval = setInterval(() => {
        exportProgress.value += 20;
        if (exportProgress.value >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            exporting.value = false;
            exportSuccess.value = true;
            setTimeout(() => {
              exportSuccess.value = false;
            }, 3000);
          }, 400);
        }
      }, 300);
    };

    const parseDetails = (category: string, detailsJson: string) => {
      try {
        const obj = JSON.parse(detailsJson);
        if (category === 'PAKAN') return `Target: ${obj.ternakId || 'N/A'} • Pakan: ${obj.jenis || 'N/A'} • ${obj.qty || '0'} ${obj.unit || 'kg'}`;
        if (category === 'KAWIN') return `Indukan: ${obj.betinaId || 'N/A'} x Pejantan: ${obj.pejantanId || 'N/A'} • Metode: ${obj.jenisPerkawinan || 'Alami'}`;
        if (category === 'LAHIR') return `Indukan: ${obj.indukId || 'N/A'} • Jumlah: ${obj.jumlahCempe || '1 Ekor'} • Kondisi: ${obj.kondisi || 'Sehat'}`;
        if (category === 'SEHAT') return `Target: ${obj.ternakId || 'N/A'} • Tindakan: ${obj.obat || 'N/A'} • Gejala: ${obj.diagnosis || '-'}`;
        if (category === 'KOTORAN') return `Kandang: ${obj.kandangCode || 'A'} • Hasil: ${obj.volume || '0'} • Kondisi: ${obj.kondisi || 'Normal'}`;
        return detailsJson;
      } catch (err) {
        return detailsJson;
      }
    };

    return () => (
      <div class="animate-fade-in">
        <div class="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3 mb-4 py-2 border-bottom">
          <div>
            <div class="d-flex align-items-center gap-2">
              <img src="/icon/statistic.png" alt="Riwayat" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
              <Typography variant="h3" weight="extrabold" className="m-0 text-almond-beige">Riwayat Aktivitas Kandang</Typography>
            </div>
            <Typography variant="p" size="text-xs" color="secondary" className="m-0">Log audit lengkap untuk kandang {cageSession.value?.code || 'A'} dan operator yang sedang bertugas</Typography>
          </div>

          <div class="d-flex gap-2 flex-wrap">
            <button type="button" class="btn btn-outline-secondary rounded-pill px-4 py-2 fw-bold text-xs" onClick={loadRecords}>🔄 Refresh Log</button>
            <button type="button" class="btn py-2 px-4 rounded-pill text-white border-0 fw-bold text-xs shadow-sm" style={{ backgroundColor: 'var(--color-primary)' }} onClick={triggerExport} disabled={exporting.value}>📥 Ekspor Laporan Excel</button>
          </div>
        </div>

        <div class="row g-3 mb-4">
          {summaryCards.value.map(card => (
            <div class="col-6 col-xl-3" key={card.label}>
              <div class="bg-white rounded-4 border shadow-sm p-3 h-100">
                <Typography variant="span" size="text-xs" className="text-secondary text-uppercase fw-bold d-block">{card.label}</Typography>
                <Typography variant="p" weight="extrabold" className="m-0 text-truncate">{card.value}</Typography>
              </div>
            </div>
          ))}
        </div>

        {exporting.value && (
          <div class="alert alert-info p-4 rounded-4 border-0 mb-4 animate-fade-in d-flex flex-column gap-2" style={{ backgroundColor: 'var(--color-surface-container)', border: '1px solid var(--color-outline-variant) !important' }}>
            <h6 class="fw-bold mb-1">⏳ Sedang Mengekspor Laporan...</h6>
            <div class="progress rounded-pill bg-light" style={{ height: '10px' }}>
              <div class="progress-bar rounded-pill" style={{ width: `${exportProgress.value}%`, backgroundColor: 'var(--color-primary)', transition: 'width 0.3s ease' }}></div>
            </div>
            <span class="text-xs text-muted">Menyusun baris data dan men-generate berkas spreadsheet (.xlsx)...</span>
          </div>
        )}

        {exportSuccess.value && (
          <div class="alert alert-success p-3 rounded-4 border-0 mb-4 animate-fade-in small font-semibold" style={{ backgroundColor: 'var(--color-primary-fixed)', color: 'var(--color-primary)' }}>
            🎉 Laporan berhasil diekspor! Berkas <strong>OvisManage_Kandang_{cageSession.value?.code || 'A'}_Laporan.xlsx</strong> siap diunduh.
          </div>
        )}

        <div class="bg-white rounded-5 border shadow-sm p-4 mb-4">
          <div class="row g-3 align-items-center">
            <div class="col-lg-4">
              <label class="form-label-custom mb-1">Cari Kunci Log</label>
              <div class="position-relative">
                <img src="/icon/search.png" alt="Cari" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px', objectFit: 'contain', opacity: 0.65 }} />
                <input
                  type="text"
                  class="form-control rounded-4 py-2.5 ps-5 bg-light border-0"
                  style={{ fontSize: '0.8rem' }}
                  placeholder="ID Log, nama operator, kata kunci..."
                  value={searchVal.value}
                  onInput={(e) => searchVal.value = (e.target as HTMLInputElement).value}
                />
              </div>
            </div>

            <div class="col-lg-8">
              <label class="form-label-custom mb-1 d-block">Saring Kategori</label>
              <div class="d-flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    type="button"
                    key={cat}
                    class={['btn btn-sm rounded-pill px-3 py-1.5 fw-bold text-xs transition-all', filterCategory.value === cat ? 'btn-primary-custom shadow-sm' : 'btn-light border text-secondary']}
                    onClick={() => filterCategory.value = cat}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div class="row g-3">
          {filteredRecords.value.length === 0 ? (
            <div class="col-12">
              <div class="bg-white rounded-5 border shadow-sm p-5 text-center text-muted">Belum ada riwayat aktivitas yang tercatat untuk pencarian ini</div>
            </div>
          ) : (
            filteredRecords.value.map(rec => (
              <div class="col-12 col-lg-6" key={rec.id}>
                <div class="bg-white rounded-5 border shadow-sm p-4 h-100">
                  <div class="d-flex justify-content-between align-items-start gap-3 mb-3">
                    <div>
                      <Typography variant="span" size="text-xs" weight="bold" className="text-secondary text-uppercase d-block">{rec.id}</Typography>
                      <Typography variant="h5" weight="extrabold" className="m-0">{rec.date}</Typography>
                      <Typography variant="span" className="text-muted" style={{ fontSize: '0.75rem' }}>{rec.time}</Typography>
                    </div>
                    <Badge
                      variant={rec.category === 'PAKAN' ? 'success' : rec.category === 'KAWIN' ? 'primary' : rec.category === 'LAHIR' ? 'warning' : rec.category === 'SEHAT' ? 'danger' : 'secondary'}
                      style={{ fontSize: '0.65rem' }}
                    >
                      {rec.category}
                    </Badge>
                  </div>

                  <div class="d-flex flex-wrap gap-2 mb-3">
                    <Badge variant="secondary" className="px-3 py-1">👤 {rec.operator}</Badge>
                    <Badge variant="secondary" className="px-3 py-1">🏷️ Kandang {cageSession.value?.code || 'A'}</Badge>
                  </div>

                  <div class="rounded-4 border p-3 bg-light mb-3">
                    <Typography variant="p" className="m-0" size="text-sm">{parseDetails(rec.category, rec.details)}</Typography>
                  </div>

                  <Typography variant="span" size="text-xs" className="text-secondary d-block">Catatan JSON</Typography>
                  <pre class="bg-dark text-white rounded-4 p-3 mb-0" style={{ fontSize: '0.72rem', overflowX: 'auto' }}>{rec.details}</pre>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
});
