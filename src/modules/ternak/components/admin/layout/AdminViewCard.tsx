import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AdminViewCard',
  props: {
    padding: { type: Boolean, default: true },
    flush: { type: Boolean, default: false },
  },
  setup(props, { slots }) {
    return () => (
      <div class={['admin-view-card', props.flush ? 'admin-view-card--flush' : '', !props.padding ? 'admin-view-card--no-pad' : '']}>
        {slots.default?.()}
      </div>
    );
  },
});
