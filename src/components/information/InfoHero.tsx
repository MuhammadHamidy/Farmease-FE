import { defineComponent } from 'vue';
import Typography from '@/components/ui/peternakan/Typography';

export default defineComponent({
  name: 'InfoHero',
  setup() {
    return () => (
      <div class="info-banner text-center py-5 position-relative overflow-hidden">
        <div 
          class="position-absolute w-100 h-100 start-0 top-0 opacity-25" 
          style={{ background: 'url("https://images.unsplash.com/photo-1516253593875-bd7ba053fbc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80") center/cover no-repeat' }}
        ></div>
        <div class="container position-relative z-1 py-4 text-white">
          <Typography variant="h1" size="text-4xl" weight="bold" className="mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Informasi Peternakan
          </Typography>
          <Typography variant="p" size="text-lg" className="max-w-2xl mx-auto text-light">
            Kenali lebih dekat Sah Hai Agro Farm, mulai dari profil peternakan, akses peta, hingga struktur organisasi kami.
          </Typography>
        </div>
      </div>
    );
  }
});
