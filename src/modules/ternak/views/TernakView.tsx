import { defineComponent, ref, computed } from 'vue';
import Typography from '@/shared/ui/Typography';
import CustomInput from '@/shared/ui/Input';
import CustomSelect from '@/shared/ui/Select';
import Badge, { type BadgeVariant } from '@/shared/ui/Badge';
import { selectedTernakId, userSession, cageSession } from '@/store/navigation';

const ternakData = [
  { id: 'D-001', nama: 'Domba 001', jenis: 'Garut', umur: '2 thn', status: 'Sehat', berat: '42 kg', notif: 1, cage: 'A' },
  { id: 'D-002', nama: 'Domba 002', jenis: 'Merino', umur: '3 thn', status: 'Hamil', berat: '38 kg', notif: 2, cage: 'A' },
  { id: 'D-003', nama: 'Domba 003', jenis: 'Dorper', umur: '1 thn', status: 'Sehat', berat: '30 kg', notif: 0, cage: 'B' },
  { id: 'D-004', nama: 'Domba 004', jenis: 'Garut', umur: '4 thn', status: 'Sakit', berat: '40 kg', notif: 1, cage: 'B' },
  { id: 'D-005', nama: 'Domba 005', jenis: 'Merino', umur: '2 thn', status: 'Sehat', berat: '35 kg', notif: 0, cage: 'C' },
  { id: 'D-006', nama: 'Domba 006', jenis: 'Garut', umur: '3 thn', status: 'Hamil', berat: '37 kg', notif: 1, cage: 'C' },
];

const statusColor: Record<string, BadgeVariant> = {
  Sehat: 'success',
  Hamil: 'warning',
  Sakit: 'danger',
};

