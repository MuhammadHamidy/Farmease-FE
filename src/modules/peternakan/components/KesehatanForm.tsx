import { defineComponent, ref } from 'vue';
import Typography from '../../../components/ui/Typography';
import CustomInput from '../../../components/ui/Input';
import CustomSelect from '../../../components/ui/Select';
import CustomButton from '../../../components/ui/Button';

export default defineComponent({
  name: 'KesehatanForm',
  setup() {
    const form = ref({ idTernak: '', tanggal: '', jenisPerawatan: '', catatan: '', dokter: '' });
    const saved = ref(false);
    
    const submit = () => { 
      saved.value = true; 
      setTimeout(() => saved.value = false, 2500); 
    };

    return () => (
      <div class="pencatatan-form">
        <Typography variant="h4" weight="bold" color="kombu-green" className="mb-4 fs-6">
          Catatan Kesehatan Ternak
        </Typography>
        <div class="row g-3">
          <div class="col-12 col-md-6">
            <label class="pencatatan-label">ID Ternak</label>
            <CustomInput modelValue={form.value.idTernak} placeholder="Contoh: D-001" onUpdate:modelValue={(v: string) => form.value.idTernak = v} />
          </div>
          <div class="col-12 col-md-6">
            <label class="pencatatan-label">Tanggal Pemeriksaan</label>
            <CustomInput modelValue={form.value.tanggal} placeholder="YYYY-MM-DD" onUpdate:modelValue={(v: string) => form.value.tanggal = v} />
          </div>
          <div class="col-12 col-md-6">
            <label class="pencatatan-label">Jenis Perawatan</label>
            <CustomSelect modelValue={form.value.jenisPerawatan} options={['Vaksinasi', 'Pengobatan', 'Pemeriksaan Rutin', 'Pemotongan Kuku', 'Vitamin']} placeholder="Pilih Jenis" onUpdate:modelValue={(v: string) => form.value.jenisPerawatan = v} />
          </div>
          <div class="col-12 col-md-6">
            <label class="pencatatan-label">Nama Dokter / Petugas</label>
            <CustomInput modelValue={form.value.dokter} placeholder="Nama petugas" onUpdate:modelValue={(v: string) => form.value.dokter = v} />
          </div>
          <div class="col-12">
            <label class="pencatatan-label">Catatan Tambahan</label>
            <textarea
              class="form-control rounded-3"
              rows={3}
              placeholder="Kondisi ternak, dosis, atau catatan khusus..."
              value={form.value.catatan}
              onInput={(e) => form.value.catatan = (e.target as HTMLTextAreaElement).value}
              style={{ fontFamily: "'Nunito', sans-serif", fontSize: '0.9rem', borderColor: '#E5E7EB' }}
            />
          </div>
          <div class="col-12 d-flex gap-2 align-items-center">
            <CustomButton variant="solid" onClick={submit}>Simpan Catatan</CustomButton>
            {saved.value && <Typography variant="span" size="text-sm" color="dark-olive-green" weight="semibold">✓ Berhasil disimpan!</Typography>}
          </div>
        </div>
      </div>
    );
  }
});
