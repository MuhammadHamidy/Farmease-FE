import { defineComponent, ref } from 'vue';
import Typography from '../../../components/ui/Typography';
import CustomInput from '../../../components/ui/Input';
import CustomSelect from '../../../components/ui/Select';
import CustomButton from '../../../components/ui/Button';

export default defineComponent({
  name: 'PakanForm',
  setup() {
    const form = ref({ tanggal: '', jenisPakan: '', jumlah: '', satuan: '', sesi: '', catatan: '' });
    const saved = ref(false);
    
    const submit = () => { 
      saved.value = true; 
      setTimeout(() => saved.value = false, 2500); 
    };

    return () => (
      <div class="pencatatan-form">
        <Typography variant="h4" weight="bold" color="kombu-green" className="mb-4 fs-6">
          Catatan Pemberian Pakan
        </Typography>
        <div class="row g-3">
          <div class="col-12 col-md-6">
            <label class="pencatatan-label">Tanggal</label>
            <CustomInput modelValue={form.value.tanggal} placeholder="YYYY-MM-DD" onUpdate:modelValue={(v: string) => form.value.tanggal = v} />
          </div>
          <div class="col-12 col-md-6">
            <label class="pencatatan-label">Sesi Pemberian</label>
            <CustomSelect modelValue={form.value.sesi} options={['Pagi', 'Siang', 'Sore', 'Malam']} placeholder="Pilih Sesi" onUpdate:modelValue={(v: string) => form.value.sesi = v} />
          </div>
          <div class="col-12 col-md-6">
            <label class="pencatatan-label">Jenis Pakan</label>
            <CustomSelect modelValue={form.value.jenisPakan} options={['Rumput Segar', 'Konsentrat', 'Ampas Tahu', 'Hay', 'Silase', 'Campuran']} placeholder="Pilih Jenis Pakan" onUpdate:modelValue={(v: string) => form.value.jenisPakan = v} />
          </div>
          <div class="col-12 col-md-3">
            <label class="pencatatan-label">Jumlah</label>
            <CustomInput modelValue={form.value.jumlah} placeholder="Contoh: 50" onUpdate:modelValue={(v: string) => form.value.jumlah = v} />
          </div>
          <div class="col-12 col-md-3">
            <label class="pencatatan-label">Satuan</label>
            <CustomSelect modelValue={form.value.satuan} options={['kg', 'gram', 'liter', 'ikat']} placeholder="Satuan" onUpdate:modelValue={(v: string) => form.value.satuan = v} />
          </div>
          <div class="col-12">
            <label class="pencatatan-label">Catatan</label>
            <textarea
              class="form-control rounded-3"
              rows={2}
              placeholder="Catatan khusus pemberian pakan..."
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
