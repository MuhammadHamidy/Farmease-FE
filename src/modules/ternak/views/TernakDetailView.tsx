import { defineComponent, computed, ref, type PropType } from 'vue';
import { selectedTernakId } from '@/store/navigation';
import Typography from '@/shared/ui/Typography';
import Badge from '@/shared/ui/Badge';
import ReminderScheduleSheet, { type ReminderScheduleData } from '@/shared/ui/ReminderScheduleSheet';

const ternakData = [
  { id: 'D-001', nama: 'Domba 001', jenis: 'Garut', umur: '2 thn', status: 'Sehat', berat: '42 kg', jk: 'Jantan', tgl_lahir: '12 Jan 2022', kandang: 'K-001', ayah: 'D-X01 (Rambo)', ibu: 'D-Y01 (Susi)', kakek_ayah: 'D-Z01', nenek_ayah: 'D-Z02', kakek_ibu: 'D-Z03', nenek_ibu: 'D-Z04' },
  { id: 'D-002', nama: 'Domba 002', jenis: 'Merino', umur: '3 thn', status: 'Hamil', berat: '38 kg', jk: 'Betina', tgl_lahir: '05 Mar 2021', kandang: 'K-002', ayah: 'D-X02 (Goliath)', ibu: 'D-Y02 (Bella)', kakek_ayah: 'D-Z05', nenek_ayah: 'D-Z06', kakek_ibu: 'D-Z07', nenek_ibu: 'D-Z08' },
  { id: 'D-003', nama: 'Domba 003', jenis: 'Dorper', umur: '1 thn', status: 'Sehat', berat: '30 kg', jk: 'Jantan', tgl_lahir: '20 Nov 2022', kandang: 'K-001', ayah: 'D-X01 (Rambo)', ibu: 'D-Y03 (Lola)', kakek_ayah: 'D-Z01', nenek_ayah: 'D-Z02', kakek_ibu: 'D-Z09', nenek_ibu: 'D-Z10' },
  { id: 'D-004', nama: 'Domba 004', jenis: 'Garut', umur: '4 thn', status: 'Sakit', berat: '40 kg', jk: 'Betina', tgl_lahir: '15 Feb 2020', kandang: 'K-003', ayah: 'D-X03', ibu: 'D-Y04', kakek_ayah: 'N/A', nenek_ayah: 'N/A', kakek_ibu: 'N/A', nenek_ibu: 'N/A' },
  { id: 'D-005', nama: 'Domba 005', jenis: 'Merino', umur: '2 thn', status: 'Sehat', berat: '35 kg', jk: 'Jantan', tgl_lahir: '10 Jun 2022', kandang: 'K-002', ayah: 'D-X02 (Goliath)', ibu: 'D-Y02 (Bella)', kakek_ayah: 'D-Z05', nenek_ayah: 'D-Z06', kakek_ibu: 'D-Z07', nenek_ibu: 'D-Z08' },
  { id: 'D-006', nama: 'Domba 006', jenis: 'Garut', umur: '3 thn', status: 'Hamil', berat: '37 kg', jk: 'Betina', tgl_lahir: '01 Aug 2021', kandang: 'K-003', ayah: 'D-X03', ibu: 'D-Y05', kakek_ayah: 'N/A', nenek_ayah: 'N/A', kakek_ibu: 'N/A', nenek_ibu: 'N/A' },
];

const mockSchedules = [
  { id: 1, ternakId: 'D-001', type: 'vitamin', title: 'Vitamin B-Complex', date: 'Besok', icon: '/icon/catat_sehat.png', color: 'var(--color-primary-fixed)' },
  { id: 2, ternakId: 'D-002', type: 'kelahiran', title: 'Prediksi Kelahiran', date: '09 Apr 2026', icon: '/icon/catat_lahir.png', color: 'var(--color-tertiary)' },
  { id: 3, ternakId: 'D-004', type: 'kesehatan', title: 'Cek Kesehatan Rutin', date: 'Hari ini', icon: '/icon/catat_sehat.png', color: 'var(--color-on-tertiary-fixed-variant)' },
  { id: 4, ternakId: 'D-006', type: 'kelahiran', title: 'Check-up Kehamilan', date: '12 Apr 2026', icon: '/icon/catat_lahir.png', color: 'var(--color-tertiary)' },
];

