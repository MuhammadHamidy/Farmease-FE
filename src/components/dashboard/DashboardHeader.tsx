import { defineComponent, type PropType } from 'vue';
import Typography from '@/components/ui/peternakan/Typography';

export default defineComponent({
  name: 'DashboardHeader',
  props: {
    activeTab: {
      type: String as PropType<string>,
      required: true
    }
  },
  emits: ['update:activeTab'],
  setup(props, { emit }) {
    return () => (
      <div class="d-flex flex-column flex-md-row justify-content-between align-items-center mb-5 gap-4">
        <div>
          <Typography variant="h1" weight="bold" color="coffee-brown" className="mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Dasbor Utama
          </Typography>
          <Typography variant="p" className="text-secondary m-0">
            Pantau performa operasional Sah Hai Agro Farm secara real-time.
          </Typography>
        </div>
        
        <div class="bg-white p-1 rounded-pill shadow-sm border d-inline-flex">
          <button 
            onClick={() => emit('update:activeTab', 'peternakan')}
            class={["btn rounded-pill px-4 py-2 fw-bold transition-all border-0", props.activeTab === 'peternakan' ? 'text-white shadow-sm' : 'text-secondary']}
            style={props.activeTab === 'peternakan' ? { backgroundColor: 'var(--color-secondary)' } : {}}
          >
            Peternakan
          </button>
        </div>
      </div>
    );
  }
});
