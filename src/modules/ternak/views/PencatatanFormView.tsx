import { defineComponent, ref, computed, watch } from 'vue';
import '@/modules/ternak/assets/css/modules/RecordForm.css';
import { activePencatatanForm, selectedPencatatanPayload, cageSession, userSession } from '@/store/navigation';
import { submitPencatatanSubmission } from '@/modules/ternak/store/operatorAdmin';
import { stocks } from '@/modules/ternak/store/peternakan';
import Typography from '@/shared/ui/Typography';
import Badge from '@/shared/ui/Badge';
import Button from '@/shared/ui/Button';
import PencatatanModeToggle from '@/modules/ternak/components/pencatatan/PencatatanModeToggle';
import PencatatanTypeFields, { type PencatatanFormItem } from '@/modules/ternak/components/pencatatan/PencatatanTypeFields';
import type { PencatatanMode } from '@/modules/ternak/components/pencatatan/PencatatanModeToggle';

const JENIS_ICONS: Record<string, string> = {
  pakan: '/icon/catat_pakan.png',
  kesehatan: '/icon/catat_sehat.png',
  perkawinan: '/icon/catat_kawin.png',
  kelahiran: '/icon/catat_lahir.png',
  kotoran: '/icon/catat_kotoran.png',
};

const MODE_TOGGLE_TYPES = new Set(['pakan', 'kesehatan', 'kotoran']);

