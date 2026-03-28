import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import '../../assets/css/ui/Button.css';

export default defineComponent({
  name: 'CustomButton',
  props: {
    variant: { type: String as PropType<'solid' | 'disabled' | 'outline'>, default: 'solid' },
    icon: { type: Function, default: null },
    onClick: { type: Function as PropType<() => void>, default: null },
  },
  setup(props, { slots }) {
    return () => {
      const variantClass = `btn-primary-${props.variant}`;
      return (
        <button
          class={["custom-btn d-flex align-items-center justify-content-center gap-2", variantClass]}
          disabled={props.variant === 'disabled'}
          onClick={() => props.onClick?.()}
        >
          {props.icon && props.icon()}
          {slots.default && slots.default()}
        </button>
      );
    }
  }
});
