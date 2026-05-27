import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import '../../../assets/css/modules/admin/AdminPage.css';
import { userSession, cageSession } from '../../../store/navigation';
import { pendingApprovalCount } from '@/store/operatorAdmin';
import UserManagementView from './UserManagementView.tsx';
import ActivityLogView from './ActivityLogView.tsx';
import OperatorTaskManagementView from './OperatorTaskManagementView.tsx';
import RoutineScheduleView from './RoutineScheduleView.tsx';
import PencatatanApprovalView from './PencatatanApprovalView.tsx';

const tabs = [
  { id: 'pengguna', label: 'Manajemen Pengguna' },
  { id: 'tugas', label: 'Tugas Operator' },
  { id: 'jadwal', label: 'Jadwal Rutin' },
  { id: 'persetujuan', label: 'Persetujuan Pencatatan' },
  { id: 'laporan', label: 'Laporan Aktivitas' },
] as const;

export default defineComponent({
  name: 'AdminPage',
  setup() {
    const router = useRouter();
    const activeTab = ref<string>('pengguna');

    const handleLogout = () => {
      userSession.value = null;
      cageSession.value = null;
      router.push({ name: 'admin-login' });
    };

    return () => (
      <div class="admin-page">
        <header class="admin-header">
          <div class="header-left">
            <div class="admin-logo-container" onClick={() => router.push({ name: 'home' })}>
              <img src="/icon/logo_farmease.png" alt="FARMease" />
            </div>
            <div class="header-divider d-none d-sm-block" />
            <h1 class="admin-title d-none d-sm-block">Panel Admin</h1>
          </div>

          <button type="button" class="admin-logout-btn" onClick={handleLogout} title="Keluar">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            <span class="d-none d-sm-inline">Keluar</span>
          </button>
        </header>

        <nav class="admin-nav">
          <div class="admin-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                class={['admin-tab', activeTab.value === tab.id ? 'active' : '']}
                onClick={() => {
                  activeTab.value = tab.id;
                }}
              >
                {tab.label}
                {tab.id === 'persetujuan' && pendingApprovalCount.value > 0 && (
                  <span class="admin-tab-badge">{pendingApprovalCount.value}</span>
                )}
              </button>
            ))}
          </div>
        </nav>

        <main class="admin-content">
          {activeTab.value === 'pengguna' && <UserManagementView />}
          {activeTab.value === 'tugas' && <OperatorTaskManagementView />}
          {activeTab.value === 'jadwal' && <RoutineScheduleView />}
          {activeTab.value === 'persetujuan' && <PencatatanApprovalView />}
          {activeTab.value === 'laporan' && <ActivityLogView />}
        </main>
      </div>
    );
  },
});
