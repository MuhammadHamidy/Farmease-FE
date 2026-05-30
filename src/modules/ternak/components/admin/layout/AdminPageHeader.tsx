import { defineComponent } from 'vue';
import Typography from '@/shared/ui/admin/Typography';

export default defineComponent({
  name: 'AdminPageHeader',
  props: {
    title: { type: String, required: true },
    subtitle: { type: String, default: '' },
  },
  setup(props, { slots }) {
    return () => (
      <div class="admin-view-header">
        <div>
          <Typography variant="h2" class="admin-view-title">
            {props.title}
          </Typography>
          {props.subtitle && (
            <Typography variant="p" size="text-sm" color="secondary" class="m-0 mt-1">
              {props.subtitle}
            </Typography>
          )}
        </div>
        {slots.actions && <div class="admin-view-actions">{slots.actions()}</div>}
      </div>
    );
  },
});
