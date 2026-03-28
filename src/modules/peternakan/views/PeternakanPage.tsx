import { defineComponent, ref } from 'vue';
import '../../../assets/css/PeternakanPage.css';
import { currentRoute } from '../../../store/navigation';
import Typography from '../../../components/ui/Typography';
import DasborView from './DasborView';
import TernakView from './TernakView';
import PencatatanView from './PencatatanView';
import RiwayatView from './RiwayatView';

const tabs = [
  { id: 'dasbor',      label: 'Dasbor' },
  { id: 'ternak',      label: 'Ternak' },
  { id: 'pencatatan',  label: 'Pencatatan' },
  { id: 'riwayat',     label: 'Riwayat' },
];

export default defineComponent({
  name: 'PeternakanPage',
  setup() {
    const activeTab = ref('dasbor');

    return () => (
      <div class="peternakan-page">

        {/* ── Green header + tabs ──────────────────── */}
        <div class="peternakan-header">
          <div class="peternakan-header-top">
            <div class="d-flex align-items-center gap-3">
              <button class="peternakan-back-btn" onClick={() => currentRoute.value = 'home'}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="15 18 9 12 15 6"/>
                </svg>
                Beranda
              </button>
              <div>
                <Typography variant="h1" size="text-xl" weight="bold" color="white" className="m-0 lh-1">
                  Peternakan
                </Typography>
                <Typography variant="p" size="text-xs" className="m-0" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  Sah Hai Agro Farm
                </Typography>
              </div>
            </div>
            <button
              class="peternakan-back-btn"
              onClick={() => currentRoute.value = 'home'}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
              </svg>
              Keluar
            </button>
          </div>

          {/* Tab nav */}
          <nav class="peternakan-tab-nav">
            {tabs.map(tab => (
              <button
                key={tab.id}
                class={['peternakan-tab-btn', activeTab.value === tab.id ? 'active' : '']}
                onClick={() => activeTab.value = tab.id}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* ── Content ─────────────────────────────── */}
        <div class="peternakan-content">
          {activeTab.value === 'dasbor'     && <DasborView />}
          {activeTab.value === 'ternak'     && <TernakView />}
          {activeTab.value === 'pencatatan' && <PencatatanView />}
          {activeTab.value === 'riwayat'    && <RiwayatView />}
        </div>
      </div>
    );
  }
});
