import { defineComponent, ref, computed, type PropType } from 'vue';
import Typography from '../../../components/ui/peternakan/Typography';
import StatCard from '../../../components/ui/peternakan/StatCard';
import Badge from '../../../components/ui/peternakan/Badge';
import { userSession, cageSession, selectedTernakId } from '../../../store/navigation';

const ternakInventory = ref([
  { id: 'D-001', nama: 'Domba Garut 01', jenis: 'Garut', gender: 'Jantan', umur: '2 thn', status: 'Sehat', berat: '42 kg', cage: 'A' },
  { id: 'D-002', nama: 'Domba Merino 02', jenis: 'Merino', gender: 'Betina', umur: '3 thn', status: 'Hamil', berat: '38 kg', cage: 'A' },
  { id: 'D-003', nama: 'Domba Dorper 03', jenis: 'Dorper', gender: 'Jantan', umur: '1 thn', status: 'Sehat', berat: '30 kg', cage: 'B' },
  { id: 'D-004', nama: 'Domba Garut 04', jenis: 'Garut', gender: 'Betina', umur: '4 thn', status: 'Sakit', berat: '40 kg', cage: 'B' },
  { id: 'D-005', nama: 'Domba Merino 05', jenis: 'Merino', gender: 'Betina', umur: '2 thn', status: 'Sehat', berat: '35 kg', cage: 'C' },
  { id: 'D-006', nama: 'Domba Garut 06', jenis: 'Garut', gender: 'Betina', umur: '3 thn', status: 'Hamil', berat: '37 kg', cage: 'C' },
  { id: 'D-007', nama: 'Cempe Garut 07', jenis: 'Garut', gender: 'Jantan', umur: '4 bln', status: 'Sehat', berat: '12 kg', cage: 'A' },
  { id: 'D-008', nama: 'Cempe Dorper 08', jenis: 'Dorper', gender: 'Betina', umur: '5 bln', status: 'Sehat', berat: '14 kg', cage: 'B' },
]);

type CageInfo = {
  name: string;
  type: string;
  feed: string;
  sanitation: string;
  tone: string;
};

const activeCageMeta: Record<string, CageInfo> = {
  A: { name: 'Breeding Area', type: 'Domba Garut & Merino', feed: '82%', sanitation: 'Baik', tone: 'var(--color-secondary)' },
  B: { name: 'Fattening Area', type: 'Domba Dorper', feed: '76%', sanitation: 'Siap Panen', tone: 'var(--color-primary)' },
  C: { name: 'Recovery Area', type: 'Domba Perawatan', feed: '69%', sanitation: 'Perlu Cek', tone: 'var(--color-tertiary)' },
};

const routineTaskPresets = [
  {
    id: 1,
    title: 'Pemberian pakan pagi untuk kandang aktif',
    time: '07:30',
    target: 'Kandang A',
    description: 'Berikan pakan pagi sesuai jatah, lalu cek air minum dan kondisi nafsu makan ternak.',
    icon: '/icon/catat_pakan.png',
    completed: true,
  },
  {
    id: 2,
    title: 'Sanitasi tempat minum dan area kandang',
    time: '11:00',
    target: 'Kandang aktif',
    description: 'Bersihkan tempat minum, area makan, dan cek kebersihan alas kandang.',
    icon: '/icon/catat_kotoran.png',
    completed: false,
  },
  {
    id: 3,
    title: 'Pemeriksaan kesehatan rutin ternak',
    time: '14:00',
    target: 'Ternak prioritas',
    description: 'Catat gejala, suhu tubuh, dan tindakan medis pada ternak yang perlu dipantau.',
    icon: '/icon/catat_sehat.png',
    completed: false,
  },
  {
    id: 4,
    title: 'Pencatatan hasil sanitasi dan kotoran',
    time: '16:30',
    target: 'Kandang aktif',
    description: 'Masukkan volume hasil panen kotoran untuk pengolahan pupuk kandang.',
    icon: '/icon/catat_kotoran.png',
    completed: false,
  },
];

