import { defineComponent, ref } from 'vue';
import SubTabNav from '../components/SubTabNav';
import KesehatanForm from '../components/KesehatanForm';
import PakanForm from '../components/PakanForm';
import ReproduksiForm from '../components/ReproduksiForm';
import ProduksiForm from '../components/ProduksiForm';

export default defineComponent({
  name: 'PencatatanView',
  setup() {
    const subTabs = [
      { id: 'kesehatan',  label: '🩺 Kesehatan' },
      { id: 'pakan',      label: '🌿 Pakan' },
      { id: 'reproduksi', label: '🐑 Reproduksi' },
      { id: 'produksi',   label: '📦 Produksi' },
    ];
    const activeSubTab = ref('kesehatan');

    return () => (
      <div class="p-3 p-md-4 d-flex flex-column">
        {/* Modular Sub-tab navigation */}
        <SubTabNav 
          tabs={subTabs} 
          activeTab={activeSubTab.value} 
          onUpdate:activeTab={(id: string) => activeSubTab.value = id} 
        />

        {/* Form area using extracted components */}
        <div class="bg-white rounded-4 border shadow-sm p-4">
          {activeSubTab.value === 'kesehatan'  && <KesehatanForm />}
          {activeSubTab.value === 'pakan'      && <PakanForm />}
          {activeSubTab.value === 'reproduksi' && <ReproduksiForm />}
          {activeSubTab.value === 'produksi'   && <ProduksiForm />}
        </div>
      </div>
    );
  }
});