export default defineComponent({
  name: 'TernakDetailView',
  props: {
    onGoToPencatatan: { type: Function as PropType<() => void>, default: null },
  },
  setup(props) {
    const ternak = computed(() => ternakData.find(t => t.id === selectedTernakId.value));
    const showReminderSheet = ref(false);
    const reminderData = ref<ReminderScheduleData>({ date: null, rutin: '', kategori: '', jumlah: '' });

    const handleBack = () => {
      selectedTernakId.value = null;
    };

    if (!ternak.value) return () => (
      <div class="text-center py-5">
        <Typography>Data tidak ditemukan</Typography>
        <button onClick={handleBack} class="peternakan-primary-btn mt-3">Kembali</button>
      </div>
    );

    const t = ternak.value;

    return () => (
      <div class="animate-fade-in-up">
        {/* Back Button (Top) */}
        <div class="d-flex align-items-center mb-4">
          <button 
            onClick={handleBack} 
            class="header-logout-btn" 
            style={{ width: '42px', height: '42px', background: 'white' }}
            title="Kembali ke Daftar"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <Typography variant="span" size="text-sm" weight="extrabold" className="ms-3 text-secondary">
             Detail Ternak
          </Typography>
        </div>

        {/* Detail Header / Quick Info */}
        <div class="detail-header-card">
          <div class="detail-avatar-box">
             <img src="/icon/domba.png" style={{ width: '64px', height: '64px', objectFit: 'contain' }} alt="Domba" />
          </div>
          <div class="grow">
              <div class="d-flex align-items-center gap-2 mb-1">
              <Typography variant="h1" size="text-3xl" weight="extrabold" color="almond-beige" className="m-0">
                {t.nama}
              </Typography>
              <Badge variant={t.status === 'Sehat' ? 'success' : (t.status === 'Hamil' ? 'warning' : 'danger')}>
                {t.status}
              </Badge>
            </div>
            <Typography variant="p" weight="bold" color="secondary" className="mb-3">
              ID: {t.id} • {t.jenis} • {t.jk}
            </Typography>
            
            <div class="detail-info-grid">
              <div class="stat-box">
                <Typography variant="span" size="text-xs" weight="bold" color="secondary" className="d-block text-uppercase">Umur</Typography>
                <Typography variant="p" weight="extrabold" size="text-lg" color="almond-beige" className="m-0">{t.umur}</Typography>
              </div>
              <div class="stat-box">
                <Typography variant="span" size="text-xs" weight="bold" color="secondary" className="d-block text-uppercase">Berat</Typography>
                <Typography variant="p" weight="extrabold" size="text-lg" color="almond-beige" className="m-0">{t.berat}</Typography>
              </div>
              <div class="stat-box">
                <Typography variant="span" size="text-xs" weight="bold" color="secondary" className="d-block text-uppercase">Kandang</Typography>
                <Typography variant="p" weight="extrabold" size="text-lg" color="almond-beige" className="m-0">{t.kandang}</Typography>
              </div>
              <div class="stat-box">
                <Typography variant="span" size="text-xs" weight="bold" color="secondary" className="d-block text-uppercase">Tgl Lahir</Typography>
                <Typography variant="p" weight="extrabold" size="text-lg" color="almond-beige" className="m-0">{t.tgl_lahir}</Typography>
              </div>
            </div>
          </div>
        </div>

        {/* Action Tabs for Detail */}
        <div class="row g-4">
          <div class="col-12 col-md-7">
            <div class="bg-white rounded-4 border p-4 mb-4">
              <Typography variant="h3" weight="bold" color="coffee-brown" className="mb-3 fs-6">
                Riwayat Kesehatan & Pertumbuhan
              </Typography>
              
              <div class="text-center py-4 text-secondary opacity-50">
                <img src="/icon/statistic.png" style={{ width: '48px', opacity: 0.2, marginBottom: '1rem' }} />
                <p style={{ fontSize: '0.9rem' }}>Fitur riwayat grafik pertumbuhan segera hadir</p>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-5">
            <div class="bg-white rounded-4 border p-4 shadow-sm mb-4">
               <div class="d-flex justify-content-between align-items-center mb-4">
                  <Typography variant="h3" weight="bold" color="coffee-brown" className="m-0 fs-6">
                    Agenda & Pengingat
                  </Typography>
                  {props.onGoToPencatatan && (
                    <button 
                      class="btn btn-sm btn-link font-extrabold p-0 text-decoration-none" 
                      style={{ color: 'var(--color-secondary)', fontSize: '0.75rem' }}
                      onClick={() => {
                        selectedTernakId.value = null;
                        props.onGoToPencatatan?.();
                      }}
                    >
                      + Buat di Pencatatan
                    </button>
                  )}
               </div>

               <div class="routine-list">
                 {mockSchedules.filter(s => s.ternakId === selectedTernakId.value).map(task => (
                   <div key={task.id} class="routine-item p-2 mb-2 bg-light border-0">
                     <div class="routine-icon" style={{ width: '32px', height: '32px', backgroundColor: task.color + '15' }}>
                       <img src={task.icon} style={{ width: '18px', height: '18px', objectFit: 'contain' }} />
                     </div>
                     <div class="routine-info">
                        <Typography variant="p" weight="bold" size="text-xs" color="almond-beige" className="mb-0">
                          {task.title}
                        </Typography>
                        <Typography variant="span" style={{ fontSize: '0.65rem' }} weight="bold" color="secondary">
                          {task.date}
                        </Typography>
                     </div>
                   </div>
                 ))}

                 {mockSchedules.filter(s => s.ternakId === selectedTernakId.value).length === 0 && (
                   <div class="text-center py-3">
                      <Typography variant="p" size="text-xs" color="secondary" weight="bold">Tidak ada agenda mendatang</Typography>
                   </div>
                 )}
               </div>
            </div>
          </div>
        </div>

        {/* Silsilah Keluarga (Family Tree) Section */}
        <div class="bg-white rounded-4 border p-4 mb-4">
          <Typography variant="h3" weight="bold" color="coffee-brown" className="mb-4 fs-6">
            Silsilah Keluarga (Ancestry)
          </Typography>
          
          <div class="lineage-container">
            {/* Tree Structure */}
            <div class="row g-3">
              {/* Father Side */}
              <div class="col-12 col-md-6">
                <div class="p-3 rounded-4 bg-light mb-3 border">
                  <Typography variant="span" size="text-xs" weight="bold" color="secondary" className="text-uppercase mb-2 d-block">Ayah (Father)</Typography>
                  <Typography variant="p" weight="extrabold" size="text-sm" color="almond-beige">{t.ayah}</Typography>
                  
                  <div class="d-flex gap-2 mt-3 pt-3 border-top">
                    <div class="flex-fill">
                       <Typography variant="span" size="text-xs" weight="bold" color="secondary" className="text-uppercase d-block" style={{ fontSize: '10px' }}>Kakek</Typography>
                       <Typography variant="p" weight="extrabold" size="text-xs" color="almond-beige">{t.kakek_ayah}</Typography>
                    </div>
                    <div class="flex-fill">
                       <Typography variant="span" size="text-xs" weight="bold" color="secondary" className="text-uppercase d-block" style={{ fontSize: '10px' }}>Nenek</Typography>
                       <Typography variant="p" weight="extrabold" size="text-xs" color="almond-beige">{t.nenek_ayah}</Typography>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mother Side */}
              <div class="col-12 col-md-6">
                <div class="p-3 rounded-4 bg-light mb-3 border">
                  <Typography variant="span" size="text-xs" weight="bold" color="secondary" className="text-uppercase mb-2 d-block">Ibu (Mother)</Typography>
                  <Typography variant="p" weight="extrabold" size="text-sm" color="almond-beige">{t.ibu}</Typography>
                  
                  <div class="d-flex gap-2 mt-3 pt-3 border-top">
                    <div class="flex-fill">
                       <Typography variant="span" size="text-xs" weight="bold" color="secondary" className="text-uppercase d-block" style={{ fontSize: '10px' }}>Kakek</Typography>
                       <Typography variant="p" weight="extrabold" size="text-xs" color="almond-beige">{t.kakek_ibu}</Typography>
                    </div>
                    <div class="flex-fill">
                       <Typography variant="span" size="text-xs" weight="bold" color="secondary" className="text-uppercase d-block" style={{ fontSize: '10px' }}>Nenek</Typography>
                       <Typography variant="p" weight="extrabold" size="text-xs" color="almond-beige">{t.nenek_ibu}</Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
});
