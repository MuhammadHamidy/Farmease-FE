import { defineComponent } from 'vue';
import Typography from '@/components/ui/peternakan/Typography';
import Button from '@/components/ui/peternakan/Button';

export default defineComponent({
  name: 'InfoLocation',
  setup() {
    return () => (
      <div class="info-location fade-in-up">
        <div class="text-center mb-5">
          <Typography variant="h2" weight="bold" color="coffee-brown" className="mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Lokasi & Peta Akses
          </Typography>
          <Typography variant="p" className="text-secondary max-w-2xl mx-auto">
            Posisi kandang dan fasilitas Sah Hai Agro Farm terpusat, memudahkan akses logistik maupun pemantauan.
          </Typography>
        </div>
        
        <div class="row g-4 mb-4">
          <div class="col-12 col-lg-8">
            <div class="card border-0 shadow-sm rounded-4 overflow-hidden h-100 p-2">
              <div class="bg-light rounded-3 w-100 h-100 d-flex align-items-center justify-content-center" style={{ minHeight: '400px', border: '1px dashed #ccc' }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15862.61869818815!2d106.822815!3d-6.309033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1e018619bc5%3A0x86ea892b1a1ddf3!2sSouth%20Jakarta%2C%20South%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1711283627000!5m2!1sen!2sid"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, minHeight: '400px' }} 
                  allowfullscreen={false} 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade"
                  class="rounded-3"
                ></iframe>
              </div>
            </div>
          </div>
          
          <div class="col-12 col-lg-4 d-flex flex-column gap-4">
            <div class="card border-0 shadow-sm rounded-4 p-4 h-100">
              <Typography variant="h5" weight="bold" className="mb-4 text-dark d-block">
                Alamat Farm
              </Typography>
              
              <div class="d-flex align-items-start gap-3 mb-4">
                <div class="bg-primary-light rounded-circle p-2" style={{ color: 'var(--color-secondary)', backgroundColor: 'rgba(225, 212, 194, 0.1)' }}>
                  <img src="/icon/location.png" style={{ width: '20px', height: '20px', objectFit: 'contain' }} alt="Alamat" />
                </div>
                <div>
                  <Typography variant="p" weight="bold" className="text-dark mb-1 d-block">
                    Kantor & Peternakan
                  </Typography>
                  <Typography variant="span" size="text-sm" className="text-secondary m-0">
                    Jl. Raya Hijau Agro No. 88, Kawasan Pertanian Terpadu, Jawa Barat, 40111
                  </Typography>
                </div>
              </div>
              
              <div class="d-flex align-items-start gap-3 mb-4">
                <div class="bg-primary-light rounded-circle p-2" style={{ color: 'var(--color-secondary)', backgroundColor: 'rgba(225, 212, 194, 0.1)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                </div>
                <div>
                  <Typography variant="p" weight="bold" className="text-dark mb-1 d-block">
                    Jam Operasional
                  </Typography>
                  <Typography variant="span" size="text-sm" className="text-secondary m-0">
                    Senin - Jumat: 08:00 - 17:00<br/>Sabtu: 08:00 - 13:00
                  </Typography>
                </div>
              </div>
              
              <Button variant="solid" onClick={() => window.open('https://maps.google.com', '_blank')} class="w-100 mt-auto">
                Buka di Google Maps
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
