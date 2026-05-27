import { defineComponent } from 'vue';
import Typography from '../../ui/admin/Typography';
import Badge from '../../ui/admin/Badge';

export default defineComponent({
  name: 'AdminHeader',
  props: {
    pageTitle: { type: String, required: true },
    userName: { type: String, default: 'Administrator' },
    userRole: { type: String, default: 'Admin' },
    onLogout: { type: Function, default: null },
  },
  setup(props) {
    return () => (
      <header class="admin-top-header">
        <div class="admin-top-header-left">
          <Typography variant="h3" weight="extrabold" class="admin-top-title m-0">
            {props.pageTitle}
          </Typography>
        </div>

        <div class="admin-top-header-right">
          <div class="admin-user-chip">
            <div class="admin-user-avatar">
              <img src="/icon/admin/grey-20.svg" alt="" />
            </div>
            <div class="admin-user-meta d-none d-md-block">
              <Typography variant="span" weight="bold" class="d-block m-0">
                {props.userName}
              </Typography>
              <Badge variant="primary" class="mt-1">
                {props.userRole}
              </Badge>
            </div>
          </div>

          <button type="button" class="admin-logout-btn" onClick={() => props.onLogout?.()} title="Keluar">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            <span class="d-none d-sm-inline">Keluar</span>
          </button>
        </div>
      </header>
    );
  },
});
