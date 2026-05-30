import { defineComponent, type PropType } from 'vue';
import Typography from './Typography';
import '@/shared/assets/css/ui/StatCard.css';

export default defineComponent({
  name: 'StatCard',
  props: {
    label: { type: String, required: true },
    value: { type: String, required: true },
    sub: { type: String, default: '' },
    color: { type: String as PropType<'primary' | 'accent' | 'light'>, default: 'primary' },
    icon: { type: Function, default: null },
  },
  setup(props) {
    const getBackgroundColor = (color?: 'primary' | 'accent' | 'light'): string => {
      const key = color ?? 'primary';
      switch (key) {
        case 'primary':
          return '#8B5E3C';
        case 'accent':
          return '#A78D78';
        case 'light':
          return '#E1D4C2';
        default:
          return '#8B5E3C';
      }
    };

    const getTextColor = (color?: 'primary' | 'accent' | 'light'): string => {
      switch (color ?? 'primary') {
        case 'light':
          return '#3D2F24';
        default:
          return '#FFFFFF';
      }
    };

    return () => (
      <div
        class="stat-card"
        style={{ backgroundColor: getBackgroundColor(props.color) }}
      >
        {props.icon && (
          <div class="stat-card-icon">{props.icon()}</div>
        )}
        <Typography variant="h2" size="text-4xl" weight="bold" color={getTextColor(props.color) as any} className="stat-card-value">
          {props.value}
        </Typography>
        <Typography variant="p" size="text-sm" color={getTextColor(props.color) as any} className="stat-card-label">
          {props.label}
        </Typography>
        {props.sub && (
          <Typography variant="span" size="text-xs" className="stat-card-sub">
            {props.sub}
          </Typography>
        )}
      </div>
    );
  }
});
