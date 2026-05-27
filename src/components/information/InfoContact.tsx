import { defineComponent } from 'vue';
import Typography from '@/components/ui/peternakan/Typography';

export default defineComponent({
  name: 'InfoContact',
  setup() {
    const contactLinks = [
      {
        id: 'pusat-bantuan',
        title: 'Pusat Bantuan',
        info: '+62 811-2345-6789 (Melayani chat & panggilan)',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
        )
      },
      {
        id: 'email-bisnis',
        title: 'Email Bisnis',
        info: 'info@sahhaiagro.com\npartnership@sahhaiagro.com',
        icon: (
          <img src="/icon/mail.png" style={{ width: '28px', height: '28px', objectFit: 'contain' }} alt="Email" />
        )
      }
    ];

    return () => (
      <div class="info-contact fade-in-up">
        {/* Banner Section */}
        <div class="text-center mb-5 p-5 rounded-5" style={{ backgroundColor: 'var(--color-primary-fixed)' }}>
           <h1 class="display-4 fw-bold mb-3" style={{ color: 'var(--color-primary)' }}>Hubungi Kami</h1>
           <p class="fs-5 text-secondary mx-auto" style={{ maxWidth: '800px' }}>
              Kami siap membantu Anda untuk informasi pemesanan, konsultasi, maupun kerja sama terkait peternakan.
           </p>
        </div>
        
        {/* Contact Cards Row */}
        <div class="row g-4 justify-content-center mb-5">
          {contactLinks.map((contact) => (
            <div class="col-12 col-md-5" key={contact.id}>
              <div class="card border border-secondary-subtle shadow-sm rounded-4 p-4 text-center h-100" style={{ backgroundColor: 'rgba(225, 212, 194, 0.5)' }}>
                <div class="bg-brown p-3 d-inline-flex mx-auto mb-3 text-white rounded-3" style={{ backgroundColor: 'var(--color-secondary)' }}>
                  {contact.icon}
                </div>
                <h3 class="fw-bold fs-4 mb-2" style={{ color: 'var(--color-primary)' }}>{contact.title}</h3>
                <p class="text-secondary mb-0" style={{ whiteSpace: 'pre-line' }}>{contact.info}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div class="map-section mt-5 bg-beige-light p-4 rounded-4 shadow-sm border" style={{ backgroundColor: 'rgba(225, 212, 194, 0.5)' }}>
           <div class="row g-4 align-items-center">
              <div class="col-12 col-md-4">
                 <div class="map-img-box rounded-3 overflow-hidden shadow-sm" style={{ height: '200px' }}>
                    <img src="/img/map_placeholder_full.png" alt="Map" class="w-100 h-100 object-fit-cover" />
                 </div>
              </div>
              <div class="col-12 col-md-8 ps-md-4">
                 <h2 class="fw-bold fs-3 mb-3" style={{ color: 'var(--color-primary)' }}>Lokasi Peternakan</h2>
                 <p class="text-secondary mb-4">
                    Desa Maro Sebo, Kec. Jambi Luar Kota, Kabupaten Muaro Jambi, Jambi
                 </p>
                 <button class="btn btn-dark px-4 py-2 rounded-3 fw-bold" style={{ backgroundColor: 'var(--color-primary)' }}>
                    Lihat di Peta
                 </button>
              </div>
           </div>
        </div>
      </div>
    );
  }
});