export default defineComponent({
  name: 'PencatatanFormView',
  setup() {
    const rincianItems = computed(() => activePencatatanForm.value?.rincian || []);
    const selectedScope = computed(() => activePencatatanForm.value?.scope || 'domba');
    const forms = ref<PencatatanFormItem[]>([]);

    const initForms = () => {
      forms.value = rincianItems.value.map((item: { id: string; name: string; mode?: string }) => ({
        id: item.id,
        name: item.name,
        mode: (selectedScope.value === 'kandang' ? 'kelompok' : 'individu') as PencatatanMode,
        targetId: '',
        qty: '',
        unit: 'kg',
        note: '',
        tindakan: '',
        obat: '',
        vitaminAmount: '',
        kotoranState: 'campur',
        idPejantan: '',
        metoda: 'alami',
        jumlahAnak: '',
        kondisiInduk: 'Sehat',
        kondisiAnak: 'Sehat',
        tanggal: new Date().toISOString().split('T')[0],
      }));

      forms.value.forEach((f) => {
        if (f.mode === 'kelompok' || activePencatatanForm.value?.jenis?.id === 'kotoran') {
          if (cageSession.value?.code) {
            f.targetId = cageSession.value.code;
          }
        }
      });
    };

    watch(
      () => activePencatatanForm.value,
      (val) => {
        if (val?.rincian?.length) initForms();
      },
      { immediate: true },
    );

    const handleModeChange = (form: PencatatanFormItem, mode: PencatatanMode) => {
      form.mode = mode;
      form.targetId = mode === 'kelompok' ? cageSession.value?.code || '' : '';
    };

    const handleSaved = () => {
      const isValid = forms.value.every((f) => f.targetId);
      if (!isValid) return alert('Mohon lengkapi ID Ternak/Kandang pada setiap kartu');

      const payload = {
        type: activePencatatanForm.value?.jenis?.id || 'pencatatan',
        data: {
          items: forms.value,
          summary: `Mencatat ${forms.value.length} rincian ${activePencatatanForm.value?.jenis?.name}`,
        },
      };

      submitPencatatanSubmission({
        type: payload.type,
        scope: selectedScope.value,
        summary: payload.data.summary,
        payload,
        operatorCode: userSession.value?.code,
        operatorName: userSession.value?.name,
        cageCode: cageSession.value?.code,
        taskId: activePencatatanForm.value?.taskId,
      });

      activePencatatanForm.value = null;
      selectedPencatatanPayload.value = payload;
    };

    const goBack = () => {
      activePencatatanForm.value = null;
    };

    const matchedStocks = computed(() => {
      const type = activePencatatanForm.value?.jenis?.id || '';
      return stocks.value.filter(
        (s) =>
          (type === 'pakan' && (s.category === 'hijauan' || s.category === 'konsentrat')) ||
          (type === 'kesehatan' && s.category === 'vitamin') ||
          (type === 'kotoran' && s.category === 'kotoran'),
      );
    });

    return () => {
      const jenis = activePencatatanForm.value?.jenis;
      if (!jenis) return null;

      const jenisIcon = JENIS_ICONS[jenis.id] || '/icon/catat_kotoran.png';
      const showModeToggle = MODE_TOGGLE_TYPES.has(jenis.id);

      return (
        <div class="pencatatan-form-overlay animate-fade-in">
          <div class="container-fluid mx-auto" style={{ maxWidth: '1200px' }}>
            <div class="d-flex justify-content-between align-items-center mb-5">
              <div class="d-flex align-items-center">
                <Button
                  variant="ghost"
                  onClick={goBack}
                  v-slots={{
                    iconLeft: () => (
                      <img
                        src="/icon/left-row.png"
                        style={{ width: '18px', height: 'auto', objectFit: 'contain' }}
                      />
                    ),
                  }}
                >
                  <div class="ms-1 text-start">
                    <Typography variant="h2" weight="extrabold" className="m-0 text-almond-beige">
                      Isi Form Pencatatan
                    </Typography>
                    <Typography variant="span" className="text-secondary small fw-bold">
                      {jenis.name} • {selectedScope.value === 'kandang' ? 'Per Kandang' : 'Per Domba'}
                    </Typography>
                  </div>
                </Button>
              </div>

              <div class="d-flex gap-3">
                <Button variant="secondary" shape="pill" onClick={goBack}>
                  Batal
                </Button>
                <Button variant="primary" shape="pill" onClick={handleSaved} className="shadow-sm">
                  Simpan Semua
                </Button>
              </div>
            </div>

            <div class="row g-4">
              <div class="col-lg-8">
                <div class="d-flex flex-column gap-4">
                  {forms.value.map((form, index) => (
                    <div key={index} class="pencatatan-form-card">
                      <div class="d-flex justify-content-between align-items-start mb-4 flex-wrap gap-3">
                        <div class="d-flex align-items-center gap-3">
                          <div class="pencatatan-form-card-header-icon">
                            <img src={jenisIcon} style={{ width: '30px', height: '30px', objectFit: 'contain' }} alt="" />
                          </div>
                          <div>
                            <Typography variant="h4" weight="extrabold" className="m-0">
                              {form.name}
                            </Typography>
                            <Typography variant="p" size="text-xs" color="secondary" className="m-0">
                              Rincian Pencatatan #{index + 1}
                            </Typography>
                          </div>
                        </div>

                        {showModeToggle && (
                          <PencatatanModeToggle
                            modelValue={form.mode}
                            onUpdateModelValue={(mode: PencatatanMode) => handleModeChange(form, mode)}
                          />
                        )}
                      </div>

                      <PencatatanTypeFields jenisId={jenis.id} form={form} showModeToggle={false} />
                    </div>
                  ))}
                </div>
              </div>

              <div class="col-lg-4">
                <div class="sticky-top" style={{ top: '2rem' }}>
                  <div class="pencatatan-form-card">
                    <div class="d-flex align-items-center gap-2 mb-4">
                      <img src="/icon/statistic.png" style={{ width: '20px', height: '20px', opacity: 0.6 }} alt="" />
                      <Typography variant="h5" weight="extrabold" className="m-0">
                        Informasi Stok Terkait
                      </Typography>
                    </div>

                    <div class="stock-list-compact">
                      {matchedStocks.value.length === 0 ? (
                        <div class="text-center py-4 rounded-2xl bg-surface-container-low text-on-surface-variant small">
                          Tidak ada stok yang sesuai
                        </div>
                      ) : (
                        matchedStocks.value.map((s) => (
                          <div
                            class="d-flex justify-content-between align-items-center p-3 mb-2 rounded-2xl bg-surface-container-low"
                            key={s.id}
                          >
                            <div class="min-w-0">
                              <Typography
                                variant="p"
                                size="text-xs"
                                weight="extrabold"
                                className="mb-0 text-truncate d-block"
                              >
                                {s.name}
                              </Typography>
                              <Typography
                                variant="span"
                                style={{ fontSize: '0.65rem' }}
                                weight="bold"
                                className="text-secondary"
                              >
                                {s.category}
                              </Typography>
                            </div>
                            <Badge variant="success" className="px-3 py-1 font-monospace" style={{ fontSize: '0.7rem' }}>
                              {s.qty} {s.unit}
                            </Badge>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
  },
});
