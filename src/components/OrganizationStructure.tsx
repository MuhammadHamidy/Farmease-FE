import { defineComponent } from 'vue';
import '../assets/css/OrganizationStructure.css';

export default defineComponent({
  name: 'OrganizationStructure',
  setup() {
    const members = [
      { name: 'Dr. Ir. Budi Santoso', role: 'Direktur Utama', img: 'https://ui-avatars.com/api/?name=Budi+Santoso&background=3b4721&color=fff' },
      { name: 'Andi Pratama, S.Pt.', role: 'Manajer Peternakan', img: 'https://ui-avatars.com/api/?name=Andi+Pratama&background=6a7a40&color=fff' },
      { name: 'Siti Rahma, S.P.', role: 'Manajer Perkebunan', img: 'https://ui-avatars.com/api/?name=Siti+Rahma&background=6a7a40&color=fff' },
      { name: 'Riko Wijaya', role: 'Kepala Kandang', img: 'https://ui-avatars.com/api/?name=Riko+Wijaya&background=8a9674&color=fff' },
      { name: 'Dewi Lestari', role: 'Pengawas Lahan', img: 'https://ui-avatars.com/api/?name=Dewi+Lestari&background=8a9674&color=fff' },
      { name: 'Agus Salim', role: 'Administrasi', img: 'https://ui-avatars.com/api/?name=Agus+Salim&background=8a9674&color=fff' }
    ];

    return () => (
      <section class="org-section py-5 w-100 bg-background" id="struktur-organisasi">
        <div class="container py-lg-5" style={{ maxWidth: '800px' }}>
          <div class="mb-5 text-center">
            <h2 class="display-6 fw-bold text-dark mb-2">Struktur Organisasi</h2>
            <p class="text-secondary lead">Sah Hai Agro Farm</p>
            <div class="mx-auto mt-3" style={{ width: '60px', height: '4px', backgroundColor: '#283618', borderRadius: '2px' }}></div>
          </div>

          <div class="org-zigzag-container d-flex flex-column gap-5 mx-auto mt-5">
            {members.map((member, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} class="row align-items-center">
                  {isEven ? (
                    <>
                      {/* Avatar on Left, Text on Right */}
                      <div class="col-6 d-flex justify-content-end pe-4">
                        <div class="org-avatar-box shadow-sm rounded-4 overflow-hidden border border-2" style={{ borderColor: '#283618' }}>
                          <img src={member.img} alt={member.name} class="w-100 h-100 object-fit-cover transition-transform" />
                        </div>
                      </div>
                      <div class="col-6 ps-2 text-start">
                        <h4 class="fw-bold mb-1 fs-5" style={{ color: '#283618' }}>{member.role}</h4>
                        <p class="text-dark mb-0 fw-bold fs-6">{member.name}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Text on Left, Avatar on Right */}
                      <div class="col-6 pe-4 d-flex flex-column align-items-end text-start">
                        <div style={{ minWidth: '150px' }}>
                          <h4 class="fw-bold mb-1 fs-5" style={{ color: '#283618' }}>{member.role}</h4>
                          <p class="text-dark mb-0 fw-bold fs-6">{member.name}</p>
                        </div>
                      </div>
                      <div class="col-6 ps-2 d-flex justify-content-start">
                        <div class="org-avatar-box shadow-sm rounded-4 overflow-hidden border border-2" style={{ borderColor: '#283618' }}>
                          <img src={member.img} alt={member.name} class="w-100 h-100 object-fit-cover transition-transform" />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
});
