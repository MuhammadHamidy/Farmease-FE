import { defineComponent, ref } from 'vue';
import Typography from '@/components/ui/peternakan/Typography';
import StatCard from '@/components/ui/peternakan/StatCard';
import Badge from '@/components/ui/peternakan/Badge';
import { useRouter } from 'vue-router';
import FeedStock from '@/components/peternakan/tools/FeedStock';
import WeightHistory from '@/components/peternakan/tools/WeightHistory';
import ActivityLog from '@/components/peternakan/tools/ActivityLog';
import WasteLog from '@/components/peternakan/tools/WasteLog';
import InbreedingChecker from '@/components/peternakan/tools/InbreedingChecker';
import ReportsExport from '@/components/peternakan/tools/ReportsExport';

export default defineComponent({
  name: 'LivestockStats',
  setup() {
    const router = useRouter();
    const chartData = [
      { label: 'Jan', height: '40%', color: 'var(--color-primary-fixed)' },
      { label: 'Feb', height: '55%', color: 'var(--color-secondary)' },
      { label: 'Mar', height: '35%', color: 'var(--color-primary-fixed)' },
      { label: 'Apr', height: '80%', color: 'var(--color-secondary)' },
      { label: 'Mei', height: '65%', color: 'var(--color-tertiary)' },
      { label: 'Jun', height: '90%', color: 'var(--color-secondary)' },
    ];

    const stats = [
      { label: 'Total Populasi', value: '1,240', sub: '↑ 12%', color: 'primary' },
      { label: 'Domba Sehat', value: '1,180', sub: '↑ 5%', color: 'light' },
      { label: 'Dalam Perawatan', value: '60', sub: '↓ 2%', color: 'accent' },
    ];

    const showFeedStock = ref(false);
    const showWeightHistory = ref(false);
    const showActivityLog = ref(false);
    const showWasteLog = ref(false);
    const showInbreeding = ref(false);
    const showReports = ref(false);

    return () => (
      <div class="dashboard-peternakan fade-in">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <Typography variant="h3" weight="bold" color="coffee-brown" className="m-0">
            Statistik Populasi Domba
          </Typography>
          <div class="d-flex gap-2">
            <button 
              class="btn btn-sm fw-bold px-3 rounded-pill text-white" 
              style={{ backgroundColor: 'var(--color-primary-fixed)' }}
              onClick={() => router.push({ name: 'peternakan' })}
            >
              Buka Modul Pencatatan →
            </button>
            <Badge variant="primary" className="px-3 py-2">Bulan Ini</Badge>
          </div>
        </div>
        
        {/* Chart Area */}
        <div class="chart-mockup w-100 rounded-4 d-flex align-items-end justify-content-around p-4 border mb-4" style={{ height: '350px', backgroundColor: 'var(--color-surface-container-low)' }}>
          {chartData.map((data) => (
            <div key={data.label} class="d-flex flex-column align-items-center gap-2 h-100 justify-content-end grow" style={{ maxWidth: '60px' }}>
              <div 
                class="rounded-top w-100 transition-all hover-shadow" 
                style={{ height: data.height, backgroundColor: data.color }}
              ></div>
              <Typography variant="span" size="text-xs" weight="bold" className="text-secondary">
                {data.label}
              </Typography>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div class="row g-4">
          {stats.map((stat) => (
            <div key={stat.label} class="col-md-4">
              <StatCard 
                label={stat.label} 
                value={stat.value} 
                sub={stat.sub} 
                color={stat.color as any} 
              />
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div class="d-flex gap-2 mt-4 flex-wrap">
          <button class="btn btn-outline-secondary" onClick={() => showFeedStock.value = true}>Kelola Stok Pakan</button>
          <button class="btn btn-outline-secondary" onClick={() => showWeightHistory.value = true}>Riwayat Berat</button>
          <button class="btn btn-outline-secondary" onClick={() => showActivityLog.value = true}>Log Aktivitas</button>
          <button class="btn btn-outline-secondary" onClick={() => showWasteLog.value = true}>Catatan Kotoran</button>
          <button class="btn btn-outline-secondary" onClick={() => showInbreeding.value = true}>Cek Perkawinan Sedarah</button>
          <button class="btn btn-outline-secondary" onClick={() => showReports.value = true}>Eksport / Laporan</button>
        </div>

        {/* Modal-like overlays for FE-only components */}
        {showFeedStock.value && (
          <div class="peternakan-modal-overlay" onClick={() => showFeedStock.value = false}>
            <div class="peternakan-modal-card" onClick={(e) => e.stopPropagation()}>
              <FeedStock onClose={() => showFeedStock.value = false} />
            </div>
          </div>
        )}

        {showWeightHistory.value && (
          <div class="peternakan-modal-overlay" onClick={() => showWeightHistory.value = false}>
            <div class="peternakan-modal-card" onClick={(e) => e.stopPropagation()}>
              <WeightHistory onClose={() => showWeightHistory.value = false} />
            </div>
          </div>
        )}

        {showActivityLog.value && (
          <div class="peternakan-modal-overlay" onClick={() => showActivityLog.value = false}>
            <div class="peternakan-modal-card" onClick={(e) => e.stopPropagation()}>
              <ActivityLog onClose={() => showActivityLog.value = false} />
            </div>
          </div>
        )}

        {showWasteLog.value && (
          <div class="peternakan-modal-overlay" onClick={() => showWasteLog.value = false}>
            <div class="peternakan-modal-card" onClick={(e) => e.stopPropagation()}>
              <WasteLog onClose={() => showWasteLog.value = false} />
            </div>
          </div>
        )}

        {showInbreeding.value && (
          <div class="peternakan-modal-overlay" onClick={() => showInbreeding.value = false}>
            <div class="peternakan-modal-card" onClick={(e) => e.stopPropagation()}>
              <InbreedingChecker onClose={() => showInbreeding.value = false} />
            </div>
          </div>
        )}

        {showReports.value && (
          <div class="peternakan-modal-overlay" onClick={() => showReports.value = false}>
            <div class="peternakan-modal-card" onClick={(e) => e.stopPropagation()}>
              <ReportsExport onClose={() => showReports.value = false} />
            </div>
          </div>
        )}
      </div>
    );
  }
});
// modal state moved inside setup
