import { defineComponent, type PropType } from 'vue';

export interface TabItem {
  id: string;
  label: string;
}

export default defineComponent({
  name: 'SubTabNav',
  props: {
    tabs: { type: Array as PropType<TabItem[]>, required: true },
    activeTab: { type: String, required: true },
  },
  emits: ['update:activeTab'],
  setup(props, { emit }) {
    return () => (
      <div class="d-flex gap-2 flex-wrap mb-3">
        {props.tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => emit('update:activeTab', tab.id)}
            class="pencatatan-subtab-btn"
            style={{
              backgroundColor: props.activeTab === tab.id ? '#283618' : '#FEFAE0',
              color: props.activeTab === tab.id ? '#FEFAE0' : '#606C38',
              border: `1.5px solid ${props.activeTab === tab.id ? '#283618' : '#DDA15E44'}`,
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
    );
  }
});
