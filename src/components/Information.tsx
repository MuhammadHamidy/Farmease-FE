import { defineComponent, ref } from 'vue';
import InfoHero from './information/InfoHero';
import InfoProfile from './information/InfoProfile';
import InfoLocation from './information/InfoLocation';
import InfoContact from './information/InfoContact';
import Typography from './ui/peternakan/Typography';

export default defineComponent({
  name: 'Information',
  setup() {
    const activeTab = ref('detail_peternakan');

    const tabs = [
      { id: 'detail_peternakan', label: 'Detail Peternakan' },
      { id: 'lokasi_farm', label: 'Lokasi Farm' },
      { id: 'kontak', label: 'Hubungi Kami' }
    ];

    return () => (
      <div class="information-page bg-background grow d-flex flex-column" style={{ minHeight: 'calc(100vh - 80px)' }}>
        {/* Header Banner */}
        <InfoHero />

        {/* Tab Navigation */}
        <div class="info-nav-container sticky-top shadow-sm border-bottom z-2" style={{ top: '64px', backgroundColor: 'var(--color-surface-container-lowest)' }}>
          <div class="container">
            <ul class="nav info-nav py-3 flex-nowrap overflow-auto hide-scrollbar gap-2 justify-content-md-center">
              {tabs.map(tab => (
                <li class="nav-item shrink-0" key={tab.id}>
                  <button 
                    class={["nav-link rounded-pill px-4 py-2 transition-all fw-bold border-0 cursor-pointer", activeTab.value === tab.id ? "active" : ""]}
                    style={activeTab.value === tab.id 
                      ? { backgroundColor: 'var(--color-secondary)', color: 'white' } 
                      : { backgroundColor: 'var(--color-primary-fixed)', color: 'var(--color-primary)' }}
                    onClick={() => activeTab.value = tab.id}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tab Content */}
        <div class="info-content-container container py-5 my-3 grow">
          {activeTab.value === 'detail_peternakan' && <InfoProfile />}
          {activeTab.value === 'lokasi_farm' && <InfoLocation />}
          {activeTab.value === 'kontak' && <InfoContact />}
        </div>
      </div>
    );
  }
});
