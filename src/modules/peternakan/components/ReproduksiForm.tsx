import { defineComponent, ref } from 'vue';
import Typography from '../../../components/ui/Typography';
import CustomInput from '../../../components/ui/Input';
import CustomSelect from '../../../components/ui/Select';
import CustomButton from '../../../components/ui/Button';

export default defineComponent({
  name: 'ReproduksiForm',
  setup() {
    const form = ref({ idInduk: '', idPejantan: '', tanggalKawin: '', metodaKawin: '', statusKehamilan: '', tanggalLahir: '', jumlahAnak: '', catatan: '' });
    const saved = ref(false);
    
    const submit = () => { 
      saved.value = true; 
      setTimeout(() => saved.value = false, 2500); 
    };

    return () => (
      <div class="pencatatan-form">
        <Typography variant="h4" weight="bold" color="kombu-green" className="mb-4 fs-6">
          Catatan Reproduksi
        </Typography>
        <div class="row g-3">
          <div class="col-12 col-md-6">
            <label class="pencatatan-label">ID Induk</label>
            <CustomInput modelValue={form.value.idInduk} placeholder="Contoh: D-002" onUpdate:modelValue={(v: string) => form.value.idInduk = v} />
          </div>
          <div class="col-12 col-md-6">
            <label class="pencatatan-label">ID Pejantan</label>
            <CustomInput modelValue={form.value.idPejantan} placeholder="Contoh: D-007" onUpdate:modelValue={(v: string) => form.value.idPejantan = v} />
          </div>
          <div class="col-12 col-md-6">
            <label class="pencatatan-label">Tanggal Kawin</label>
            <CustomInput modelValue={form.value.tanggalKawin} placeholder="YYYY-MM-DD" onUpdate:modelValue={(v: string) => form.value.tanggalKawin = v} />
          </div>
          <div class="col-12 col-md-6">
            <label class="pencatatan-label">Metoda Kawin</label>
            <CustomSelect modelValue={form.value.metodaKawin} options={['Alami', 'Inseminasi Buatan (IB)']} placeholder="Pilih Metoda" onUpdate:modelValue={(v: string) => form.value.metodaKawin = v} />
          </div>
          <div class="col-12 col-md-6">
            <label class="pencatatan-label">Status Kehamilan</label>
            <CustomSelect modelValue={form.value.statusKehamilan} options={['Konfirmasi Hamil', 'Tidak Hamil', 'Menunggu Konfirmasi']} placeholder="Pilih Status" onUpdate:modelValue={(v: string) => form.value.statusKehamilan = v} />
          </div>
          <div class="col-12 col-md-3">
            <label class="pencatatan-label">Tanggal Lahir (jika sudah)</label>
            <CustomInput modelValue={form.value.tanggalLahir} placeholder="YYYY-MM-DD" onUpdate:modelValue={(v: string) => form.value.tanggalLahir = v} />
          </div>
          <div class="col-12 col-md-3">
            <label class="pencatatan-label">Jumlah Anak</label>
            <CustomInput modelValue={form.value.jumlahAnak} placeholder="0" onUpdate:modelValue={(v: string) => form.value.jumlahAnak = v} />
          </div>
          <div class="col-12">
            <label class="pencatatan-label">Catatan</label>
            <textarea
              class="form-control rounded-3"
              rows={2}
              placeholder="Catatan kondisi kelahiran, komplikasi, dll..."
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