export default defineComponent({
  name: 'DasborView',
  props: {
    onGoToPencatatan: { type: Function as PropType<() => void>, default: null },
  },
  setup(props) {
    const search = ref('');
    const selectedTaskId = ref<number | null>(null);

    const activeCageCode = computed(() => cageSession.value?.code || 'A');
    const cageInfo = computed(() => (activeCageMeta[activeCageCode.value] || activeCageMeta.A) as CageInfo);
    const cageInventory = computed(() => ternakInventory.value.filter(t => t.cage === activeCageCode.value));
    const selectedTask = computed(() => routineTaskPresets.find(task => task.id === selectedTaskId.value) || null);

    const filteredInventory = computed(() => {
      const q = search.value.toLowerCase().trim();
      return cageInventory.value.filter(t => {
        return !q ||
          t.nama.toLowerCase().includes(q) ||
          t.id.toLowerCase().includes(q) ||
          t.jenis.toLowerCase().includes(q) ||
          t.status.toLowerCase().includes(q);
      });
    });

    const totalAnimals = cageInventory.value.length;
    const healthyAnimals = cageInventory.value.filter(t => t.status === 'Sehat').length;
    const attentionAnimals = cageInventory.value.filter(t => t.status === 'Sakit' || t.status === 'Hamil').length;
    const taskDone = routineTaskPresets.filter(t => t.completed).length;

    const closeTaskModal = () => {
      selectedTaskId.value = null;
    };

    const openTaskDetail = (taskId: number) => {
      selectedTaskId.value = taskId;
    };

    const goToPencatatan = () => {
      closeTaskModal();
      props.onGoToPencatatan?.();
    };

    return () => (
      <div class="animate-fade-in">
        <div class="peternakan-title-card mb-4 overflow-hidden text-start">
          <div class="d-flex flex-column flex-xl-row align-items-xl-center justify-content-between gap-4 position-relative" style={{ zIndex: 1 }}>
            <div>
              <div class="d-flex align-items-center gap-3 mb-2">
                <img src="/icon/dashboard.png" alt="Dashboard" style={{ width: '34px', height: '34px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                <Typography variant="h3" weight="extrabold" className="m-0 text-white">Dashboard Kandang {activeCageCode.value}</Typography>
              </div>
              <Typography variant="p" className="m-0 text-white opacity-85" size="text-sm">
                Nama pencatat, kode kandang aktif, tugas admin, dan isi kandang saat ini.
              </Typography>
              <div class="d-flex flex-wrap gap-2 mt-3">
                <Badge variant="success" className="px-3 py-2">{userSession.value?.name || 'Operator Lapangan'}</Badge>
                <Badge variant="primary" className="px-3 py-2">Kandang {activeCageCode.value}</Badge>
                <Badge variant="secondary" className="px-3 py-2">{userSession.value?.role || 'Pencatat'}</Badge>
              </div>
            </div>

            <div class="d-flex flex-wrap gap-2 position-relative" style={{ zIndex: 1 }}>
              <Badge variant="secondary" className="px-3 py-2">Fokus: kandang aktif</Badge>
              <Badge variant="secondary" className="px-3 py-2">Tugas rutin admin</Badge>
            </div>
          </div>
        </div>

        <div class="row g-3 mb-4">
          <div class="col-6 col-xl-3"><StatCard label="Isi Kandang" value={String(totalAnimals)} color="primary" /></div>
          <div class="col-6 col-xl-3"><StatCard label="Sehat" value={String(healthyAnimals)} color="light" /></div>
          <div class="col-6 col-xl-3"><StatCard label="Perlu Perhatian" value={String(attentionAnimals)} color="accent" /></div>
          <div class="col-6 col-xl-3"><StatCard label="Tugas Selesai" value={`${taskDone}/${routineTaskPresets.length}`} color="light" /></div>
        </div>

        <div class="row g-4 mb-4">
          <div class="col-12 col-xl-5">
            <div class="bg-white rounded-5 border shadow-sm p-4 p-md-5 h-100">
              <div class="d-flex align-items-center justify-content-between mb-4 gap-3">
                <div>
                  <div class="d-flex align-items-center gap-2 mb-1">
                    <img src="/icon/notification-active.png" alt="Task" style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
                    <Typography variant="h4" weight="extrabold" className="m-0">Tugas Rutin Admin</Typography>
                  </div>
                  <Typography variant="p" size="text-xs" color="secondary" className="m-0">Klik kartu tugas untuk melihat detail, lalu kerjakan dari popup.</Typography>
                </div>
                <Badge variant="primary" className="px-3 py-1.5" style={{ fontSize: '0.65rem' }}>Hari Ini</Badge>
              </div>

              <div class="d-flex flex-column gap-3">
                {routineTaskPresets.map(task => (
                  <button
                    key={task.id}
                    type="button"
                    class={['d-flex align-items-center gap-3 p-3 rounded-4 border transition-all w-100 text-start', task.completed ? 'bg-light border-light opacity-75' : 'bg-white']}
                    onClick={() => openTaskDetail(task.id)}
                  >
                    <div class="rounded-4 d-flex align-items-center justify-content-center" style={{ width: '42px', height: '42px', backgroundColor: 'var(--color-primary-fixed)' }}>
                      <img src={task.icon} alt="Task" style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
                    </div>
                    <div class="flex-grow-1 min-w-0">
                      <Typography variant="p" size="text-sm" weight="extrabold" className="mb-0 d-block text-truncate text-on-surface">
                        {task.title}
                      </Typography>
                      <div class="d-flex align-items-center gap-2 flex-wrap mt-1">
                        <Typography variant="span" style={{ fontSize: '0.65rem' }} weight="bold" className="text-secondary">
                          ⏱️ {task.time} WIB
                        </Typography>
                        <Typography variant="span" style={{ fontSize: '0.65rem' }} weight="bold" className="text-secondary">
                          • {task.target}
                        </Typography>
                      </div>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                      <Badge variant={task.completed ? 'success' : 'secondary'} className="px-3 py-2">
                        {task.completed ? 'Selesai' : 'Detail'}
                      </Badge>
                      <img src="/icon/right-row.png" alt="Detail" style={{ width: '18px', height: '18px', objectFit: 'contain', opacity: 0.75 }} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div class="col-12 col-xl-7">
            <div class="bg-white rounded-5 border shadow-sm p-4 p-md-5 h-100">
              <div class="d-flex align-items-center justify-content-between mb-4 gap-3">
                <div>
                  <div class="d-flex align-items-center gap-2 mb-1">
                    <img src="/icon/kandang.png" alt="Kandang" style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
                    <Typography variant="h4" weight="extrabold" className="m-0">Dashboard Penting Kandang {activeCageCode.value}</Typography>
                  </div>
                  <Typography variant="p" size="text-xs" color="secondary" className="m-0">Informasi hanya untuk kandang ini, bukan seluruh kandang</Typography>
                </div>
                <Badge variant="success" className="px-3 py-1.5" style={{ fontSize: '0.65rem', backgroundColor: cageInfo.value.tone, color: '#fff' }}>Aktif</Badge>
              </div>

              <div class="row g-3 mb-4">
                <div class="col-md-6">
                  <div class="rounded-4 border p-3 h-100" style={{ backgroundColor: '#FCFBF8' }}>
                    <Typography variant="span" size="text-xs" className="text-secondary text-uppercase fw-bold d-block mb-1">Nama Kandang</Typography>
                    <Typography variant="h5" weight="extrabold" className="m-0" style={{ color: 'var(--color-on-surface)' }}>{cageInfo.value.name}</Typography>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="rounded-4 border p-3 h-100" style={{ backgroundColor: '#FCFBF8' }}>
                    <Typography variant="span" size="text-xs" className="text-secondary text-uppercase fw-bold d-block mb-1">Jenis Ternak</Typography>
                    <Typography variant="h5" weight="extrabold" className="m-0" style={{ color: 'var(--color-on-surface)' }}>{cageInfo.value.type}</Typography>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="rounded-4 border p-3 h-100" style={{ backgroundColor: '#FCFBF8' }}>
                    <Typography variant="span" size="text-xs" className="text-secondary text-uppercase fw-bold d-block mb-1">Ketersediaan Pakan</Typography>
                    <Typography variant="h4" weight="extrabold" className="m-0" style={{ color: 'var(--color-secondary)' }}>{cageInfo.value.feed}</Typography>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="rounded-4 border p-3 h-100" style={{ backgroundColor: '#FCFBF8' }}>
                    <Typography variant="span" size="text-xs" className="text-secondary text-uppercase fw-bold d-block mb-1">Sanitasi</Typography>
                    <Typography variant="h4" weight="extrabold" className="m-0" style={{ color: 'var(--color-primary)' }}>{cageInfo.value.sanitation}</Typography>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="rounded-4 border p-3 h-100" style={{ backgroundColor: '#FCFBF8' }}>
                    <Typography variant="span" size="text-xs" className="text-secondary text-uppercase fw-bold d-block mb-1">Status Pantauan</Typography>
                    <Typography variant="h4" weight="extrabold" className="m-0" style={{ color: 'var(--color-tertiary)' }}>{attentionAnimals > 0 ? 'Perlu Cek' : 'Aman'}</Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-5 border shadow-sm p-4 p-md-5">
          <div class="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 mb-4">
            <div>
              <div class="d-flex align-items-center gap-2 mb-1">
                <img src="/icon/domba.png" alt="Domba" style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
                <Typography variant="h4" weight="extrabold" className="m-0">Daftar Ternak Kandang {activeCageCode.value}</Typography>
              </div>
              <Typography variant="p" size="text-xs" color="secondary" className="m-0">Klik ternak untuk masuk ke detail dan pencatatan terkait</Typography>
            </div>
            <div class="position-relative w-100 w-sm-auto" style={{ minWidth: '220px' }}>
              <img src="/icon/search.png" alt="Cari" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px', objectFit: 'contain', opacity: 0.6 }} />
              <input
                type="text"
                class="form-control form-control-sm rounded-pill ps-5 bg-light border-0 py-2"
                style={{ fontSize: '0.75rem' }}
                placeholder="Cari ID, jenis, status..."
                value={search.value}
                onInput={(e) => search.value = (e.target as HTMLInputElement).value}
              />
            </div>
          </div>

          <div class="row g-3">
            {filteredInventory.value.length === 0 ? (
              <div class="col-12 text-center py-5 text-secondary">Tidak ada ternak pada kandang aktif ini</div>
            ) : (
              filteredInventory.value.map(t => (
                <div class="col-12 col-md-6 col-xl-3" key={t.id}>
                  <div class="rounded-4 border p-3 h-100 bg-light" style={{ cursor: 'pointer' }} onClick={() => selectedTernakId.value = t.id}>
                    <div class="d-flex justify-content-between align-items-start mb-3">
                      <div class="rounded-circle bg-white d-flex align-items-center justify-content-center border" style={{ width: '48px', height: '48px' }}>
                        <img src="/icon/domba.png" alt="Domba" style={{ width: '26px', height: '26px', objectFit: 'contain' }} />
                      </div>
                      <Badge variant={t.status === 'Hamil' ? 'warning' : t.status === 'Sakit' ? 'danger' : 'success'}>
                        {t.status}
                      </Badge>
                    </div>
                    <Typography variant="h5" weight="extrabold" className="m-0">{t.nama}</Typography>
                    <Typography variant="p" size="text-xs" color="secondary" className="mb-3">{t.id} • {t.jenis}</Typography>
                    <div class="d-flex flex-wrap gap-2 mb-3">
                      <Badge variant="secondary" className="px-3 py-1">{t.gender}</Badge>
                      <Badge variant="secondary" className="px-3 py-1">{t.umur}</Badge>
                      <Badge variant="secondary" className="px-3 py-1">{t.berat}</Badge>
                    </div>
                    <Typography variant="span" style={{ fontSize: '0.75rem' }} weight="bold" className="text-primary">Lihat detail →</Typography>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {selectedTask.value && (
          <div class="peternakan-modal-overlay" onClick={closeTaskModal}>
            <div class="peternakan-modal-card animate-fade-in-up" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '720px' }}>
              <div class="peternakan-modal-header">
                <button class="peternakan-modal-close" onClick={closeTaskModal}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                <div class="peternakan-modal-title">Detail Tugas Rutin</div>
              </div>

              <div class="peternakan-modal-body">
                <div class="d-flex align-items-start gap-3 mb-4">
                  <div class="rounded-4 d-flex align-items-center justify-content-center" style={{ width: '56px', height: '56px', backgroundColor: 'var(--color-primary-fixed)' }}>
                    <img src={selectedTask.value.icon} alt="Task" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                  </div>
                  <div class="flex-grow-1">
                    <Typography variant="h4" weight="extrabold" className="m-0">{selectedTask.value.title}</Typography>
                    <Typography variant="p" size="text-xs" color="secondary" className="m-0">Target: {selectedTask.value.target} • Jam {selectedTask.value.time} WIB</Typography>
                  </div>
                  <Badge variant={selectedTask.value.completed ? 'success' : 'warning'} className="px-3 py-2">
                    {selectedTask.value.completed ? 'Sudah Selesai' : 'Belum Selesai'}
                  </Badge>
                </div>

                <div class="rounded-4 border p-4 mb-4" style={{ backgroundColor: '#FCFBF8' }}>
                  <Typography variant="span" size="text-xs" className="text-secondary text-uppercase fw-bold d-block mb-2">Deskripsi Tugas</Typography>
                  <Typography variant="p" className="m-0" size="text-sm">{selectedTask.value.description}</Typography>
                </div>

                <div class="d-flex flex-column flex-sm-row gap-3 justify-content-end">
                  <button class="btn btn-light rounded-pill px-4 py-3 fw-bold" onClick={closeTaskModal}>Tutup</button>
                  <button class="btn rounded-pill px-4 py-3 fw-bold text-white border-0" style={{ backgroundColor: 'var(--color-primary)' }} onClick={goToPencatatan}>
                    Kerjakan Tugas
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
});
