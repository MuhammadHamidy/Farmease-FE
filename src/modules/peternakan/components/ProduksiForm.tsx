import { defineComponent, ref } from 'vue';
import Typography from '../../../components/ui/Typography';
import CustomInput from '../../../components/ui/Input';
import CustomSelect from '../../../components/ui/Select';
import CustomButton from '../../../components/ui/Button';

export default defineComponent({
  name: 'ProduksiForm',
  setup() {
    const form = ref({ tanggal: '', jenisProduk: '', berat: '', satuan: '', keterangan: '' });
    const saved = ref(false);
    
    const submit = () => { 
      saved.value = true; 
      setTimeout(() => saved.value = false, 2500); 
    };

    return () => (
      <div class="pencatatan-form">
        <Typography variant="h4" weight="bold" color="kombu-green" className="mb-4 fs-6">
          Catatan Produksi
        </Typography>
        <div class="row g-3">
          <div class="col-12 col-md-6">
            <label class="pencatatan-label">Tanggal</label>
            <CustomInput modelValue={form.value.tanggal} placeholder="YYYY-MM-DD" onUpdate:modelValue={(v: string) => form.value.tanggal = v} />
          </div>
          <div class="col-12 col-md-6">
            <label class="pencatatan-label">Jenis Produk</label>
            <CustomSelect modelValue={form.value.jenisProduk} options={['Daging (Penjualan)', 'Wol / Bulu', 'Susu', 'Pupuk Organik']} placeholder="Pilih Produk" onUpdate:modelValue={(v: string) => form.value.jenisProduk = v} />
          </div>
          <div class="col-12 col-md-6">
            <label class="pencatatan-label">Jumlah / Berat</label>
            <CustomInput modelValue={form.value.berat} placeholder="Contoh: 25" onUpdate:modelValue={(v: string) => form.value.berat = v} />
          </div>
          <div class="col-12 col-md-6">
            <label class="pencatatan-label">Satuan</label>
            <CustomSelect modelValue={form.value.satuan} options={['kg', 'liter', 'ekor', 'karung']} placeholder="Pilih Satuan" onUpdate:modelValue={(v: string) => form.value.satuan = v} />
          </div>
          <div class="col-12">
            <label class="pencatatan-label">Keterangan</label>
            <textarea
              class="form-control rounded-3"
              rows={2}
              placeholder="Kualitas, tujuan penjualan, catatan lainnya..."
              value={form.value.keterangan}
              onInput={(e) => form.value.keterangan = (e.target as HTMLTextAreaElement).value}
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