export default defineComponent({
  name: 'TernakView',
  setup() {
    const search = ref('');
    const filterStatus = ref('');
    const isAddModalOpen = ref(false);
    const newDomba = ref({ id: '', nama: '', jenis: 'Garut', umur: '', berat: '', status: 'Sehat' });
    const activeCageCode = computed(() => cageSession.value?.code || 'A');

    const handleAddDomba = () => {
      ternakData.push({
        id: newDomba.value.id || `D-00${ternakData.length + 1}`,
        nama: newDomba.value.nama || 'Domba Baru',
        jenis: newDomba.value.jenis,
        umur: newDomba.value.umur ? `${newDomba.value.umur} thn` : '1 thn',
        status: newDomba.value.status,
        berat: newDomba.value.berat ? `${newDomba.value.berat} kg` : '30 kg',
        notif: 0,
        cage: cageSession.value?.code || 'A'
      });
      isAddModalOpen.value = false;
      newDomba.value = { id: '', nama: '', jenis: 'Garut', umur: '', berat: '', status: 'Sehat' };
    };

    const filtered = computed(() => ternakData.filter(t => {
      const q = search.value.toLowerCase();
      const matchSearch = !q || t.nama.toLowerCase().includes(q) || t.id.toLowerCase().includes(q) || t.jenis.toLowerCase().includes(q) || t.cage.toLowerCase().includes(q);
      const matchStatus = !filterStatus.value || t.status === filterStatus.value;
      const matchCage = t.cage === activeCageCode.value;
      return matchSearch && matchStatus && matchCage;
    }));

    const stats = computed(() => ({
      total: ternakData.filter(t => t.cage === activeCageCode.value).length,
      healthy: ternakData.filter(t => t.cage === activeCageCode.value && t.status === 'Sehat').length,
      alert: ternakData.filter(t => t.cage === activeCageCode.value && (t.status === 'Sakit' || t.status === 'Hamil')).length,
      cage: activeCageCode.value
    }));

    return () => (
      <div class="animate-fade-in-up">
        <div class="peternakan-title-card mb-4 text-start overflow-hidden">
          <div class="d-flex flex-column flex-xl-row align-items-xl-center justify-content-between gap-4 position-relative" style={{ zIndex: 1 }}>
            <div>
              <Typography variant="h3" weight="extrabold" className="m-0 text-white">Daftar Ternak & Kode Kandang</Typography>
              <Typography variant="p" className="m-0 text-white opacity-75" size="text-sm">
                Fokus ke kandang {stats.value.cage} dengan detail ternak, status, dan notifikasi yang lebih mudah dipantau.
              </Typography>
            </div>
            <div class="d-flex flex-wrap gap-2">
              <Badge variant="success" className="px-3 py-2">{userSession.value?.name || 'Muhammad Hamidy'}</Badge>
              <Badge variant="primary" className="px-3 py-2">Kandang {stats.value.cage}</Badge>
              <Badge variant="warning" className="px-3 py-2">{stats.value.total} ternak aktif</Badge>
            </div>
          </div>
        </div>

        <div class="row g-3 mb-4">
          <div class="col-6 col-xl-3"><div class="bg-white rounded-4 border shadow-sm p-3 h-100"><Typography variant="span" size="text-xs" className="text-secondary text-uppercase fw-bold d-block">Total</Typography><Typography variant="h4" weight="extrabold" className="m-0">{stats.value.total}</Typography></div></div>
          <div class="col-6 col-xl-3"><div class="bg-white rounded-4 border shadow-sm p-3 h-100"><Typography variant="span" size="text-xs" className="text-secondary text-uppercase fw-bold d-block">Sehat</Typography><Typography variant="h4" weight="extrabold" className="m-0">{stats.value.healthy}</Typography></div></div>
          <div class="col-6 col-xl-3"><div class="bg-white rounded-4 border shadow-sm p-3 h-100"><Typography variant="span" size="text-xs" className="text-secondary text-uppercase fw-bold d-block">Perhatian</Typography><Typography variant="h4" weight="extrabold" className="m-0">{stats.value.alert}</Typography></div></div>
          <div class="col-6 col-xl-3"><div class="bg-white rounded-4 border shadow-sm p-3 h-100"><Typography variant="span" size="text-xs" className="text-secondary text-uppercase fw-bold d-block">Kandang Aktif</Typography><Typography variant="h4" weight="extrabold" className="m-0">{stats.value.cage}</Typography></div></div>
        </div>

        <div class="bg-white rounded-5 border shadow-sm p-4 p-md-5 mb-4">
          <div class="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3 mb-4">
            <div>
              <Typography variant="h4" weight="extrabold" className="m-0">Filter & Cari Ternak</Typography>
              <Typography variant="p" size="text-xs" color="secondary" className="m-0">Cari ternak pada kandang aktif, lalu buka detail atau tambah data baru</Typography>
            </div>
            <button class="peternakan-primary-btn mb-0 ms-0" onClick={() => isAddModalOpen.value = true}>
              <img src="/icon/plus.png" style={{ width: '18px', height: '18px', objectFit: 'contain' }} />
              Tambah Domba
            </button>
          </div>

          <div class="row g-3 align-items-center mb-4">
            <div class="col-lg-6">
              <div class="peternakan-search-bar mb-0">
                <span class="peternakan-search-icon">
                  <img src="/icon/search.png" style={{ width: '18px', height: '18px', objectFit: 'contain' }} />
                </span>
                <input
                  type="text"
                  class="peternakan-search-input"
                  placeholder="Cari ID, nama, jenis, atau kode kandang"
                  value={search.value}
                  onInput={(e) => search.value = (e.target as HTMLInputElement).value}
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="d-flex flex-wrap gap-2 justify-content-lg-end">
                {['', 'Sehat', 'Hamil', 'Sakit'].map(status => (
                  <button
                    type="button"
                    key={status || 'Semua'}
                    class={['btn btn-sm rounded-pill px-3 py-2 fw-bold', filterStatus.value === status ? 'btn-primary-custom shadow-sm' : 'btn-light border text-secondary']}
                    onClick={() => filterStatus.value = status}
                  >
                    {status || 'Semua'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div class="row g-3">
            {filtered.value.length === 0 ? (
              <div class="col-12 text-center py-5 text-secondary">
                <p>Tidak ada data ditemukan pada Kandang {activeCageCode.value}.</p>
              </div>
            ) : (
              filtered.value.map((t) => (
                <div class="col-12 col-md-6 col-xl-4" key={t.id}>
                  <div class="peternakan-item-card h-100 flex-column align-items-stretch">
                    <div class="d-flex align-items-center gap-3">
                      <div class="peternakan-item-icon-box position-relative">
                        <img src="/icon/domba.png" style={{ width: '32px', height: '32px', objectFit: 'contain' }} alt="Domba" />
                        {t.notif > 0 && <div class="peternakan-card-badge">{t.notif}</div>}
                      </div>
                      <div class="peternakan-item-main">
                        <span class="peternakan-item-headline">{t.nama}</span>
                        <span class="peternakan-item-subline">{t.id} • Kandang {t.cage}</span>
                      </div>
                    </div>

                    <div class="d-flex flex-wrap gap-2 mt-3">
                      <Badge variant={statusColor[t.status] || 'success'}>{t.status}</Badge>
                      <Badge variant="secondary">{t.jenis}</Badge>
                      <Badge variant="secondary">{t.umur}</Badge>
                      <Badge variant="secondary">{t.berat}</Badge>
                    </div>

                    <div class="d-flex justify-content-between align-items-center mt-3">
                      <span class="text-secondary" style={{ fontSize: '0.75rem', fontWeight: 700 }}>Notifikasi: {t.notif}</span>
                      <button class="peternakan-action-btn" onClick={() => selectedTernakId.value = t.id}>Detail</button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {isAddModalOpen.value && (
          <div class="peternakan-modal-overlay" onClick={() => isAddModalOpen.value = false}>
            <div class="peternakan-modal-card animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
              <div class="peternakan-modal-header">
                <button class="peternakan-modal-close" onClick={() => isAddModalOpen.value = false}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                <div class="peternakan-modal-title">Tambah Populasi Domba</div>
              </div>

              <div class="peternakan-modal-body">
                <div class="row g-3">
                  <div class="col-12">
                    <label class="pencatatan-label">ID Domba / Tag</label>
                    <CustomInput 
                      modelValue={newDomba.value.id} 
                      placeholder="Contoh: D-007" 
                      onUpdate:modelValue={(val: string) => newDomba.value.id = val} 
                    />
                  </div>
                  <div class="col-12">
                    <label class="pencatatan-label">Nama Panggilan</label>
                    <CustomInput 
                      modelValue={newDomba.value.nama} 
                      placeholder="Masukkan nama domba" 
                      onUpdate:modelValue={(val: string) => newDomba.value.nama = val} 
                    />
                  </div>
                  <div class="col-6">
                    <label class="pencatatan-label">Jenis</label>
                    <CustomSelect 
                      options={['Garut', 'Merino', 'Dorper', 'Lokal']}
                      modelValue={newDomba.value.jenis}
                      onUpdate:modelValue={(val: string) => newDomba.value.jenis = val}
                    />
                  </div>
                  <div class="col-6">
                    <label class="pencatatan-label">Status Awal</label>
                    <CustomSelect 
                      options={['Sehat', 'Sakit', 'Hamil']}
                      modelValue={newDomba.value.status}
                      onUpdate:modelValue={(val: string) => newDomba.value.status = val}
                    />
                  </div>
                  <div class="col-6">
                    <label class="pencatatan-label">Umur (Bulan/Tahun)</label>
                    <CustomInput 
                      modelValue={newDomba.value.umur} 
                      placeholder="Contoh: 2" 
                      onUpdate:modelValue={(val: string) => newDomba.value.umur = val} 
                    />
                  </div>
                  <div class="col-6">
                    <label class="pencatatan-label">Berat Awal (Kg)</label>
                    <CustomInput 
                      modelValue={newDomba.value.berat} 
                      placeholder="Contoh: 35" 
                      type="number"
                      onUpdate:modelValue={(val: string) => newDomba.value.berat = val} 
                    />
                  </div>
                </div>

                <div class="mt-4 pt-3 border-top border-light d-flex gap-3">
                  <button class="btn btn-light grow fw-bold py-2 rounded-pill" onClick={() => isAddModalOpen.value = false}>Batal</button>
                  <button class="peternakan-primary-btn grow m-0 justify-content-center" onClick={handleAddDomba}>Simpan</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
});
